import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

import {Observable} from 'rxjs/Observable';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
 
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.prefillDB();
  }

  prefillDB(): Observable<any> {
    this.databaseReady = new BehaviorSubject(false);
    return Observable.create(observer => {

    this.platform.ready().then(() => {
      // alert('Creating DB');
      this.sqlite.create({
        name: 'FamilyBudget.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
	  // alert('DB has been opened');
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
	       // alert('DB was already FILLED');
              this.databaseReady.next(true);
              observer.next(true);
	      observer.complete();
            } else {
	       // alert('FILLING the DB');
	      this.fillDatabase().subscribe(val => {
	        if (val) {
	          // alert('DB has been filled');
		}
                observer.next(true);
	        observer.complete();
	      });
            }
          });
	  })
	.catch(e => alert(e));
      });
    });
  }

  fillDatabase(): Observable<any> {
   return Observable.create(observer => {
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        // alert(sql);
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
	    // alert("done importing: " + data);
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
            observer.next(true);
	    observer.complete();
          })
          .catch(e => alert('cought Eroor: ' + e));
      });
   });
  }
 

  addMember(groupID, groupName, email, name, privilege, score) {
    let data = [groupID, groupName, email, name, privilege, score]
    return this.database.executeSql("INSERT INTO membersANDgroups (groupID, groupName, email, name, privilege, score) VALUES (?, ?, ?, ?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      alert('Error: '+JSON.stringify(err));
      return err;
    });
  }
 
  getAllMembers(currentGroupID) {
    return this.database.executeSql("SELECT * FROM membersANDgroups WHERE groupID = '" + currentGroupID + "'", []).then((data) => {
      let members = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          members.push({ groupID: data.rows.item(i).groupID, groupName: data.rows.item(i).groupName, email: data.rows.item(i).email, name: data.rows.item(i).name, privilege: data.rows.item(i).privilege, score: data.rows.item(i).score }); // alert(JSON.stringify({ data: members}, null, 4));
        }
      }
      return members;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
  getAllGroups(userEMAIL) {
    //return this.database.executeSql("SELECT DISTINCT groupID, groupName FROM membersANDgroups WHERE email = " + userEMAIL, []).then((data) => {
    return this.database.executeSql("SELECT DISTINCT groupID, groupName FROM membersANDgroups WHERE email = '" + userEMAIL + "'", []).then((data) => {
      let groups = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          groups.push({ groupID: data.rows.item(i).groupID, groupName: data.rows.item(i).groupName });  //alert(JSON.stringify({ data: groups}, null, 4));
        }
      }
      return groups;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
  getAdminGroups(userEMAIL) {
    return this.database.executeSql("SELECT DISTINCT groupID, groupName FROM membersANDgroups WHERE email = '" + userEMAIL + "' AND privilege = 'admin'", []).then((data) => {
      let adminGroups = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          adminGroups.push({ groupID: data.rows.item(i).groupID, groupName: data.rows.item(i).groupName });  //alert(JSON.stringify({ data: groups}, null, 4));
        }
      }
      return adminGroups;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
  updateGroupName(groupID, groupName) {
    // alert(groupID+" --> "+groupName);
    return this.database.executeSql("UPDATE membersANDgroups SET groupName = '"+groupName+"' WHERE groupID = '" + groupID + "'", []).then((data) => {
      // alert('update: '+data);
      // alert('group name: '+groupName);
      return groupName;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  addNewUser(nick, email, groupID, groupName, pass) {
    return this.database.executeSql("INSERT INTO UsersSettings (nick, email, defaultGroupID, defaultGroupName, pass) VALUES (?, ?, ?, ?, ?)", [nick, email, groupID, groupName, pass]).then((data) => {
      // alert('Success: '+ JSON.stringify(data));
      return data;
    }, err => {
      alert('Error: '+ JSON.stringify(err));
      return err;
    });
  }

  getUserInfo(email) {
    return this.database.executeSql("SELECT * FROM UsersSettings WHERE email = '"+email+"'", []).then((data) => {
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          // alert(JSON.stringify(data.rows.item(i)));
        }
      }
      return data.rows.item(0);
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 
}
