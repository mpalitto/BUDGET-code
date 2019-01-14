//This is the APP main page as it allows navigation between pages
//It is the 1st page called after log-in
//When thi page is loaded the connection to the HUB is established
//It will hold the APP data structure

import { Component } from '@angular/core';
import { Events, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainHubProvider } from './../../providers/main-hub/main-hub';

@IonicPage({name: "TabsPage"})
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  page = "Home";
  userSelection = "";
  user     = "";
  userNick = '';
  currentGroupID = "";
  groupIDs = [];
  groupNames = {}; // {groupID: groupName}
  amIadmin = {};   // {groupID: amIadmin}
  showBUT = false; // sho buttons for group editing

  selectOptions = {
      title: 'Are you sure?'
  }

  tab1Root = 'HomePage';
  tab2Root = 'InvitationsPage';
  tab3Root = 'ContactPage';
  tab4Root = 'AboutPage';

  constructor(private events: Events, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private mainHUB: MainHubProvider) {

    this.userNick = navParams.get('nick');
    this.user = navParams.get('email');

    this.events.subscribe('newGrpAdded', (id, name) => {
      this.groupIDs.push(id);
      this.groupNames[id] = name;
      this.amIadmin[id] = true;
      this.currentGroupID = id;
      this.events.publish('change-group', this.currentGroupID, this.groupNames[this.currentGroupID], this.amIadmin[this.currentGroupID]);
    });

    this.events.subscribe('editGRP', (gn) => {
      this.editGroup(gn);
    });

    this.events.subscribe('tab2opened', () => {
      this.events.publish('userInfo', this.userNick, this.user);
      this.events.publish('change-group', this.currentGroupID, this.groupNames[this.currentGroupID], this.amIadmin[this.currentGroupID]);
      this.showBUT = true;
    });

    this.mainHUB.getAllGroups(this.user).then(data => {
      // alert('DATA: '+JSON.stringify(data));
      for (var i = 0; i < data.length; i++) {
        this.groupIDs.push(data[i].groupID);
        this.groupNames[data[i].groupID] = data[i].groupName;
        this.amIadmin[data[i].groupID] = (data[i].privilege == 'admin');
        // alert('groupID: ' + data[i].groupID + ' groupName: ' + data[i].groupName);
      }
      this.mainHUB.getUserInfo(this.user).then(data => {
        this.currentGroupID = data.defaultGroupID;
        // alert('current: '+data.defaultGroupID);
      });
    });

    // send invite
    let invite = {
      FROM: this.user,
      FOR: "wife@gmail.com",
      GROUP: "NEW-GROUP"
    }
    mainHUB.send('invite', invite); //request for any new invitation to server

    // send invite
    invite = {
      FROM: "nicolo@gmail.com",
      FOR: "mpalitto@gmail.com",
      GROUP: "NEW-GROUP"
    }
    mainHUB.send('invite', invite); //request for any new invitation to server

    // send anyInvites query
    let userID = {
      userID: this.user,
    }
    mainHUB.send('anyInvites', userID); //request for any new invitation to server

    let data = {
      from: 'Matteo',
      to  : 'all',
      cmd : "Hi"
    };
    mainHUB.send('message', data);
  } // end constructor


  public logout() {
    //alert('logging OUT');
    this.mainHUB.logout().subscribe(succ => {
      this.navCtrl.popToRoot();
    });
  }

  selectGroup() {
    alert('change-group: '+' <--> '+this.currentGroupID+' <--> '+this.groupNames[this.currentGroupID]+' <--> '+this.amIadmin[this.currentGroupID]);
    this.events.publish('change-group', this.currentGroupID, this.groupNames[this.currentGroupID], this.amIadmin[this.currentGroupID]);
  }

  editGroup(gn) {
      let modal = this.modalCtrl.create('EditGroupPage', {groupName: gn});
      modal.onDidDismiss(data => {
        // alert(JSON.stringify(data)); alert('NEW NAME: '+data.newName);

        // UPDATE
        if (data.button === 'update') {
          this.mainHUB.updateGroupName(this.currentGroupID, data.newName).then(newName => {
            // alert(this.groupName+' has been RENAMED to: '+ newName);
            // this.loadGroupMembers();
            this.groupNames[this.currentGroupID] = newName;
            this.selectGroup();
            //this.events.publish('grpUpdated');
          });

        // ADD NEW GROUP
        } else if (data.button === 'create') {
          this.currentGroupID = this.user + '-' + data.newName.replace(/ /g,'-');
          this.groupIDs.push(this.currentGroupID);
          this.groupNames[this.currentGroupID] = data.newName;
          this.amIadmin[this.currentGroupID] = true;
          this.events.publish('addNewMember', this.currentGroupID, this.groupNames[this.currentGroupID], this.userNick, this.user, 'admin', '6');
          this.selectGroup();
        } // end elseif
      }); // end modal.onDismiss
      modal.present();
  } // end editGroup

} // end class
