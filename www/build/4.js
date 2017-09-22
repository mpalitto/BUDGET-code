webpackJsonp([4],{

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationsPageModule", function() { return InvitationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitations__ = __webpack_require__(629);
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
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invitations__["a" /* InvitationsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__invitations__["a" /* InvitationsPage */]]
    })
], InvitationsPageModule);

//# sourceMappingURL=invitations.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { NewGroupPage } from '../new-group/new-group';
var InvitationsPage = (function () {
    function InvitationsPage(auth, WS, modalCtrl, navCtrl, databaseprovider) {
        var _this = this;
        this.auth = auth;
        this.WS = WS;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.databaseprovider = databaseprovider;
        this.member = { email: '', name: '', privilege: '', score: '' };
        this.members = []; //members for the selected group
        this.group = ""; //selected group
        this.groupID = ""; //selected group
        this.groupName = ""; //selected group
        this.groups = []; //groups which current user is part of
        this.adminGroups = []; //groups which current user is admin
        this.me = ''; //my username which is an email address
        this.me = this.auth.getUserInfo().email;
        alert('current user: ' + this.me);
        //this.databaseprovider.getDatabaseState().subscribe(rdy => {
        this.databaseprovider.prefillDB().subscribe(function (rdy) {
            if (rdy) {
                //alert('user INFO: '+ this.me);
                _this.loadMemberData();
            }
            else {
                alert("DB not ready");
                _this.loadMemberData();
            }
        });
    }
    InvitationsPage.prototype.loadMemberData = function () {
        var _this = this;
        // alert("loading member data");
        this.databaseprovider.getAllMembers(this.groupID).then(function (data) {
            _this.members = data;
            alert('members for group ' + _this.groupID + ': ' + data);
        });
        this.databaseprovider.getAllGroups(this.me).then(function (data) {
            _this.groups = data;
            alert('groups for: ' + _this.me + ' ::: ' + data);
        });
        this.databaseprovider.getAdminGroups(this.me).then(function (data) {
            _this.adminGroups = data;
            alert('admin groups for: ' + _this.me + ' ::: ' + data);
        });
    };
    InvitationsPage.prototype.addMember = function () {
        var _this = this;
        this.databaseprovider.addMember(this.member['groupID'], this.member['groupName'], this.member['email'], this.member['name'], this.member['privilege'], parseInt(this.member['score']))
            .then(function (data) {
            _this.loadMemberData();
        });
        //this.member = {};
    };
    InvitationsPage.prototype.selectGroup = function () {
        var _this = this;
        this.groupID = this.group.replace(/^.* /, "");
        this.groupName = this.group.replace(/(^.* ).*/, "$1");
        if (/^\ADDnew/.test(this.groupName)) {
            var modal = this.modalCtrl.create('NewGroupPage');
            modal.present();
        }
        else {
            alert(this.groupName + ' has been selected -- GROUPID: ' + this.groupID);
            this.databaseprovider.getAllMembers(this.groupID).then(function (data) {
                _this.members = data;
                alert('members for group ' + _this.groupID + ': ' + data);
            });
        }
    };
    ;
    InvitationsPage.prototype.editGroup = function () {
        var modal = this.modalCtrl.create('EditGroupPage');
        modal.present();
    };
    InvitationsPage.prototype.sendInvite = function () {
        var invite = {
            FROM: this.me,
            FOR: this.member.email,
            GROUP: this.groupID
        };
        this.WS.send('invite', invite);
    };
    return InvitationsPage;
}());
InvitationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-invitations',template:/*ion-inline-start:"/root/BUDGET/src/pages/invitations/invitations.html"*/'<ion-header>\n  <div class="PADDING-TOP">group</div>\n</ion-header>\n\n<ion-content padding>\n    <ion-row>\n  <ion-item col-9>\n    <ion-label>GROUP</ion-label>\n    <ion-select  [(ngModel)]="group" (ionChange)="selectGroup()">\n      <ion-option value=\'ADDnew NA\'>+ ADD</ion-option>\n      <ion-option *ngFor=\'let grp of groups\' value="{{grp.groupName}} {{grp.groupID}}">{{grp.groupName}}</ion-option>\n      <!--ion-option *ngFor=\'let grp of groups\' [value]="\'{ groupID: \' + grp.groupID + \', groupName: \' + grp.groupID + \'}\'">{{grp.groupName}}</ion-option-->\n    </ion-select>\n  </ion-item>\n  <ion-item col-3>\n      <button ion-button icon-only small float-right  (click)="editGroup(group)"><ion-icon name="create"></ion-icon></button>\n  </ion-item>\n    </ion-row>\n  <ion-item>\n    <!--ion-label stacked>What\'s your name?</ion-label-->\n    <ion-input [(ngModel)]="member.name" placeholder="New Member Name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <!--ion-label stacked>What\'s your privilege?</ion-label-->\n    <!--ion-input [(ngModel)]="member.privilege" placeholder="Admin or regular Member?"></ion-input-->\n    <ion-label>New Member Privilege</ion-label>\n    <ion-select  [(ngModel)]="member.privilege">\n      <ion-option value="member">Regular Member</ion-option>\n      <ion-option value="admin">Admin</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <!--ion-label stacked>How good of a budgetter are you?</ion-label-->\n    <ion-input [(ngModel)]="member.email" placeholder="New Member EMAIL"></ion-input>\n  </ion-item>\n  <button ion-button full (click)="send_invite()">SEND INVITE</button>\n\n  <div>CURRENT MEMBER LIST FOR: {{group.groupName}}</div> \n  <ion-list>\n    <ion-item *ngFor="let mmbr of members">\n      <h2>{{ mmbr.name }}</h2>\n      <p>{{ mmbr.privilege }} SCORE: {{ mmbr.score }}/10</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/root/BUDGET/src/pages/invitations/invitations.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__["a" /* SocketProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__["a" /* SocketProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _e || Object])
], InvitationsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=invitations.js.map

/***/ })

});
//# sourceMappingURL=4.js.map