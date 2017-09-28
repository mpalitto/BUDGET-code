import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-group',
  templateUrl: 'edit-group.html',
})
export class EditGroupPage {

  groupName = '';
  newName = '';

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public params: NavParams) {
    this.groupName = params.get('groupName');
    this.newName = this.groupName;
    // alert('group: '+ this.groupName);
  }

  // ionViewDidLoad() {
  //   alert('ionViewDidLoad EditGroupPage');
  // }

  buttonPressed(button) {
    let data = { 'button': button, 'newName': this.newName };
    this.viewCtrl.dismiss(data);
  }


}
