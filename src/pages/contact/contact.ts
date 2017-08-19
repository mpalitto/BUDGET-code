import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  member = {};
  members = [];
 
  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider) {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadMemberData();
      }
    })
  }
 
  loadMemberData() {
    this.databaseprovider.getAllMembers().then(data => {
      this.members = data;
      //alert(data);
    })
  }
 
  addMember() {
    this.databaseprovider.addMember(this.member['name'], this.member['privilege'], parseInt(this.member['score']))
    .then(data => {
      this.loadMemberData();
    });
    this.member = {};
  }

}
