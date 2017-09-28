import { Component } from '@angular/core';
import { Events, NavController, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { MainHubProvider } from './../../providers/main-hub/main-hub';

@IonicPage()
@Component({
  selector: 'page-invitations',
  templateUrl: 'invitations.html'
})
export class InvitationsPage {
  newMember = {groupID: '', groupName: '', email: '', name: '', privilege: '', score: ''};
  members = []; //members for the selected group
  group = "";  //selected group
  groupID =""; //selected group
  groupName="" //selected group
  groups = []; //groups which current user is part of
  adminGroups = []; //groups which current user is admin
  me = {nick: '', email: ''}; //my username and email address
  amIadmin = false; //selected group
 
  constructor(private events: Events, public modalCtrl: ModalController, public navCtrl: NavController, private mainHUB: MainHubProvider) {
    this.events.subscribe('userInfo', (nick, email) => {
      this.me.nick = nick;
      this.me.email = email;
    });

    this.events.subscribe('addNewMember', (groupID, groupName, nick, email, privilege, score) => {
      this.mainHUB.addMember(groupID, groupName, email, nick, privilege, parseInt(score))
      .then(data => {
        this.loadGroupMembers();
      });
    });

    this.events.subscribe('change-group', (groupID, groupName, amIadmin) => {
      this.groupID = groupID;
      this.groupName = groupName;
      this.amIadmin = amIadmin;
      this.loadGroupMembers();
    });
    this.events.publish('tab2opened');
    this.mainHUB.prefillDB().subscribe(rdy => {
        this.loadGroupMembers();
    });
  }
 
  loadGroupMembers() {
    this.mainHUB.getAllMembers(this.groupID).then(data => {
      this.members = data;
       // alert('members for group ' + this.groupID + ': ' + data);
    });
  }
 
  editGroup(gn) {
    this.events.publish('editGRP', gn);
  }

//   editGroup(gn) {
//       let modal = this.modalCtrl.create('EditGroupPage', {groupName: gn});
//       modal.onDidDismiss(data => {
//         // alert(JSON.stringify(data)); alert('NEW NAME: '+data.newName);
// 
//         // UPDATE
//         if (data.button === 'update') {
//           this.mainHUB.updateGroupName(this.groupID, data.newName).then(newName => { 
//             alert(this.groupName+' has been RENAMED to: '+ newName); 
//             this.loadGroupMembers();
//             this.groupName = newName;
//             this.events.publish('grpUpdated', this.groupID, this.groupName);
//           });
// 
//         // ADD NEW GROUP
//         } else if (data.button === 'create') {
//           this.groupName = data.newName;
//           this.groupID = this.me.email + '-' + data.newName.replace(/ /g,'-');
//           // alert('new groupID: '+ this.groupID);
//           this.events.publish('newGrpAdded', this.groupID, this.groupName);
//           this.newMember['groupID'] = this.groupID;
//           this.newMember['groupName'] = data.newName;
//           this.newMember['name'] = this.me.nick;
//           this.newMember['email'] = this.me.email;
//           this.newMember['privilege'] = 'admin';
//           this.newMember['score'] = '6';
//           this.addMember();
//           // alert(JSON.stringify(this.newMember));
//         };
//       });
//       modal.present();
//   }

  sendInvite() {
    let invite = {
      FROM: this.me.email,
      FOR: this.newMember.email,
      GROUP: this.groupID
    }
    this.mainHUB.send('invite', invite);
  }

  showInvites() {
    alert('this selection will show all invites history');
  }

}
