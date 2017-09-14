webpackJsonp([0],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(627);
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
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]]
        //exports: [TabsPage]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.page = "Home";
        this.userSelection = "";
        this.user = "";
        this.selectOptions = {
            title: 'Are you sure?'
        };
        this.tab1Root = 'HomePage';
        this.tab2Root = 'AboutPage';
        this.tab3Root = 'ContactPage';
        this.user = navParams.get('email');
    }
    TabsPage.prototype.logout = function () {
        var _this = this;
        //alert('logging OUT');
        this.auth.logout().subscribe(function (succ) {
            _this.navCtrl.popToRoot();
        });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({ name: "TabsPage" }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/root/BUDGET/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab (ionSelect)="page=\'Home\'" [root]="tab1Root" tabTitle="Home" tabIcon="home" (click)="alert(\'Home\')"></ion-tab>\n  <ion-tab (ionSelect)="page=\'About\'" [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab (ionSelect)="page=\'Members\'" [root]="tab3Root" tabTitle="Members" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n<ion-item><ion-label>{{page}}</ion-label>\n  <ion-select interface="popover" [(ngModel)]="userSelection" (ionChange)="logout()" [selectOptions]="selectOptions"> \n<ion-option [value]="item"  *ngFor="let item of [\'LOGOUT\'] ;let i = index" >\n       {{item}}\n    </ion-option>\n  </ion-select>\n</ion-item>\n<!--ion-select [(ngModel)]="userSelection" (click)="userSelect()">\n    <ion-option selected value=\'\'>{{user}}</ion-option>\n    <ion-option value=\'log-out\'>log-out</ion-option>\n</ion-select>\n\n<!--ion-buttons end>\n        {{user}}\n  <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n  </button>\n</ion-buttons-->\n'/*ion-inline-end:"/root/BUDGET/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=0.js.map