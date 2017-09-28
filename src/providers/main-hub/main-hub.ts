import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DatabaseProvider } from './../../providers/database/database';
import { SocketProvider } from '../../providers/socket/socket';
import { AuthService } from '../../providers/auth-service/auth-service';

/*
  Generated class for the MainHubProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MainHubProvider {

  constructor(public WS: SocketProvider, public http: Http, private DB: DatabaseProvider, private auth: AuthService) {
    console.log('Hello MainHubProvider Provider');
  }

  logout() {
    return this.auth.logout();
  }

  send(cmd, data) {
    return this.WS.send(cmd, data);
  }

  prefillDB() {
   return this.DB.prefillDB();  
  }

  fillDatabase() {
    return this.DB.fillDatabase();
  }

  addMember(groupID, groupName, email, name, privilege, score) {
    return this.DB.addMember(groupID, groupName, email, name, privilege, score);
  }

  getAllMembers(currentGroupID) {
    return this.DB.getAllMembers(currentGroupID);
  }

  getAllGroups(userEMAIL) {
    return this.DB.getAllGroups(userEMAIL);
  }

  getAdminGroups(userEMAIL) {
    return this.DB.getAdminGroups(userEMAIL);
  }

  updateGroupName(groupID, groupName) {
    return this.DB.updateGroupName(groupID, groupName);
  }

  addNewUser(nick, email, groupID, groupName, pass) {
    return this.DB.addNewUser(nick, email, groupID, groupName, pass);
  }

  getUserInfo(email) {
    return this.DB.getUserInfo(email);
  }
}
