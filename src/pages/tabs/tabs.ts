import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service/auth-service';


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

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) { 
    this.user = navParams.get('email');
  }

  public logout() {
    //alert('logging OUT');
    this.auth.logout().subscribe(succ => {
      this.navCtrl.popToRoot();
    });
  }

}
