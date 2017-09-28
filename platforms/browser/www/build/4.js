webpackJsonp([4],{

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(623);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]]
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, databaseprovider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.databaseprovider = databaseprovider;
        this.member = {};
        this.members = [];
        //this.databaseprovider.getDatabaseState().subscribe(rdy => {
        this.databaseprovider.prefillDB().subscribe(function (rdy) {
            if (rdy) {
                _this.loadMemberData();
            }
            else {
                // alert("DB not ready");
                _this.loadMemberData();
            }
        });
    }
    ContactPage.prototype.loadMemberData = function () {
        var _this = this;
        // alert("loading member data");
        this.databaseprovider.getAllMembers().then(function (data) {
            _this.members = data;
            // alert(data);
        });
    };
    ContactPage.prototype.addMember = function () {
        var _this = this;
        this.databaseprovider.addMember(this.member['name'], this.member['privilege'], parseInt(this.member['score']))
            .then(function (data) {
            _this.loadMemberData();
        });
        this.member = {};
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/root/BUDGET/src/pages/contact/contact.html"*/'<ion-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>What\'s your name?</ion-label>\n    <ion-input [(ngModel)]="member.name" placeholder="Member Name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>What\'s your privilege?</ion-label>\n    <ion-input [(ngModel)]="member.privilege" placeholder="Admin, Member"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>How good of a budgetter are you?</ion-label>\n    <ion-input [(ngModel)]="member.score" placeholder="score(1..10)"></ion-input>\n  </ion-item>\n  <button ion-button full (click)="addMember()">Add Member Info</button>\n \n  <ion-list>\n    <ion-item *ngFor="let mmbr of members">\n      <h2>{{ mmbr.name }}</h2>\n      <p>{{ mmbr.privilege }} SCORE: {{ mmbr.score }}/10</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/root/BUDGET/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=4.js.map