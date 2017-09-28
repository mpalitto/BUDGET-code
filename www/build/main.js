webpackJsonp([9],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = (function () {
    function User(nick, email, groupID, groupName) {
        this.nick = nick;
        this.email = email;
        this.groupID = groupID;
        this.groupName = groupName;
    }
    return User;
}());

var AuthService = (function () {
    //inject storage in this service
    function AuthService(storage, databaseprovider) {
        this.storage = storage;
        this.databaseprovider = databaseprovider;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (credentials.email === null || credentials.password === null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
            }
            else {
                _this.databaseprovider.getUserInfo(credentials.email).then(function (data) {
                    // alert(JSON.stringify(data));
                    var access = (credentials.password === data.pass);
                    // alert('entered: '+ credentials.password +' should be: "'+ data.pass +'"');
                    if (access) {
                        _this.currentUser = new User(data.nick, data.email, data.groupID, data.groupName);
                    }
                    observer.next(access);
                    observer.complete();
                });
                // }).catch(() => {observer.next(false); observer.complete();});
            }
        });
    };
    AuthService.prototype.register = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (credentials.email === null || credentials.password === null || credentials.nick === null) {
                alert("Please insert credentials");
                // return false;
                observer.next(false);
                observer.complete();
            }
            else {
                _this.databaseprovider.addNewUser(credentials.nick, credentials.email, 'not-yet-selected', 'not yet selected', credentials.password).then(function (data) {
                    _this.currentUser = new User(credentials.nick, credentials.email, 'marco.email@domainX.com-White-Family', 'White Family');
                    alert('User: ' + JSON.stringify(_this.currentUser));
                });
                // At this point store the credentials to your backend!
                // this.storage.set(credentials.email, credentials.password);
                // this.storage.set('nick4'+credentials.email, credentials.nick);
                // this.currentUser = new User(credentials.nick, credentials.email);
                // return Observable.create(observer => {
                observer.next(true);
                observer.complete();
                // });
            }
        });
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		617,
		8
	],
	"../pages/contact/contact.module": [
		618,
		7
	],
	"../pages/edit-group/edit-group.module": [
		619,
		6
	],
	"../pages/home/home.module": [
		620,
		5
	],
	"../pages/invitations/invitations.module": [
		621,
		4
	],
	"../pages/login/login.module": [
		622,
		3
	],
	"../pages/new-group/new-group.module": [
		623,
		2
	],
	"../pages/register/register.module": [
		624,
		1
	],
	"../pages/tabs/tabs.module": [
		625,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 194;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SocketProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

var SocketProvider = (function () {
    function SocketProvider(events, http) {
        var _this = this;
        this.events = events;
        this.http = http;
        this.socketHost = "http://192.168.1.44:3000";
        // alert('Hello SocketProvider Provider');
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__["connect"](this.socketHost);
        this.socket.on('connect', function () {
            alert('socket connection SUCCESS ' + _this.socket.connected);
            _this.socket.on('invites', function (msg) {
                _this.events.publish('invites', msg);
                // alert('invites: '+JSON.stringify(msg));
            });
            //this.socket.on('message', (msg) => {
            //  alert('msg received from:' + msg.from + ' cmd: ' + msg.cmd);
            //});
            //    this.send();
        });
    }
    SocketProvider.prototype.send = function (cmd, data) {
        alert('sending :  ' + JSON.stringify(data));
        this.socket.emit(cmd, data);
    };
    return SocketProvider;
}());
SocketProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], SocketProvider);

var _a, _b;
//# sourceMappingURL=socket.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHubProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the MainHubProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MainHubProvider = (function () {
    function MainHubProvider(WS, http, DB, auth) {
        this.WS = WS;
        this.http = http;
        this.DB = DB;
        this.auth = auth;
        console.log('Hello MainHubProvider Provider');
    }
    MainHubProvider.prototype.logout = function () {
        return this.auth.logout();
    };
    MainHubProvider.prototype.send = function (cmd, data) {
        return this.WS.send(cmd, data);
    };
    MainHubProvider.prototype.prefillDB = function () {
        return this.DB.prefillDB();
    };
    MainHubProvider.prototype.fillDatabase = function () {
        return this.DB.fillDatabase();
    };
    MainHubProvider.prototype.addMember = function (groupID, groupName, email, name, privilege, score) {
        return this.DB.addMember(groupID, groupName, email, name, privilege, score);
    };
    MainHubProvider.prototype.getAllMembers = function (currentGroupID) {
        return this.DB.getAllMembers(currentGroupID);
    };
    MainHubProvider.prototype.getAllGroups = function (userEMAIL) {
        return this.DB.getAllGroups(userEMAIL);
    };
    MainHubProvider.prototype.getAdminGroups = function (userEMAIL) {
        return this.DB.getAdminGroups(userEMAIL);
    };
    MainHubProvider.prototype.updateGroupName = function (groupID, groupName) {
        return this.DB.updateGroupName(groupID, groupName);
    };
    MainHubProvider.prototype.addNewUser = function (nick, email, groupID, groupName, pass) {
        return this.DB.addNewUser(nick, email, groupID, groupName, pass);
    };
    MainHubProvider.prototype.getUserInfo = function (email) {
        return this.DB.getUserInfo(email);
    };
    return MainHubProvider;
}());
MainHubProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_socket_socket__["a" /* SocketProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */]])
], MainHubProvider);

//# sourceMappingURL=main-hub.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(283);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite_porter__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_socket_socket__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_main_hub_main_hub__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
// import { SuperTabsModule } from 'ionic2-super-tabs';




//import { AuthServiceProvider } from '../providers/auth-service/auth-service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            // SuperTabsModule,
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-group/edit-group.module#EditGroupPageModule', name: 'EditGroupPage', segment: 'edit-group', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invitations/invitations.module#InvitationsPageModule', name: 'InvitationsPage', segment: 'invitations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-group/new-group.module#NewGroupPageModule', name: 'NewGroupPage', segment: 'new-group', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicErrorHandler */] },
            // Storage,
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_socket_socket__["a" /* SocketProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_main_hub_main_hub__["a" /* MainHubProvider */]
            //, AuthServiceProvider
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    //  rootPage:any = 'ContactPage';
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/root/BUDGET/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/root/BUDGET/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_porter__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(sqlitePorter, storage, sqlite, platform, http) {
        this.sqlitePorter = sqlitePorter;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.http = http;
        this.prefillDB();
    }
    DatabaseProvider.prototype.prefillDB = function () {
        var _this = this;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].create(function (observer) {
            _this.platform.ready().then(function () {
                // alert('Creating DB');
                _this.sqlite.create({
                    name: 'FamilyBudget.db',
                    location: 'default'
                })
                    .then(function (db) {
                    // alert('DB has been opened');
                    _this.database = db;
                    _this.storage.get('database_filled').then(function (val) {
                        if (val) {
                            // alert('DB was already FILLED');
                            _this.databaseReady.next(true);
                            observer.next(true);
                            observer.complete();
                        }
                        else {
                            // alert('FILLING the DB');
                            _this.fillDatabase().subscribe(function (val) {
                                if (val) {
                                    // alert('DB has been filled');
                                }
                                observer.next(true);
                                observer.complete();
                            });
                        }
                    });
                })
                    .catch(function (e) { return alert(e); });
            });
        });
    };
    DatabaseProvider.prototype.fillDatabase = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get('assets/dummyDump.sql')
                .map(function (res) { return res.text(); })
                .subscribe(function (sql) {
                // alert(sql);
                _this.sqlitePorter.importSqlToDb(_this.database, sql)
                    .then(function (data) {
                    // alert("done importing: " + data);
                    _this.databaseReady.next(true);
                    _this.storage.set('database_filled', true);
                    observer.next(true);
                    observer.complete();
                })
                    .catch(function (e) { return alert('cought Eroor: ' + e); });
            });
        });
    };
    DatabaseProvider.prototype.addMember = function (groupID, groupName, email, name, privilege, score) {
        var data = [groupID, groupName, email, name, privilege, score];
        return this.database.executeSql("INSERT INTO membersANDgroups (groupID, groupName, email, name, privilege, score) VALUES (?, ?, ?, ?, ?, ?)", data).then(function (data) {
            return data;
        }, function (err) {
            alert('Error: ' + JSON.stringify(err));
            return err;
        });
    };
    DatabaseProvider.prototype.getAllMembers = function (currentGroupID) {
        return this.database.executeSql("SELECT * FROM membersANDgroups WHERE groupID = '" + currentGroupID + "'", []).then(function (data) {
            var members = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    members.push({ groupID: data.rows.item(i).groupID, groupName: data.rows.item(i).groupName, email: data.rows.item(i).email, name: data.rows.item(i).name, privilege: data.rows.item(i).privilege, score: data.rows.item(i).score }); // alert(JSON.stringify({ data: members}, null, 4));
                }
            }
            return members;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    DatabaseProvider.prototype.getAllGroups = function (userEMAIL) {
        //return this.database.executeSql("SELECT DISTINCT groupID, groupName FROM membersANDgroups WHERE email = " + userEMAIL, []).then((data) => {
        return this.database.executeSql("SELECT DISTINCT groupID, groupName FROM membersANDgroups WHERE email = '" + userEMAIL + "'", []).then(function (data) {
            var groups = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    groups.push({ groupID: data.rows.item(i).groupID, groupName: data.rows.item(i).groupName }); //alert(JSON.stringify({ data: groups}, null, 4));
                }
            }
            return groups;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    DatabaseProvider.prototype.getAdminGroups = function (userEMAIL) {
        return this.database.executeSql("SELECT DISTINCT groupID, groupName FROM membersANDgroups WHERE email = '" + userEMAIL + "' AND privilege = 'admin'", []).then(function (data) {
            var adminGroups = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    adminGroups.push({ groupID: data.rows.item(i).groupID, groupName: data.rows.item(i).groupName }); //alert(JSON.stringify({ data: groups}, null, 4));
                }
            }
            return adminGroups;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    DatabaseProvider.prototype.updateGroupName = function (groupID, groupName) {
        // alert(groupID+" --> "+groupName);
        return this.database.executeSql("UPDATE membersANDgroups SET groupName = '" + groupName + "' WHERE groupID = '" + groupID + "'", []).then(function (data) {
            // alert('update: '+data);
            // alert('group name: '+groupName);
            return groupName;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    DatabaseProvider.prototype.addNewUser = function (nick, email, groupID, groupName, pass) {
        return this.database.executeSql("INSERT INTO UsersSettings (nick, email, defaultGroupID, defaultGroupName, pass) VALUES (?, ?, ?, ?, ?)", [nick, email, groupID, groupName, pass]).then(function (data) {
            // alert('Success: '+ JSON.stringify(data));
            return data;
        }, function (err) {
            alert('Error: ' + JSON.stringify(err));
            return err;
        });
    };
    DatabaseProvider.prototype.getUserInfo = function (email) {
        return this.database.executeSql("SELECT * FROM UsersSettings WHERE email = '" + email + "'", []).then(function (data) {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    // alert(JSON.stringify(data.rows.item(i)));
                }
            }
            return data.rows.item(0);
        });
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    return DatabaseProvider;
}());
DatabaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DatabaseProvider);

//# sourceMappingURL=database.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map