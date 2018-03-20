webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splash_screen_splash_screen_component__ = __webpack_require__("./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stats_screen_stats_screen_component__ = __webpack_require__("./src/app/stats-screen/stats-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__friend_card_friend_card_component__ = __webpack_require__("./src/app/friend-card/friend-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__messages_screen_messages_screen_component__ = __webpack_require__("./src/app/messages-screen/messages-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__friend_card_friend_card_component__["a" /* FriendCardComponent */] },
    { path: 'loading', component: __WEBPACK_IMPORTED_MODULE_4__splash_screen_splash_screen_component__["a" /* SplashScreenComponent */] },
    { path: 'stats', component: __WEBPACK_IMPORTED_MODULE_6__stats_screen_stats_screen_component__["a" /* StatsScreenComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_8__messages_screen_messages_screen_component__["a" /* MessagesScreenComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__splash_screen_splash_screen_component__["a" /* SplashScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__stats_screen_stats_screen_component__["a" /* StatsScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_7__friend_card_friend_card_component__["a" /* FriendCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__messages_screen_messages_screen_component__["a" /* MessagesScreenComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friend-card/friend-card.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 20px;\r\n    border-radius: 20px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.profile {\r\n    padding: 20px;\r\n    padding-bottom: unset;\r\n}\r\n\r\n.info {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    /* padding-top: 20px; */\r\n}\r\n\r\n.circle {\r\n    width: 65px;\r\n    height: 65px;\r\n    border-radius: 175px;\r\n    background-color: white;\r\n}\r\n\r\n.profile-picture {\r\n    margin-top: -40px;\r\n}\r\n\r\nimg.picture {\r\n    max-width: 100%;\r\n    border-radius: 175px;\r\n}\r\n\r\n.progressbars {\r\n    padding: 20px;\r\n}\r\n\r\n.progressbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    max-height: 45px;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.progressbar .percent {\r\n    width: 75%;\r\n}\r\n\r\n.progressbar .icon {\r\n    width: 10%;\r\n}"

/***/ }),

/***/ "./src/app/friend-card/friend-card.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"card\">\n  <div class=\"profile\">\n    <div class=\"info\">\n      <div class=\"circle\"></div>\n      <div class=\"circle\"></div>\n    </div>\n    <div class=\"profile-picture\">\n      <img class=\"picture\" src=\"./assets/images/profile-picture.jpg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"progressbars\">\n    <div class=\"globe progressbar\">\n      <img class=\"percent\" src=\"./assets/images/progressbar-1.svg\" type=\"image/svg+xml\">\n      <img class=\"icon\" src=\"./assets/images/globe-icon.svg\" type=\"image/svg+xml\">\n    </div>\n    <div class=\"music progressbar\">\n      <img class=\"percent\" src=\"./assets/images/progressbar-2.svg\" type=\"image/svg+xml\">\n      <img class=\"icon\" src=\"./assets/images/music-icon.svg\" type=\"image/svg+xml\">\n    </div>\n    <div class=\"time progressbar\">\n      <img class=\"percent\" src=\"./assets/images/progressbar-3.svg\" type=\"image/svg+xml\">\n      <img class=\"icon\" src=\"./assets/images/time-icon.svg\" type=\"image/svg+xml\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/friend-card/friend-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendCardComponent = /** @class */ (function () {
    function FriendCardComponent() {
    }
    FriendCardComponent.prototype.ngOnInit = function () {
    };
    FriendCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friend-card',
            template: __webpack_require__("./src/app/friend-card/friend-card.component.html"),
            styles: [__webpack_require__("./src/app/friend-card/friend-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendCardComponent);
    return FriendCardComponent;
}());



/***/ }),

/***/ "./src/app/messages-screen/messages-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".stats {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    background-color: lightgray;\r\n}\r\n\r\nh1 {\r\n    margin: unset;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n}\r\n\r\n.progressbars {\r\n    padding: 0 35px;\r\n}\r\n\r\nobject.progressbar {\r\n    margin: 5px 0;\r\n}"

/***/ }),

/***/ "./src/app/messages-screen/messages-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"stats\">\n  <h1>Messages</h1>\n</div>"

/***/ }),

/***/ "./src/app/messages-screen/messages-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesScreenComponent = /** @class */ (function () {
    function MessagesScreenComponent() {
    }
    MessagesScreenComponent.prototype.ngOnInit = function () {
    };
    MessagesScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages-screen',
            template: __webpack_require__("./src/app/messages-screen/messages-screen.component.html"),
            styles: [__webpack_require__("./src/app/messages-screen/messages-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesScreenComponent);
    return MessagesScreenComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 10px;\r\n}\r\n\r\n.menu.icon {\r\n    height: 40px;\r\n    width: 50px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <img routerLink=\"/stats\" id=\"stats-svg\" class=\"menu icon\" src=\"./assets/images/stats.svg\" type=\"image/svg+xml\">\n  <img routerLink=\"/\" id=\"logo-svg\" class=\"menu icon\" src=\"./assets/images/logo.svg\" type=\"image/svg+xml\">\n  <img routerLink=\"/messages\" id=\"messages-svg\" class=\"menu icon\" src=\"./assets/images/messages.svg\" type=\"image/svg+xml\">\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".splash-screen {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.logo {\r\n    max-width: 100%;\r\n    width: 100%;\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n#logo-svg {\r\n    width: 200px;\r\n    max-width: 33%;\r\n}"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"splash-screen\">\n  <div class=\"logo\">\n    <object id=\"logo-svg\" data=\"./assets/images/logo.svg\" type=\"image/svg+xml\"></object>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent() {
    }
    SplashScreenComponent.prototype.ngOnInit = function () {
    };
    SplashScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash-screen',
            template: __webpack_require__("./src/app/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__("./src/app/splash-screen/splash-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());



/***/ }),

/***/ "./src/app/stats-screen/stats-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".stats {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    background-color: lightgray;\r\n}\r\n\r\nh1 {\r\n    margin: unset;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n}\r\n\r\n.progressbars {\r\n    padding: 0 35px;\r\n}\r\n\r\nobject.progressbar {\r\n    margin: 5px 0;\r\n}"

/***/ }),

/***/ "./src/app/stats-screen/stats-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"stats\">\r\n    <h1>Stats</h1>\r\n    <div class=\"progressbars\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-1.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-2.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-3.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-4.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-5.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-6.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-7.svg\" type=\"image/svg+xml\">\r\n        <img class=\"progressbar\" src=\"./assets/images/progressbar-8.svg\" type=\"image/svg+xml\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/stats-screen/stats-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsScreenComponent = /** @class */ (function () {
    function StatsScreenComponent() {
    }
    StatsScreenComponent.prototype.ngOnInit = function () {
    };
    StatsScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stats-screen',
            template: __webpack_require__("./src/app/stats-screen/stats-screen.component.html"),
            styles: [__webpack_require__("./src/app/stats-screen/stats-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsScreenComponent);
    return StatsScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map