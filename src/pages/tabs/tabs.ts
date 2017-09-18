import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service/auth-service';
import { SocketProvider } from '../../providers/socket/socket';

@IonicPage({name: "TabsPage"})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  page = "Home";
  userSelection = "";
  user     = "";

  selectOptions = {
      title: 'Are you sure?'
  }

  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, public WS: SocketProvider) {

    this.user = navParams.get('email');

    // send invite
    let invite = {
      FROM: this.user,
      FOR: "wife@gmail.com",
      GROUP: "NEW-GROUP"
    }
    WS.send('invite', invite); //request for any new invitation to server

    // send invite
    invite = {
      FROM: "nicolo@gmail.com",
      FOR: "mpalitto@gmail.com",
      GROUP: "NEW-GROUP"
    }
    WS.send('invite', invite); //request for any new invitation to server

    // send anyInvites query
    let userID = {
      userID: this.user,
    }
    WS.send('anyInvites', userID); //request for any new invitation to server

    let data = {
      from: 'Matteo',
      to  : 'all',
      cmd : "Hi"
    };
    WS.send('message', data);
  }

  public logout() {
    //alert('logging OUT');
    this.auth.logout().subscribe(succ => {
      this.navCtrl.popToRoot();
    });
  }

}
