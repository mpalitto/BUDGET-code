webpackJsonp([4],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationsPageModule", function() { return InvitationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitations__ = __webpack_require__(630);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvitationsPageModule = (function () {
    function InvitationsPageModule() {
    }
    return InvitationsPageModule;
}());
InvitationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__invitations__["a" /* InvitationsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invitations__["a" /* InvitationsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__invitations__["a" /* InvitationsPage */]]
    })
], InvitationsPageModule);

//# sourceMappingURL=invitations.module.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_hub_main_hub__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvitationsPage = (function () {
    function InvitationsPage(events, modalCtrl, navCtrl, mainHUB) {
        var _this = this;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.mainHUB = mainHUB;
        this.newMember = { groupID: '', groupName: '', email: '', name: '', privilege: '', score: '' };
        this.members = []; //members for the selected group
        this.group = ""; //selected group
        this.groupID = ""; //selected group
        this.groupName = ""; //selected group
        this.groups = []; //groups which current user is part of
        this.adminGroups = []; //groups which current user is admin
        this.me = { nick: '', email: '' }; //my username and email address
        this.amIadmin = false; //selected group
        this.events.subscribe('userInfo', function (nick, email) {
            _this.me.nick = nick;
            _this.me.email = email;
        });
        this.events.subscribe('addNewMember', function (groupID, groupName, nick, email, privilege, score) {
            _this.mainHUB.addMember(groupID, groupName, email, nick, privilege, parseInt(score))
                .then(function (data) {
                _this.loadGroupMembers();
            });
        });
        this.events.subscribe('change-group', function (groupID, groupName, amIadmin) {
            _this.groupID = groupID;
            _this.groupName = groupName;
            _this.amIadmin = amIadmin;
            _this.loadGroupMembers();
        });
        this.events.publish('tab2opened');
        this.mainHUB.prefillDB().subscribe(function (rdy) {
            _this.loadGroupMembers();
        });
    }
    InvitationsPage.prototype.loadGroupMembers = function () {
        var _this = this;
        this.mainHUB.getAllMembers(this.groupID).then(function (data) {
            _this.members = data;
            // alert('members for group ' + this.groupID + ': ' + data);
        });
    };
    InvitationsPage.prototype.editGroup = function (gn) {
        this.events.publish('editGRP', gn);
    };
    //   editGroup(gn) {
    //       let modal = this.modalCtrl.create('EditGroupPage', {groupName: gn});
    //       modal.onDidDismiss(data => {
    //         // alert(JSON.stringify(data)); alert('NEW NAME: '+data.newName);
    // 
    //         // UPDATE
    //         if (data.button === 'update') {
    //           this.mainHUB.updateGroupName(this.groupID, data.newName).then(newName => { 
    //             alert(this.groupName+' has been RENAMED to: '+ newName); 
    //             this.loadGroupMembers();
    //             this.groupName = newName;
    //             this.events.publish('grpUpdated', this.groupID, this.groupName);
    //           });
    // 
    //         // ADD NEW GROUP
    //         } else if (data.button === 'create') {
    //           this.groupName = data.newName;
    //           this.groupID = this.me.email + '-' + data.newName.replace(/ /g,'-');
    //           // alert('new groupID: '+ this.groupID);
    //           this.events.publish('newGrpAdded', this.groupID, this.groupName);
    //           this.newMember['groupID'] = this.groupID;
    //           this.newMember['groupName'] = data.newName;
    //           this.newMember['name'] = this.me.nick;
    //           this.newMember['email'] = this.me.email;
    //           this.newMember['privilege'] = 'admin';
    //           this.newMember['score'] = '6';
    //           this.addMember();
    //           // alert(JSON.stringify(this.newMember));
    //         };
    //       });
    //       modal.present();
    //   }
    InvitationsPage.prototype.sendInvite = function () {
        var invite = {
            FROM: this.me.email,
            FOR: this.newMember.email,
            GROUP: this.groupID
        };
        this.mainHUB.send('invite', invite);
    };
    InvitationsPage.prototype.showInvites = function () {
        alert('this selection will show all invites history');
    };
    return InvitationsPage;
}());
InvitationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-invitations',template:/*ion-inline-start:"/root/BUDGET/src/pages/invitations/invitations.html"*/'<ion-header>\n  <div class="PADDING-TOP">group</div>\n</ion-header>\n\n<ion-content padding>\n<ion-row>\n  <ion-item>\n      <button ion-button round float-left  (click)="editGroup(groupName)"><ion-icon name="create"></ion-icon> EDIT GROUP</button>\n      <button ion-button round float-right  (click)="editGroup(\'\')"><ion-icon name="add"></ion-icon> ADD NEW GROUP</button>\n  </ion-item>\n</ion-row>\n\n  <div> <h6 style="background-color:lightgray; text-align: center;">NEW INVITATION</h6> </div>\n  <ion-item>\n    <ion-input [(ngModel)]="newMember.name" placeholder="New Member Name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>New Member Privilege</ion-label>\n    <ion-select  [(ngModel)]="newMember.privilege">\n      <ion-option value="member">Regular Member</ion-option>\n      <ion-option value="admin">Admin</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <!--ion-label stacked>How good of a budgetter are you?</ion-label-->\n    <ion-input [(ngModel)]="newMember.email" placeholder="New Member EMAIL"></ion-input>\n  </ion-item>\n  <ion-item>\n  <button ion-button round float-left (click)="sendInvite()">SEND INVITE</button>\n  <button ion-button round float-right (click)="showInvites()">SHOW INVITEs</button>\n  </ion-item>\n\n  <h6 style="background-color:lightgray;">MEMBERS LIST FOR: {{this.groupName}}</h6> \n  <ion-list>\n    <ion-item *ngFor="let mmbr of members">\n      <h6>{{ mmbr.name }}</h6>\n      <p>{{ mmbr.privilege }} SCORE: {{ mmbr.score }}/10</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/root/BUDGET/src/pages/invitations/invitations.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_main_hub_main_hub__["a" /* MainHubProvider */]])
], InvitationsPage);

//# sourceMappingURL=invitations.js.map

/***/ })

});
//# sourceMappingURL=4.js.map