webpackJsonp([0],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]]
        //exports: [TabsPage]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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



var TabsPage = (function () {
    function TabsPage(events, modalCtrl, navCtrl, navParams, mainHUB) {
        var _this = this;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mainHUB = mainHUB;
        this.page = "Home";
        this.userSelection = "";
        this.user = "";
        this.userNick = '';
        this.currentGroupID = "";
        this.groupIDs = [];
        this.groupNames = {}; // {groupID: groupName}
        this.amIadmin = {}; // {groupID: amIadmin}
        this.showBUT = false; // sho buttons for group editing
        this.selectOptions = {
            title: 'Are you sure?'
        };
        this.tab1Root = 'HomePage';
        this.tab2Root = 'InvitationsPage';
        this.tab3Root = 'ContactPage';
        this.tab4Root = 'AboutPage';
        this.userNick = navParams.get('nick');
        this.user = navParams.get('email');
        this.events.subscribe('newGrpAdded', function (id, name) {
            _this.groupIDs.push(id);
            _this.groupNames[id] = name;
            _this.amIadmin[id] = true;
            _this.currentGroupID = id;
            _this.events.publish('change-group', _this.currentGroupID, _this.groupNames[_this.currentGroupID], _this.amIadmin[_this.currentGroupID]);
        });
        this.events.subscribe('editGRP', function (gn) {
            _this.editGroup(gn);
        });
        this.events.subscribe('tab2opened', function () {
            _this.events.publish('userInfo', _this.userNick, _this.user);
            _this.events.publish('change-group', _this.currentGroupID, _this.groupNames[_this.currentGroupID], _this.amIadmin[_this.currentGroupID]);
            _this.showBUT = true;
        });
        this.mainHUB.getAllGroups(this.user).then(function (data) {
            // alert('DATA: '+JSON.stringify(data));
            for (var i = 0; i < data.length; i++) {
                _this.groupIDs.push(data[i].groupID);
                _this.groupNames[data[i].groupID] = data[i].groupName;
                _this.amIadmin[data[i].groupID] = (data[i].privilege == 'admin');
                // alert('groupID: ' + data[i].groupID + ' groupName: ' + data[i].groupName);
            }
            _this.mainHUB.getUserInfo(_this.user).then(function (data) {
                _this.currentGroupID = data.defaultGroupID;
                // alert('current: '+data.defaultGroupID);
            });
        });
        // send invite
        var invite = {
            FROM: this.user,
            FOR: "wife@gmail.com",
            GROUP: "NEW-GROUP"
        };
        mainHUB.send('invite', invite); //request for any new invitation to server
        // send invite
        invite = {
            FROM: "nicolo@gmail.com",
            FOR: "mpalitto@gmail.com",
            GROUP: "NEW-GROUP"
        };
        mainHUB.send('invite', invite); //request for any new invitation to server
        // send anyInvites query
        var userID = {
            userID: this.user,
        };
        mainHUB.send('anyInvites', userID); //request for any new invitation to server
        var data = {
            from: 'Matteo',
            to: 'all',
            cmd: "Hi"
        };
        mainHUB.send('message', data);
    } // end constructor
    TabsPage.prototype.logout = function () {
        var _this = this;
        //alert('logging OUT');
        this.mainHUB.logout().subscribe(function (succ) {
            _this.navCtrl.popToRoot();
        });
    };
    TabsPage.prototype.selectGroup = function () {
        alert('change-group: ' + ' <--> ' + this.currentGroupID + ' <--> ' + this.groupNames[this.currentGroupID] + ' <--> ' + this.amIadmin[this.currentGroupID]);
        this.events.publish('change-group', this.currentGroupID, this.groupNames[this.currentGroupID], this.amIadmin[this.currentGroupID]);
    };
    TabsPage.prototype.editGroup = function (gn) {
        var _this = this;
        var modal = this.modalCtrl.create('EditGroupPage', { groupName: gn });
        modal.onDidDismiss(function (data) {
            // alert(JSON.stringify(data)); alert('NEW NAME: '+data.newName);
            // UPDATE
            if (data.button === 'update') {
                _this.mainHUB.updateGroupName(_this.currentGroupID, data.newName).then(function (newName) {
                    // alert(this.groupName+' has been RENAMED to: '+ newName);
                    // this.loadGroupMembers();
                    _this.groupNames[_this.currentGroupID] = newName;
                    _this.selectGroup();
                    //this.events.publish('grpUpdated');
                });
                // ADD NEW GROUP
            }
            else if (data.button === 'create') {
                _this.currentGroupID = _this.user + '-' + data.newName.replace(/ /g, '-');
                _this.groupIDs.push(_this.currentGroupID);
                _this.groupNames[_this.currentGroupID] = data.newName;
                _this.amIadmin[_this.currentGroupID] = true;
                _this.events.publish('addNewMember', _this.currentGroupID, _this.groupNames[_this.currentGroupID], _this.userNick, _this.user, 'admin', '6');
                _this.selectGroup();
            } // end elseif
        }); // end modal.onDismiss
        modal.present();
    }; // end editGroup
    return TabsPage;
}()); // end class
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({ name: "TabsPage" }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/root/BUDGET/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab (ionSelect)="page=\'Home\'" [root]="tab1Root" tabTitle="Overview" tabIcon="speedometer"></ion-tab>\n  <ion-tab (ionSelect)="page=\'Groups\'" [root]="tab2Root" tabTitle="Groups" tabIcon="contacts"></ion-tab>\n  <ion-tab (ionSelect)="page=\'Members\'" [root]="tab3Root" tabTitle="Alerts" tabIcon="mail"></ion-tab>\n  <ion-tab (ionSelect)="page=\'About\'" [root]="tab4Root" tabTitle="Settings" tabIcon="construct"></ion-tab>\n</ion-tabs>\n\n<ion-row>\n\n <ion-item col-6>\n  <ion-select #input class="mySelect" interface="popover" [(ngModel)]="currentGroupID" (ionChange)="selectGroup()">\n    <ion-option *ngFor="let grp of groupIDs" [value]="grp" [attr.id]="grp">{{groupNames[grp]}}</ion-option>\n  </ion-select>\n </ion-item>\n\n <ion-item col-6>\n   <ion-select class="mySelect" interface="popover" [(ngModel)]="userSelection" (ionChange)="logout()" [selectOptions]="selectOptions" [placeholder]="userNick"> \n   <ion-option value="LOGOUT">LOGOUT</ion-option>\n  </ion-select>\n </ion-item> \n\n</ion-row>\n'/*ion-inline-end:"/root/BUDGET/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_main_hub_main_hub__["a" /* MainHubProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_main_hub_main_hub__["a" /* MainHubProvider */]) === "function" && _e || Object])
], TabsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=0.js.map