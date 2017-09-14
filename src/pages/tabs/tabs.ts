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
    let data = {
      from: 'Matteo',
      to  : 'all',
      cmd : "Hi"
     };
     WS.send(data);
  }

  public logout() {
    //alert('logging OUT');
    this.auth.logout().subscribe(succ => {
      this.navCtrl.popToRoot();
    });
  }

}
