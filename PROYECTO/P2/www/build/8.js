webpackJsonp([8],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pag3PageModule", function() { return Pag3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pag3__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Pag3PageModule = /** @class */ (function () {
    function Pag3PageModule() {
    }
    Pag3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pag3__["a" /* Pag3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pag3__["a" /* Pag3Page */]),
            ],
        })
    ], Pag3PageModule);
    return Pag3PageModule;
}());

//# sourceMappingURL=pag3.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pag3Page; });
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
 * Generated class for the Pag3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Pag3Page = /** @class */ (function () {
    function Pag3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Pag3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pag3Page');
    };
    Pag3Page.prototype.irPagAnterior = function () {
        this.navCtrl.pop();
    };
    Pag3Page.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Pag3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pag3',template:/*ion-inline-start:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\pag3\pag3.html"*/'<!--\n\n  Generated template for the Pag3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header color="danger">\n\n	<div class="header">\n\n		<img id = "logo" src="/assets/imgs/a.png" title=\'Logo1\'/>\n\n		<h2 class="nombre">Elena</h2>\n\n		<img class="flecha" src="/assets/imgs/flecha.png" title=\'Flecha\'/>\n\n		<img class="foto" src="/assets/imgs/perfil.png" title=\'Contact\'/>\n\n	 </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fondo">\n\n\n\n   	<!--<img src="/assets/imgs/EducaN.png" title=\'Logo1\'/>-->\n\n	\n\n	<div class="asignatura">\n\n		<h1 class="titulo"> Matemáticas - 4PB</h1>\n\n    </div>\n\n\n\n	<div class="migas">\n\n		<u id="miga1" (click)="gotoPage(\'PagBotonesPage\')">Página Principal</u>\n\n		>\n\n		<u id ="miga1" (click)="gotoPage(\'PagBotonesPage\')" >Matematicas..</u>\n\n		>\n\n		Video Explicativo\n\n	</div>\n\n\n\n	<p id="subtitulo">Video explicativo</p>\n\n	<p id="tituloVideo"><u>Raices cuadradas </u></p>\n\n   <!--<button ion-button (click)="addCliente2()">AÑADIR</button>-->\n\n  \n\n	<!--<ion-list>\n\n\n\n	  <ion-item class="fondo">\n\n		<ion-label stacked class="caja">Usuario</ion-label>\n\n		<ion-input type="text"></ion-input>\n\n	  </ion-item>\n\n\n\n	  <ion-item class="fondo">\n\n		<ion-label stacked class="caja">Contraseña</ion-label>\n\n		<ion-input type="password"></ion-input>\n\n	  </ion-item>\n\n\n\n	</ion-list>-->\n\n	\n\n	\n\n	<ion-item>\n\n		<div class="video-container">\n\n			<iframe src="https://www.youtube.com/embed/1gJMWelGPK8" frameborder="0" ></iframe>\n\n		</div>\n\n	</ion-item>\n\n	 \n\n	<div class="icono">\n\n		<img id = "iconoY" src="/assets/imgs/youtube.png"/>\n\n		<u id = "tituloVidRel" (click)="gotoPage(\'PagBotonesPage\')" > Videos relacionados </u>\n\n	</div>\n\n\n\n  <p *ngFor="let cliente of listaClientes ">\n\n	<button small ion-button (click)="delCliente([cliente.id])">-</button>\n\n	<button small ion-button (click)="updateCliente([cliente.id])">u</button>\n\n	{{cliente.nombre}}  {{cliente.apellidos}}\n\n  </p>\n\n  \n\n  \n\n<!--<button ion-button (click)="gotoPage(\'Pag1Page\')" id="boton">Iniciar Sesión</button>-->\n\n	\n\n	<!--<button ion-button secondary menuToggle>Toggle Menu</button>-->\n\n	<!--<button ion-button (click)="gotoPage(\'Pag1Page\')">Ir a pagina de navegación</button>\n\n	<button ion-button (click)="gotoPage(\'PagBotonesPage\')">Ir a pagina de Botones</button>\n\n	<button ion-button (click)="gotoPage(\'CardsPage\')">Ir a pagina de Cards</button>\n\n	<button ion-button (click)="gotoPage(\'ChecksPage\')">Ir a pagina de Checks</button>-->\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Olga\Git\PROYECTO\P2\src\pages\pag3\pag3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Pag3Page);
    return Pag3Page;
}());

//# sourceMappingURL=pag3.js.map

/***/ })

});
//# sourceMappingURL=8.js.map