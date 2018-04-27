webpackJsonp([10],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagBotonesPageModule", function() { return PagBotonesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pag_botones__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { AppModule } from '../../app/app.module';
var PagBotonesPageModule = /** @class */ (function () {
    function PagBotonesPageModule() {
    }
    PagBotonesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pag_botones__["a" /* PagBotonesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pag_botones__["a" /* PagBotonesPage */])
            ]
        })
    ], PagBotonesPageModule);
    return PagBotonesPageModule;
}());

//# sourceMappingURL=pag-botones.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagBotonesPage; });
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
 * Generated class for the PagBotonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagBotonesPage = /** @class */ (function () {
    function PagBotonesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagBotonesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagBotonesPage');
    };
    PagBotonesPage.prototype.irPagAnterior = function () {
        this.navCtrl.pop();
    };
    PagBotonesPage.prototype.irPagSiguiente = function () {
        this.navCtrl.push('CardsPage');
    };
    PagBotonesPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PagBotonesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pag-botones',template:/*ion-inline-start:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\pag-botones\pag-botones.html"*/'<!--\n\n  Generated template for the PagBotonesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Trabajando con botones</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<p>Configurando el tamaño:</p>\n\n<button ion-button small>Small</button>\n\n<button ion-button>Default</button>\n\n<button ion-button large>Large</button>\n\n\n\n<p>Utilizando iconos:</p>\n\n<button ion-button icon-left>\n\n  <ion-icon name="home"></ion-icon>\n\n  Left Icon\n\n</button>\n\n\n\n<!-- Float the icon right -->\n\n<!--<button ion-button icon-right>\n\n  Right Icon\n\n  <ion-icon name="home"></ion-icon>\n\n</button>\n\n-->\n\n\n\n<!-- Only icon (no text) -->\n\n<button ion-button icon-only>\n\n  <ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n<p>Configurando el borde:</p>\n\n<button ion-button outline>Primary Outline</button>\n\n<button ion-button color="secondary" clear>Secondary Clear</button>\n\n<button ion-button color="danger" round>Danger Round</button>\n\n\n\n<hr/>\n\n<button ion-button icon-only (click)="irHome()">\n\n  <ion-icon name="home"></ion-icon>\n\n</button>\n\n\n\n<button ion-button  color="light" icon-left small (click)="irPagAnterior()">\n\n<ion-icon name=\'arrow-back\'></ion-icon>\n\nAnterior\n\n</button>\n\n\n\n<button ion-button color="light" icon-left small (click)="irPagSiguiente()">\n\nSiguiente\n\n<ion-icon name=\'arrow-forward\'></ion-icon>\n\n</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\pag-botones\pag-botones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PagBotonesPage);
    return PagBotonesPage;
}());

//# sourceMappingURL=pag-botones.js.map

/***/ })

});
//# sourceMappingURL=10.js.map