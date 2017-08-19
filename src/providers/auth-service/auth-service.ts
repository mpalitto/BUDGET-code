import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
  //inject storage in this service
  constructor(public storage: Storage) { }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {

        // At this point make a request to your backend to make a real check!
        this.storage.get(credentials.email).then((pass) => {
          let access = (credentials.password === pass);
          this.currentUser = new User(credentials.email, credentials.email);
	  //alert(access);
          observer.next(access);
          observer.complete();
	}).catch(() => {observer.next(false); observer.complete();});

        
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {

      // At this point store the credentials to your backend!
      this.storage.set(credentials.email, credentials.password);

      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
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
