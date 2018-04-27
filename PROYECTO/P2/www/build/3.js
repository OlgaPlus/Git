webpackJsonp([3],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pag1PageModule", function() { return Pag1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pag1__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Pag1PageModule = /** @class */ (function () {
    function Pag1PageModule() {
    }
    Pag1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pag1__["a" /* Pag1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pag1__["a" /* Pag1Page */]),
            ],
        })
    ], Pag1PageModule);
    return Pag1PageModule;
}());

//# sourceMappingURL=pag1.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pag1Page; });
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
 * Generated class for the Pag1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Pag1Page = /** @class */ (function () {
    function Pag1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Pag1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pag1Page');
    };
    Pag1Page.prototype.irPagSiguiente = function () {
        this.navCtrl.push('Pag2Page');
    };
    Pag1Page.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Pag1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pag1',template:/*ion-inline-start:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\pag1\pag1.html"*/'<ion-header color="danger">\n\n \n\n\n\n	<img width="60" height="60" src="/assets/imgs/a.png" title=\'Logo1\'/>\n\n    <h2 class="nombre">Elena</h2>\n\n	<img class="flecha" width="15" height="15" src="/assets/imgs/flecha.png" title=\'Flecha\'/>\n\n	<img class="foto" width="60" height="60" src="/assets/imgs/perfil.png" title=\'Contact\'/>\n\n \n\n</ion-header>\n\n\n\n<ion-content id="fondo">\n\n   	\n\n	<h1 class="titulo">PÁGINA PRINCIPAL</h1>\n\n   <!--<button ion-button (click)="addCliente2()">AÑADIR</button>-->\n\n	\n\n\n\n\n\n	<div class="fondo1">\n\n		<h1 class="dentro"><u>Mis cursos</u></h1>\n\n		<img class="flechaDentro" width="15" height="15" src="/assets/imgs/flecha_arriba.png" title=\'Flecha\'/>\n\n	</div>\n\n		\n\n	<div class="fondo2">\n\n		<h2 class="cursos" ><u>3º PRIMARIA</u></h2>\n\n		<img class="flechaDentro2" width="15" height="15" src="/assets/imgs/flecha_arriba.png" title=\'Flecha\'/>\n\n	</div>\n\n		\n\n	<div class="fondo1">\n\n		<h5 class="clases"><u>Matemáticas - 3PA</u></h5>\n\n	</div>\n\n		\n\n	<div class="fondo2">\n\n		<h5 class="clases" ><u>Matemáticas - 3PB</u></h5>\n\n	</div>\n\n		\n\n	<div class="fondo1">\n\n		<h5 class="clases"><u>Matemáticas - 3PC</u></h5>\n\n	</div>\n\n	\n\n	<div class="fondo2">\n\n		<h2 class="cursos"><u>4º PRIMARIA</u></h2>\n\n		<img class="flechaDentro2" width="15" height="15" src="/assets/imgs/flecha_arriba.png" title=\'Flecha\'/>\n\n	</div>\n\n	\n\n	<div class="fondo1">\n\n		<h5 class="clases"><u>Matemáticas - 4PB</u></h5>\n\n	</div>\n\n	\n\n	<div class="fondo2">\n\n		<h5 class="clases"><u>Matemáticas - 4PD</u></h5>\n\n	</div>\n\n	\n\n	<div class="fondo1">\n\n		<h1 class="dentro"><u>Calendario</u></h1>\n\n		<img class="flechaDentro" width="15" height="15" src="/assets/imgs/flecha.png" title=\'Flecha\'/>\n\n	</div>\n\n  \n\n \n\n  \n\n  \n\n\n\n	\n\n	<!--<button ion-button secondary menuToggle>Toggle Menu</button>-->\n\n	<!--<button ion-button (click)="gotoPage(\'Pag1Page\')">Ir a pagina de navegación</button>\n\n	<button ion-button (click)="gotoPage(\'PagBotonesPage\')">Ir a pagina de Botones</button>\n\n	<button ion-button (click)="gotoPage(\'CardsPage\')">Ir a pagina de Cards</button>\n\n	<button ion-button (click)="gotoPage(\'ChecksPage\')">Ir a pagina de Checks</button>-->\n\n\n\n	\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\pag1\pag1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Pag1Page);
    return Pag1Page;
}());

//# sourceMappingURL=pag1.js.map

/***/ })

});
//# sourceMappingURL=3.js.map