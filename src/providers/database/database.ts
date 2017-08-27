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
      alert('Creating DB');
      this.sqlite.create({
        name: 'FamilyBudget.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
	  alert('DB has been opened');
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
	      alert('DB was already FILLED');
              this.databaseReady.next(true);
            } else {
	      alert('FILLING the DB');
              this.fillDatabase();
            }
            observer.next(true);
	    observer.complete();
          });
	  })
	.catch(e => alert(e));
      });
    });
  }

  fillDatabase() {
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        alert(sql);
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
	    alert("done importing: " + data);
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => alert('cought Eroor: ' + e));
      });
  }
 

  addMember(name, privilege, score) {
    let data = [name, privilege, score]
    return this.database.executeSql("INSERT INTO member (name, privilege, score) VALUES (?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
 
  getAllMembers() {
    return this.database.executeSql("SELECT * FROM member", []).then((data) => {
      let members = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          members.push({ name: data.rows.item(i).name, privilege: data.rows.item(i).privilege, score: data.rows.item(i).score });
        }
      }
      return members;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 
}
