import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  //registerCredentials = { email: '', password: '' };
  //just for testing so I don't have to enter it everytime...
  registerCredentials = { email: 'mpalitto@gmail.com', password: 'oettam68' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
  // this.nav.push('RegisterPage');
  // this.showLoading()
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.showError("Success", "Account created.");
        this.nav.push(TabsPage, {email: this.registerCredentials.email});
      } else {
        this.showError("Error", "Problem creating account.");
      }
    },
      error => {
        this.showError("Error", error);
      });
  }
 
  public login() {
  // this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(confirmed => {
      //alert(confirmed);
      if (confirmed) {        
        //this.nav.setRoot(TabsPage);
        this.nav.push(TabsPage, {email: this.registerCredentials.email});
      } else {
        this.showError("Error", "Access Denied");
      }
    },
      error => {
        this.showError("Error", error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(title, text) {
  // this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
