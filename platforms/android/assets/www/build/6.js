webpackJsonp([6],{

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupPageModule", function() { return EditGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_group__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditGroupPageModule = (function () {
    function EditGroupPageModule() {
    }
    return EditGroupPageModule;
}());
EditGroupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_group__["a" /* EditGroupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_group__["a" /* EditGroupPage */]),
        ],
    })
], EditGroupPageModule);

//# sourceMappingURL=edit-group.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditGroupPage = (function () {
    function EditGroupPage(viewCtrl, navCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
        this.groupName = '';
        this.newName = '';
        this.groupName = params.get('groupName');
        this.newName = this.groupName;
        // alert('group: '+ this.groupName);
    }
    // ionViewDidLoad() {
    //   alert('ionViewDidLoad EditGroupPage');
    // }
    EditGroupPage.prototype.buttonPressed = function (button) {
        var data = { 'button': button, 'newName': this.newName };
        this.viewCtrl.dismiss(data);
    };
    return EditGroupPage;
}());
EditGroupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-group',template:/*ion-inline-start:"/root/BUDGET/src/pages/edit-group/edit-group.html"*/'<!--\n  Generated template for the EditGroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Group</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Group Name</ion-label>\n    <ion-input [(ngModel)]="newName" placeholder="Enter Group Name">{{groupName}}</ion-input>\n  </ion-item>\n\n  <button ion-button round (click)="buttonPressed(\'cancel\')">CANCEL</button>\n  <button ion-button round (click)="buttonPressed(\'update\')" *ngIf="groupName !== \'\'">UPDATE</button>\n  <button ion-button round (click)="buttonPressed(\'create\')" *ngIf="groupName === \'\'">CREATE NEW</button>\n</ion-content>\n'/*ion-inline-end:"/root/BUDGET/src/pages/edit-group/edit-group.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], EditGroupPage);

//# sourceMappingURL=edit-group.js.map

/***/ })

});
//# sourceMappingURL=6.js.map