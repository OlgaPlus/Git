webpackJsonp([0],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecksPageModule", function() { return ChecksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checks__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChecksPageModule = /** @class */ (function () {
    function ChecksPageModule() {
    }
    ChecksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checks__["a" /* ChecksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checks__["a" /* ChecksPage */]),
            ],
        })
    ], ChecksPageModule);
    return ChecksPageModule;
}());

//# sourceMappingURL=checks.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(131);
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
 * Generated class for the ChecksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChecksPage = /** @class */ (function () {
    function ChecksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChecksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChecksPage');
    };
    ChecksPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ChecksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checks',template:/*ion-inline-start:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\checks\checks.html"*/'<!--\n\n  Generated template for the ChecksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>checks</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item>\n\n  <ion-label>Daniel Foss</ion-label>\n\n  <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Isabel Martín</ion-label>\n\n  <ion-checkbox disabled="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Pepe Flores</ion-label>\n\n  <ion-checkbox checked="false"></ion-checkbox>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Maria Rosquilla</ion-label>\n\n  <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Luis Suarez</ion-label>\n\n  <ion-checkbox color="danger" checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<button ion-button icon-only (click)="irHome()">\n\n  <ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\checks\checks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChecksPage);
    return ChecksPage;
}());

//# sourceMappingURL=checks.js.map

/***/ })

});
//# sourceMappingURL=0.js.map