import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  member = {};
  members = [];
  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider) {
  //this.databaseprovider.getDatabaseState().subscribe(rdy => {
    this.databaseprovider.prefillDB().subscribe(rdy => {
    if (rdy) { //
        this.loadMemberData();
      } else {
	// alert("DB not ready");
        this.loadMemberData();
      }
    })
  }
  loadMemberData() {
    // alert("loading member data");
    this.databaseprovider.getAllMembers().then(data => {
      this.members = data;
      // alert(data);
    })
  }
  addMember() {
    this.databaseprovider.addMember(this.member['name'], this.member['privilege'], parseInt(this.member['score']))
    .then(data => {
      this.loadMemberData();
    });
    this.member = {};
  }
  deleteMember(name) {
  alert("delete member contact.ts "+ name);
    this.databaseprovider.deleteMember(name)
    .then(data => {
      this.loadMemberData();
    });
    this.member = {};
  }
}
