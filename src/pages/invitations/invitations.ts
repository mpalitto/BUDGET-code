import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';
import { IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { SocketProvider } from '../../providers/socket/socket';
//import { NewGroupPage } from '../new-group/new-group';

@IonicPage()
@Component({
  selector: 'page-invitations',
  templateUrl: 'invitations.html'
})
export class InvitationsPage {
  member = {email: '', name: '', privilege: '', score: ''};
  members = []; //members for the selected group
  group = "";  //selected group
  groupID =""; //selected group
  groupName="" //selected group
  groups = []; //groups which current user is part of
  adminGroups = []; //groups which current user is admin
  me = ''; //my username which is an email address
 
  constructor(private auth: AuthService, public WS: SocketProvider, public modalCtrl: ModalController, public navCtrl: NavController, private databaseprovider: DatabaseProvider) {
    this.me = this.auth.getUserInfo().email;
alert('current user: ' + this.me);
  //this.databaseprovider.getDatabaseState().subscribe(rdy => {
    this.databaseprovider.prefillDB().subscribe(rdy => {
    if (rdy) { //
        //alert('user INFO: '+ this.me);
        this.loadMemberData();
      } else {
	 alert("DB not ready");
        this.loadMemberData();
      }
    })
  }
 
  loadMemberData() {
    // alert("loading member data");
    this.databaseprovider.getAllMembers(this.groupID).then(data => {
      this.members = data;
       alert('members for group ' + this.groupID + ': ' + data);
    });

    this.databaseprovider.getAllGroups(this.me).then(data => {
      this.groups = data;
       alert('groups for: ' + this.me + ' ::: ' + data);
    });

    this.databaseprovider.getAdminGroups(this.me).then(data => {
      this.adminGroups = data;
       alert('admin groups for: ' + this.me + ' ::: ' + data);
    });
  }
 
  addMember() {
    this.databaseprovider.addMember(this.member['groupID'], this.member['groupName'], this.member['email'], this.member['name'], this.member['privilege'], parseInt(this.member['score']))
    .then(data => {
      this.loadMemberData();
    });
    //this.member = {};
  }

  selectGroup() {
    this.groupID = this.group.replace(/^.* /,"");
    this.groupName = this.group.replace(/(^.* ).*/,"$1");
    if ( /^\ADDnew/.test(this.groupName) ) {
      let modal = this.modalCtrl.create('NewGroupPage');
      modal.present();
    } else {
      alert(this.groupName + ' has been selected -- GROUPID: ' + this.groupID);
      this.databaseprovider.getAllMembers(this.groupID).then(data => {
        this.members = data;
         alert('members for group ' + this.groupID + ': ' + data);
      });

    }
  };

  editGroup() {
      let modal = this.modalCtrl.create('EditGroupPage');
      modal.present();
  }

  sendInvite() {
    let invite = {
      FROM: this.me,
      FOR: this.member.email,
      GROUP: this.groupID
    }
    this.WS.send('invite', invite);
  }

}
