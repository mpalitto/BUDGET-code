import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SocketProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

import * as io from 'socket.io-client';

@Injectable()
export class SocketProvider {

  socketHost: string = "http://192.168.1.60:3000";
  socket: any;

  constructor(public http: Http) {
    // alert('Hello SocketProvider Provider');
    this.socket = io.connect(this.socketHost);
    this.socket.on('connect', () => {
      alert('socket connection SUCCESS '+ this.socket.connected);
      //this.socket.on('message', (msg) => {
      //  alert('msg received from:' + msg.from + ' cmd: ' + msg.cmd);
      //});
//    this.send();
    });
  }

  public send(cmd, data) {
      this.socket.emit(cmd, data);
  }

}
