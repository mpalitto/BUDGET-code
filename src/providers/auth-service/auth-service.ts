import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DatabaseProvider } from './../../providers/database/database';
 
export class User {
  nick: string;
  email: string;
  groupID: string; //current group ID
  groupName: string; //current group Name
 
  constructor(nick: string, email: string, groupID: string, groupName: string) {
    this.nick = nick;
    this.email = email;
    this.groupID = groupID;
    this.groupName = groupName;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
  //inject storage in this service
  constructor(public storage: Storage, private databaseprovider: DatabaseProvider) { }

  public login(credentials) {
    return Observable.create(observer => {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {

      this.databaseprovider.getUserInfo(credentials.email).then(data => {
        // alert(JSON.stringify(data));
        let access = (credentials.password === data.pass);
        // alert('entered: '+ credentials.password +' should be: "'+ data.pass +'"');
        if (access) {
          this.currentUser = new User(data.nick, data.email, data.groupID, data.groupName);
        }
        observer.next(access);
        observer.complete();
      });
      // }).catch(() => {observer.next(false); observer.complete();});
      }
    });
  }
 
  public register(credentials) {
      return Observable.create(observer => {
    if (credentials.email === null || credentials.password === null || credentials.nick === null) {
      alert("Please insert credentials");
      // return false;
      observer.next(false);
      observer.complete();
    } else {

      this.databaseprovider.addNewUser(credentials.nick, credentials.email, 'not-yet-selected', 'not yet selected', credentials.password).then(data => {
          this.currentUser = new User(credentials.nick, credentials.email, 'marco.email@domainX.com-White-Family', 'White Family');
          alert('User: ' + JSON.stringify(this.currentUser));
      });

      // At this point store the credentials to your backend!
      // this.storage.set(credentials.email, credentials.password);
      // this.storage.set('nick4'+credentials.email, credentials.nick);
      // this.currentUser = new User(credentials.nick, credentials.email);

      // return Observable.create(observer => {
      observer.next(true);
      observer.complete();
      // });
      }
    });
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
