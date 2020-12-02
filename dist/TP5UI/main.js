(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faq-accordion/faq-accordion.component */ "./src/app/components/faq-accordion/faq-accordion.component.ts");
/* harmony import */ var _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-seccion/main-seccion.component */ "./src/app/components/main-seccion/main-seccion.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");








const routes = [
    { path: 'home', component: _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_4__["MainSeccionComponent"] },
    { path: 'faqs', component: _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_3__["FaqAccordionComponent"] },
    { path: 'login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'playlist', component: _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistComponent"] },
    //{path:'playlist/:id',component:PlaylistComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/control-bar/control-bar.component */ "./src/app/components/control-bar/control-bar.component.ts");







function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_control_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-control-bar");
} }
function AppComponent_router_outlet_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'TP5UI';
    }
    ngOnInit() { }
    isLoginRoute() {
        return this.router.url === '/' || this.router.url === '/login';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-2", "d-none", "d-xl-block", 2, "padding-right", "0px!important"], [1, "col-sm-12", "col-xm-12", "col-lg-10", 2, "padding-left", "0px!important"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_control_bar_2_Template, 1, 0, "app-control-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_router_outlet_3_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoginRoute());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoginRoute());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoginRoute());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginRoute());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_5__["ControlBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main-seccion/main-seccion.component */ "./src/app/components/main-seccion/main-seccion.component.ts");
/* harmony import */ var _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/control-bar/control-bar.component */ "./src/app/components/control-bar/control-bar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/popups/price-table/price-table.component */ "./src/app/components/popups/price-table/price-table.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");
/* harmony import */ var _components_lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/lahamburguesa/lahamburguesa.component */ "./src/app/components/lahamburguesa/lahamburguesa.component.ts");
/* harmony import */ var _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/faq-accordion/faq-accordion.component */ "./src/app/components/faq-accordion/faq-accordion.component.ts");
/* harmony import */ var _components_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/popups/qualification/qualification.component */ "./src/app/components/popups/qualification/qualification.component.ts");
/* harmony import */ var _components_popups_question_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/popups/question/question.component */ "./src/app/components/popups/question/question.component.ts");
/* harmony import */ var _components_popups_qualification_playlist_qualification_playlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/popups/qualification-playlist/qualification-playlist.component */ "./src/app/components/popups/qualification-playlist/qualification-playlist.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
        _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_7__["MainSeccionComponent"],
        _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_8__["ControlBarComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _components_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_10__["PriceTableComponent"],
        _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistComponent"],
        _components_lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_12__["LahamburguesaComponent"],
        _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_13__["FaqAccordionComponent"],
        _components_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_14__["QualificationComponent"],
        _components_popups_question_question_component__WEBPACK_IMPORTED_MODULE_15__["QuestionComponent"],
        _components_popups_qualification_playlist_qualification_playlist_component__WEBPACK_IMPORTED_MODULE_16__["QualificationPlaylistComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                    _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_7__["MainSeccionComponent"],
                    _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_8__["ControlBarComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _components_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_10__["PriceTableComponent"],
                    _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistComponent"],
                    _components_lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_12__["LahamburguesaComponent"],
                    _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_13__["FaqAccordionComponent"],
                    _components_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_14__["QualificationComponent"],
                    _components_popups_question_question_component__WEBPACK_IMPORTED_MODULE_15__["QuestionComponent"],
                    _components_popups_qualification_playlist_qualification_playlist_component__WEBPACK_IMPORTED_MODULE_16__["QualificationPlaylistComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/control-bar/control-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/control-bar/control-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ControlBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBarComponent", function() { return ControlBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popups/qualification/qualification.component */ "./src/app/components/popups/qualification/qualification.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class ControlBarComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.myMedia = document.createElement('audio');
        this.volumen = 25;
    }
    ngOnInit() {
        this.ponerPopover();
    }
    calificarCancion() {
        const modalRef = this.modalService.open(_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_1__["QualificationComponent"], { windowClass: 'modal-holder', size: 'md', centered: true });
    }
    /*
    cambiarVolumen(){
      let input = document.getElementById("volume");
      this.volumen = input.getAttribute('value').valueOf;
    }*/
    ponerPopover() {
        //$(document).ready(function(){
        //This triggers the pop over
        //  $('[data-toggle="popover"]').popover();   
        // Triggers content on the button all through JS
        //$('.btn-pop').popover({title: "<p>inside  popover</p>", content: "Text", html: true, placement: "right"}); 
        //});
    }
}
ControlBarComponent.ɵfac = function ControlBarComponent_Factory(t) { return new (t || ControlBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ControlBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlBarComponent, selectors: [["app-control-bar"]], decls: 64, vars: 0, consts: [[1, "row", "fila-footer"], [1, "col-2", "d-none", "d-lg-block", "album-container"], [1, "row"], [1, "col-4", "albun-foto"], ["src", "https://i.pinimg.com/564x/5b/21/2c/5b212c4852fe0393a098537d48f36546.jpg", "alt", ""], [1, "col-8", "info-tema"], ["data-toggle", "tooltip", "data-placement", "top", "title", "album"], [1, "marquee"], ["data-toggle", "tooltip", "data-placement", "top", "title", "tema"], [1, "col-12", "col-sm-8", "row", "controles-container"], [1, "col-3", "col-sm-3"], [1, "row", "btns-control"], [1, "col-6", "btn-aleatorio"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 1000 1000", "enable-background", "new 0 0 1000 1000", 0, "xml", "space", "preserve"], ["fill", "currentColor", "d", "M807.3,340.8v98.8c0,24.2,13.8,29.8,30.8,12.7l140.8-142.2c14.9-15,14.9-39.4,0-54.5L838,113.5c-17-17.2-30.8-11.5-30.8,12.7v75.2h-178c-183.9,0-317,458.4-431.8,458.4H75.7c-36.3,0-65.7,29.4-65.7,65.7v8.1c0,36.3,29.4,65.7,65.7,65.7h121.8c183.9,0,317-458.4,431.8-458.4H807.3z M518.4,558.1c39.3,59.1,75.9,101.6,110.9,101.6h178v-97.8c0-24.7,14.1-30.5,31.5-13l139.5,140.8c15.2,15.4,15.2,40.3,0,55.7L838.7,886.3c-17.4,17.6-31.5,11.8-31.5-13v-74.2h-178c-67.5,0-121.2-53.3-176.7-131.1L518.4,558.1z M311.5,447c-42.6-66.1-76.5-106.2-114.1-106.2H77.1c-37.1,0-67.1-30.1-67.1-67.2v-5.1c0-37.1,30.1-67.2,67.1-67.2h120.3c66.2,0,128.1,62.4,183.4,139.5L311.5,447z"], [1, "col-6", "btn-repeat"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "repeat", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-repeat", "fa-w-16"], ["fill", "currentColor", "d", "M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z", 1, ""], [1, "col-6", "col-sm-6", "d-flex", "justify-content-center", "btns-control"], [1, "btn-back-song"], ["data-toggle", "tooltip", "data-placement", "up", "title", "tema anterior"], ["href", "#", "data-vbtype", "video", "data-autoplay", "true", 1, "back-btn"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "step-backward", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-step-backward", "fa-w-14"], ["fill", "currentColor", "d", "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z", 1, ""], [1, "btn-play"], ["data-toggle", "tooltip", "data-placement", "top", "title", "play"], ["href", "#", "data-vbtype", "video", "data-autoplay", "true", 1, "pause-btn"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "play", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-play", "fa-w-14"], ["fill", "currentColor", "d", "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z", 1, ""], [1, "btn-next-song"], ["href", "#", "data-vbtype", "video", "data-autoplay", "true", 1, "next-btn"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "step-forward", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-step-forward", "fa-w-14"], ["fill", "currentColor", "d", "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z", 1, ""], [1, "volume"], [1, "fas", "fa-volume-up"], ["id", "volume", "type", "range", "min", "0", "max", "100", "value", "50"], [1, "col-12", "row", "progreso"], [1, "progreso-bar"], [1, "col-2", "d-none", "d-lg-block", "opciones-container"], ["data-toggle", "tooltip", "data-placement", "right", "title", "reproducion aleatoria", 1, "col-6", "btn-aleatorio"], [1, "opciones"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "bars", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-bars", "fa-w-14"], ["fill", "currentColor", "d", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z", 1, ""], ["data-toggle", "tooltip", "data-placement", "right", "title", "dale me gusta!!", 1, "corazon", 3, "click"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-heart", "fa-w-16"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z", 1, ""]], template: function ControlBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Despedazado Por Mil Partes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "El Final Es En Donde Parti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "El Final Es En Donde Parti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlBarComponent_Template_div_click_61_listener() { return ctx.calificarCancion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway:500);\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\nsvg[_ngcontent-%COMP%] {\n  color: #bebbbb;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0vh;\n  margin: 0;\n  width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #202636;\n  height: 13vh;\n  \n}\nfooter[_ngcontent-%COMP%]   .album-container[_ngcontent-%COMP%] {\n  background-color: #202636;\n  display: flex;\n  align-items: center;\n  padding: 1vh;\n}\nfooter[_ngcontent-%COMP%]   .album-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 11vh;\n}\nfooter[_ngcontent-%COMP%]   .album-container[_ngcontent-%COMP%]   .info-tema[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  padding: 0;\n  margin: 0;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%] {\n  background-color: #202636;\n  display: flex;\n  align-items: center;\n  padding-left: 50px;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-aleatorio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-repeat[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 4vh;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%] {\n  padding: 0.5vw;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-back-song[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-next-song[_ngcontent-%COMP%] {\n  padding: 0.5vw;\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .progreso[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 15px;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%] {\n  background-color: #202636;\n  display: flex;\n  align-items: center;\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .btn-aleatorio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .btn-repeat[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 4vh;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3vh;\n  left: 5vh;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .corazon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3vh;\n  left: 5vh;\n}\n\n.play-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: radial-gradient(#342091 50%, rgba(30, 30, 156, 0.877) 50%);\n  display: block;\n  transform: rotate(45deg);\n  \n  position: relative;\n  overflow: hidden;\n  border-radius: 40px;\n}\n.play-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n}\n\n@keyframes play-btn {\n  0% {\n    transform: scale(0.6, 0.6);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n.back-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background: radial-gradient(#342091 100%, rgba(12, 12, 201, 0.692) 50%);\n  display: block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50px;\n}\n.back-btn[_ngcontent-%COMP%]:hover, .next-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n}\n.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20%;\n  top: 19%;\n  width: 20px;\n}\n.pause-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: radial-gradient(#342091 100%, rgba(12, 12, 201, 0.692) 50%);\n  display: block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50px;\n}\n.pause-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n}\n.pause-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 33%;\n  top: 22%;\n  width: 20px;\n}\nbody[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n  font-family: Raleway;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 34px;\n  padding-top: 40px;\n  color: #FFF;\n}\np[_ngcontent-%COMP%] {\n  color: #999;\n  text-align: center;\n  font-size: 15px;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2ecc71;\n  text-decoration: none;\n  padding: 1px 2px 0px 2px;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  transition: all 0.1s ease;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  padding: 1px 2px 1px 2px;\n  border-bottom: 2px solid #555;\n}\n.volume[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #bebbbb;\n  padding-right: 5px;\n}\n.volume[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #bebbbb;\n  --swiper-theme-color:$color-3;\n}\n@media screen and (max-width: 600px) {\n  .volume[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    display: none;\n    -webkit-appearance: slider-vertical;\n  }\n}\n.progreso-bar[_ngcontent-%COMP%] {\n  padding-left: 13%;\n  background-color: #ac5c51;\n  width: 85%;\n  height: 6px;\n}\n.fila-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.marquee[_ngcontent-%COMP%] {\n  color: #f1eeee;\n  height: 25px;\n  width: 420px;\n  overflow: hidden;\n  position: relative;\n}\n.marquee[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  width: 200%;\n  height: 30px;\n  position: absolute;\n  overflow: hidden;\n  animation: marquee 6s linear infinite;\n}\n.marquee[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n@keyframes marquee {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n\n.popover[_ngcontent-%COMP%] {\n  border: 2px solid black;\n}\n\n.popover-title[_ngcontent-%COMP%] {\n  background-color: #4c4d4d;\n  color: #FFFFFF;\n  font-size: 12px;\n  text-align: center;\n}\n\n.popover-content[_ngcontent-%COMP%] {\n  background-color: #4c4d4d;\n  color: #FFFFFF;\n  font-size: 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWJhci9jb250cm9sLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBNFBZLGdFQUFBO0FDNVBaLDhFQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FERUo7QUNBQSxTQUFBO0FBTUEsb0JBQUE7QUFJQTtFQUNFLGtFQUFBO0FETEY7QUNRQTtFQUNFLGlDQUFBO0VBQ0EscURBQUE7QURMRjtBQXBCQTtFQUNJLGNDZVM7QURPYjtBQXBCQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJDRE07RURHTixZQUFBO0VBQ0Q7Ozs7d0JBQUE7QUEwQkg7QUFyQlE7RUFFSSx5QkNYRjtFRFlFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFzQlo7QUFyQlk7RUFDSSxZQUFBO0FBdUJoQjtBQXJCWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBdUJoQjtBQXBCUTtFQUVJLHlCQzNCRjtFRDRCRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXFCWjtBQXBCWTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQXFCaEI7QUFmb0I7RUFDSSxVQUFBO0FBaUJ4QjtBQWJnQjtFQUNJLGNBQUE7QUFlcEI7QUFaZ0I7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBY3BCO0FBVFk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFXaEI7QUFOUTtFQUdJLHlCQ3BFRjtFRHFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFLWjtBQUNnQjtFQUNJLFVBQUE7QUFDcEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFEaEI7QUFHYztFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFEaEI7QUFTQSxvQ0FBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzRUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUtBLG1CQUFBO0FBWEo7QUFPSTtFQUNJLG9DQUFBO0FBTFI7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQUE7QUFtRUk7RUFDQTtJQUNJLDBCQUFBO0lBQ0EsVUFBQTtFQVBOO0VBU0U7SUFDSSxzQkFBQTtJQUNBLFVBQUE7RUFQTjtBQUNGO0FBVUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVFQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxtQkFBQTtBQWJSO0FBVVE7RUFDSSxvQ0FBQTtBQVJaO0FBV1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQVRaO0FBY0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVFQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxtQkFBQTtBQWhCUjtBQWFRO0VBQ0ksb0NBQUE7QUFYWjtBQWNRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFaWjtBQXNCSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFuQlI7QUFzQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFuQlI7QUFzQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBbkJSO0FBcUJRO0VBQ0ksY0FwQlE7RUFxQlIscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUFuQlo7QUFxQlk7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0FBbkJoQjtBQWtDSTtFQUNJLGNDeFJLO0VEeVJMLGtCQUFBO0FBL0JSO0FBaUNJO0VBQ0kseUJDNVJLO0VENlJMLDZCQUFBO0FBL0JSO0FBZ0NRO0VBSEo7SUFJUSxhQUFBO0lBQ0EsbUNBQUE7RUE3QlY7QUFDRjtBQWtDQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQS9CSjtBQWtDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUEvQko7QUFxQ0E7RUFDSSxjQ3ZUZTtFRHdUZixZQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQ0o7QUFzQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEscUNBQUE7QUFyQ0o7QUF3Q0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQXJDSjtBQXdDRTtFQUNFO0lBQUssT0FBQTtFQXBDUDtFQXFDRTtJQUFPLFdBQUE7RUFsQ1Q7QUFDRjtBQXNDRSxZQUFBO0FBQ0Y7RUFDSSx1QkFBQTtBQXBDSjtBQXVDQSxtQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBcENKO0FBdUNBLGlCQUFBO0FBQ0E7RUFDSyx5QkFBQTtFQUNELGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFwQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtYmFyL2NvbnRyb2wtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5zdmd7XHJcbiAgICBjb2xvcjokbGV0cmEtY29sb3I7XHJcbn1cclxuZm9vdGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7Ly9cclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmdiKDEsIDEsIDgpO1xyXG4gICAgaGVpZ2h0OiAxM3ZoO1xyXG4gICAvKiAuZmlsYS1mb290ZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0OCwgMTQ4LCAxODApO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjksIDExNiwgOTgpOy8vXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyovXHJcbiAgICAgICAgLmFsYnVtLWNvbnRhaW5lcntcclxuICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMXZoO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8tdGVtYSBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRyb2xlcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgLmJ0bnMtY29udHJvbHtcclxuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuYnRuLWFsZWF0b3JpbywuYnRuLXJlcGVhdHtcclxuICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvLyAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0dmg7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLXBsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41dnc7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0bi1iYWNrLXNvbmcsLmJ0bi1uZXh0LXNvbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9ncmVzb3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcGNpb25lcy1jb250YWluZXJ7XHJcblxyXG4gICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5idG4tYWxlYXRvcmlvLC5idG4tcmVwZWF0e1xyXG4gICAgICAgICAgICAgICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDR2aDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcGNpb25lc3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogM3ZoO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNXZoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29yYXpvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogM3ZoO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNXZoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgIC8vIH1cclxufVxyXG4vKmNzcyBib3RvbiBkZSBwbGF5IGNvbiAgYW5pbWFjaW9tbiovXHJcblxyXG4ucGxheS1idG4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzM0MjA5MSA1MCUsIHJnYmEoMzAsIDMwLCAxNTYsIDAuODc3KSA1MCUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAvKm1hcmdpbjogMTAwcHggYXV0bzsqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgfVxyXG4gICAgLy9ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbi8qLnBsYXktYnRuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmZmY7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgODAwbXMgY2lyY2xlLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4ucGxheS1idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwbGF5LWJ0biAycztcclxuICAgIGFuaW1hdGlvbjogcGxheS1idG4gM3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogZm9yd2FyZHM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLnBsYXktYnRuOmhvdmVyOjphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjNTM0Y2FmO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyMCk7XHJcbn1cclxuLnBsYXktYnRuOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZmZmO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4vKi0tIEFuaW1hdGVkIENTUyAtLSovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwbGF5LWJ0biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcGxheS1idG4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrLWJ0biAsLm5leHQtYnRue1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzM0MjA5MSAxMDAlLCByZ2JhKDEyLCAxMiwgMjAxLCAwLjY5MikgNTAlKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNkY2RjZGM7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgdG9wOiAxOSU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnBhdXNlLWJ0bntcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzM0MjA5MSAxMDAlLCByZ2JhKDEyLCAxMiwgMjAxLCAwLjY5MikgNTAlKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNkY2RjZGM7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMzJTtcclxuICAgICAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3ZvbHVtZVxyXG5cclxuICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjUwMCk7XHJcblxyXG4gICAgJHByaW1hcnktY29sb3I6ICMyZWNjNzE7XHJcbiAgICBcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyYTJhMmE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4IDBweCAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4IDFweCAycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4vL3ZvbHVtZVxyXG4udm9sdW1le1xyXG4gICAgaXtcclxuICAgICAgICBjb2xvcjokbGV0cmEtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxldHJhLWNvbG9yO1xyXG4gICAgICAgIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiRjb2xvci0zO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogc2xpZGVyLXZlcnRpY2FsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi5wcm9ncmVzby1iYXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDkyLCA4MSk7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5maWxhLWZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi5tYXJxdWVlIHtcclxuICAgIGNvbG9yOiRsZXRyYS1jb2xvci1ob3ZlcjtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIGFuaW1hdGlvbjogbWFycXVlZSA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJxdWVlIHNwYW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4gICAgMCUgeyBsZWZ0OiAwOyB9XHJcbiAgICAxMDAlIHsgbGVmdDogLTEwMCU7IH1cclxuICB9XHJcblxyXG4gIC8vcG9wb3ZlclxyXG5cclxuICAvKiBQb3BvdmVyICovXHJcbi5wb3BvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4vKiBQb3BvdmVyIEhlYWRlciAqL1xyXG4ucG9wb3Zlci10aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM0ZDRkOyBcclxuICAgIGNvbG9yOiAjRkZGRkZGOyBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4vKiBQb3BvdmVyIEJvZHkgKi9cclxuLnBvcG92ZXItY29udGVudCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGQ0ZDsgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4gICIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsYm9keXtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6J09wZW5zIFNhbnMnLGhlbHZldGljYTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuLypmb25kb3MqL1xuJGNvbG9yLTE6ICMyMDI2MzY7XG4kY29sb3ItMjojMmIzMTQxO1xuJGNvbG9yLTM6ICMxZGQ2ZmY7XG4kY29sb3ItNDojM2Y0NzU0O1xuXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbiRsZXRyYS1jb2xvcjpyZ2IoMTkwLCAxODcsIDE4Nyk7XG4kbGV0cmEtY29sb3ItaG92ZXI6cmdiKDI0MSwgMjM4LCAyMzgpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInO1xuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuIFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-control-bar',
                templateUrl: './control-bar.component.html',
                styleUrls: ['./control-bar.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/faq-accordion/faq-accordion.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/faq-accordion/faq-accordion.component.ts ***!
  \*********************************************************************/
/*! exports provided: FaqAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqAccordionComponent", function() { return FaqAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FaqAccordionComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqAccordionComponent.ɵfac = function FaqAccordionComponent_Factory(t) { return new (t || FaqAccordionComponent)(); };
FaqAccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqAccordionComponent, selectors: [["app-faq-accordion"]], decls: 56, vars: 0, consts: [[1, "faq"], ["id", "faq-a", "type", "checkbox"], ["for", "faq-a"], [1, "faq-heading"], [1, "faq-arrow"], [1, "faq-text"], ["id", "faq-b", "type", "checkbox"], ["for", "faq-b"], ["id", "faq-c", "type", "checkbox"], ["for", "faq-c"], ["id", "faq-d", "type", "checkbox"], ["for", "faq-d"], ["id", "faq-e", "type", "checkbox"], ["for", "faq-e"], ["id", "settings", "type", "checkbox"]], template: function FaqAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "How do I purchase Brainitz?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You can purchase an individual account or a site license by emailing us at welcome@brainitz.com One of our staff will be in touch shortly to set-up your account. We accept credit card, purchase order, or check. Learn more on our pricing page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We also offer professional development trainings that include the opportunity to pursue credit while also receiving a discounted license. If you have more questions, please feel free to submit a request!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Do you have professional development trainings available?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Yes, we have professional development trainings available almost every month. Teachers can take our online course that will train you on the theory and practice of putting lessons online, often called flipped or blended learning. These trainings also include in depth instruction on how to use Brainitz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Online training start at $45, include a 1 year subscription Brainitz, and come with 1 hour of advancement credit available through Adams State University or $55. For dates on upcoming trainings, email us at welcome@brainitz.com. If you have more questions, please feel free to submit a request!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Does Brainitz accept purchase orders?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Yes, Brainitz accepts purchase order for site licenses. Please set the PO, including a description of the order to welcome@brainitz.com and we will invoice you for the amount. Once we send the invoice, someone will be in touch to set up your Brainitz account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "You can learn more about our licensing structure on our pricing page. If you have more questions, please feel free to submit a request!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "What are the technical requirements for Brainitz?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "To get setup with Brainitz, instructors will need a computer with working Internet connection and a web browser. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Students will need any device with a web browser, ranging from smartphones to tablets and personal computer, as well as an Internet or cellular connection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "For the be st experience, we recommend using the latest version of Google Chrome, but it should work on a recent version of any major browser. If you have any more questions, please feel free to submit a request! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Can I add a PowerPoint to Brainitz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\nsection[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #3f4754;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #bebbbb;\n  margin: 0;\n  padding: 3vw;\n  width: 100%;\n  height: 80vh;\n}\nsection[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-weight: 400;\n  font-size: 19px;\n  -webkit-transition: text-indent 0.2s;\n  text-indent: 20px;\n  color: #bebbbb;\n}\nsection[_ngcontent-%COMP%]   .faq-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-weight: 400;\n  color: #bebbbb;\n  width: 95%;\n  padding-left: 20px;\n  margin-bottom: 30px;\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%] {\n  width: 1000px;\n  margin: 0 auto;\n  background: #202636;\n  border-radius: 4px;\n  position: relative;\n  border: 1px solid #bebbbb;\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background: #202636;\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  height: 56px;\n  padding-top: 1px;\n  background-color: #202636 !important;\n  border-bottom: 1px solid #bebbbb;\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   .faq-arrow[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  border-top: 2px solid rgba(0, 0, 0, 0.33);\n  border-right: 2px solid rgba(0, 0, 0, 0.33);\n  float: right;\n  position: relative;\n  top: -30px;\n  right: 27px;\n  transform: rotate(45deg);\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]    > .faq-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transform: rotate(135deg);\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  display: block;\n  background: white !important;\n  color: #4f7351;\n  height: 225px;\n  transition: height 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\nsection[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%] {\n  display: block;\n  transition: height 0.8s;\n  height: 45px;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\nsection[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXEtYWNjb3JkaW9uL2ZhcS1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENBLFNBQUE7QUFNQSxvQkFBQTtBQUlBO0VBQ0Usa0VBQUE7QUNORjtBRFNBO0VBQ0UsaUNBQUE7RUFDQSxxREFBQTtBQ05GO0FBaEJBO0VBQ0ksYUFBQTtFQUNBLG1CRFFLO0VDTkwseURBQUE7RUFDQSxlQUFBO0VBQ0EsY0RPUztFQ05ULFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQko7QUFmQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Msb0NBQUE7RUFDRCxpQkFBQTtFQUNBLGNETFc7QUNzQmI7QUFkQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRFhXO0VDWVgsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFnQkY7QUFiQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJEMUJRO0VDMkJSLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWVGO0FBZEU7RUFDRSxtQkQvQk07QUMrQ1Y7QUFiQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFjRjtBQVhBO0VBQ0UsYUFBQTtBQWFGO0FBVkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0VBRUEsMEVBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFUSx3QkFBQTtBQVlWO0FBVEM7RUFFQywwQkFBQTtFQUVBLDBFQUFBO0VBRVEseUJBQUE7QUFXVjtBQVRDO0VBQ0MsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBFQUFBO0FBV0Y7QUFSQztFQUNDLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwRUFBQTtBQVVGO0FBUEE7RUFDRSxhQUFBO0FBU0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhcS1hY2NvcmRpb24vZmFxLWFjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsYm9keXtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6J09wZW5zIFNhbnMnLGhlbHZldGljYTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuLypmb25kb3MqL1xuJGNvbG9yLTE6ICMyMDI2MzY7XG4kY29sb3ItMjojMmIzMTQxO1xuJGNvbG9yLTM6ICMxZGQ2ZmY7XG4kY29sb3ItNDojM2Y0NzU0O1xuXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbiRsZXRyYS1jb2xvcjpyZ2IoMTkwLCAxODcsIDE4Nyk7XG4kbGV0cmEtY29sb3ItaG92ZXI6cmdiKDI0MSwgMjM4LCAyMzgpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInO1xuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuIFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJPcGVucyBTYW5zXCIsIGhlbHZldGljYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKmZvbmRvcyovXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIiwgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjM2Y0NzU0O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNiZWJiYmI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogM3Z3O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuc2VjdGlvbiAuZmFxLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogTGF0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuMnM7XG4gIHRleHQtaW5kZW50OiAyMHB4O1xuICBjb2xvcjogI2JlYmJiYjtcbn1cbnNlY3Rpb24gLmZhcS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNiZWJiYmI7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbnNlY3Rpb24gLmZhcSB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMjAyNjM2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlYmJiYjtcbn1cbnNlY3Rpb24gLmZhcSBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICMyMDI2MzY7XG59XG5zZWN0aW9uIC5mYXEgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjYzNiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JlYmJiYjtcbn1cbnNlY3Rpb24gLmZhcSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5zZWN0aW9uIC5mYXEgLmZhcS1hcnJvdyB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuOHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG4gIHJpZ2h0OiAyN3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuc2VjdGlvbiAuZmFxIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCA+IC5mYXEtYXJyb3cge1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuOHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5zZWN0aW9uIC5mYXEgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGY3MzUxO1xuICBoZWlnaHQ6IDIyNXB4O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC44cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG59XG5zZWN0aW9uIC5mYXEgaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjhzO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xufVxuc2VjdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqAccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-accordion',
                templateUrl: './faq-accordion.component.html',
                styleUrls: ['./faq-accordion.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popups/price-table/price-table.component */ "./src/app/components/popups/price-table/price-table.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lahamburguesa/lahamburguesa.component */ "./src/app/components/lahamburguesa/lahamburguesa.component.ts");






function HeaderComponent_app_lahamburguesa_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lahamburguesa", 28);
} }
class HeaderComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.hamburguesa = false;
    }
    ngOnInit() {
        this.searchlist = document.querySelector(".js-searchlist");
        this.searchlistItems = document.querySelector(".js-searchlist-item-wrapper");
        this.searchbox = document.querySelector(".js-searchbox");
        this.input = document.querySelector(".js-input");
        this.icon = document.querySelector(".js-searchbox-icon");
        this.search();
    }
    cambiarPlan() {
        const modalRef = this.modalService.open(_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_1__["PriceTableComponent"], { windowClass: 'modal-holder', size: 'xl', centered: true });
    }
    toggleHamburguesa() {
        this.hamburguesa = !this.hamburguesa;
    }
    search() {
        this.input.onfocus = this.showSearchlist;
        //window.onclick = this.closeSearchlist(e); 
        let users = [
            { name: "Lito Ming", user: "@LM2342314" },
            { name: "Dr Mühlberger", user: "@DR2342314" },
            { name: "Ana María Casanova", user: "@MC2342314" },
            { name: "Sofovich", user: "@Gerardo2342314" },
            { name: "Jorge Porcel Jr.", user: "@JpJ2342314" }
        ];
        users.map(function (e) {
            /* this.searchlistItems.innerHTML = this.searchlistItems.innerHTML.concat(`
              <div class="searchlist-item">
                 <div class="searchlist-item-pic">
                   <img class="searchlist-item-pic-img" src="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg">
                 </div>
                 <div class="searchlist-item-info">
                   <div class="searchlist-item-info-name">${e.name}</div>
                   <div class="searchlist-item-info-user">${e.user}</div>
                 </div>
                 <div class="searchlist-item-clear"><i class="fas fa-times"></i></div>
               </div>
         `);*/
        });
    }
    showSearchlist() {
        //this.searchlist.classList.add("searchlistVisible");
        this.searchbox.classList.add("searchbox-searchlistVisible");
    }
    closeSearchlist(e) {
        if (!this.searchlist.contains(e.target) && !this.searchbox.contains(e.target)) {
            this.searchlist.classList.remove("searchlistVisible");
            this.searchbox.classList.remove("searchbox-searchlistVisible");
        }
    }
    clearInnerHtml(query) {
        const element = document.querySelector(query);
        element.innerHTML = null;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 1, consts: [[1, "row", "fila-header"], [1, "col-3", "col-sm-2", "logo-container"], ["href", "home"], ["src", "./assets/images/auriculares.png", "alt", "./assets/images/logo.jpg"], [1, "d-none", "d-xl-block"], [1, "col-4", "d-none", "d-xl-block", "buscar-container"], [1, "wrapper"], [1, "right-pane"], [1, "searchbox", "js-searchbox"], [1, "searchbox-icon", "js-searchbox-icon"], [1, "fas", "fa-search"], [1, "searchbox-input"], ["type", "text", "id", "searchInput js-searchInput", "placeholder", "Buscar en Spoiler Five", 1, "input", "js-input"], [1, "searchlist", "js-searchlist"], [1, "searchlist-header"], [1, "searchlist-header-title"], ["onclick", "clearInnerHtml('.searchlist')", 1, "searchlist-header-clear", "js-searchlist-header-clear"], [1, "searchlist-item-wrapper", "js-searchlist-item-wrapper"], ["data-toggle", "tooltip", "data-placement", "right", "title", "mira todos los planes", 1, "col-6", "col-sm-8", "col-md-4", "subscribite-container"], [3, "click"], [1, "col-2", "d-none", "d-xl-block", "usuario-container"], [1, "row"], ["src", "./assets/images/usuario.png", "alt", "./assets/images/usuario.png"], [1, "nickname"], [1, "col-3", "col-sm-2", "d-block", "d-xl-none", "menu-container"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "bars", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-bars", "fa-w-14"], ["fill", "currentColor", "d", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z", 1, ""], ["class", "d-block d-xl-none", 4, "ngIf"], [1, "d-block", "d-xl-none"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Spoiler Five");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resultados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Borrar todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_23_listener() { return ctx.cambiarPlan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Planes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "juan perez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_33_listener() { return ctx.toggleHamburguesa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderComponent_app_lahamburguesa_36_Template, 1, 0, "app-lahamburguesa", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hamburguesa);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_4__["LahamburguesaComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\nheader[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #202636;\n  height: 10vh;\n}\n@media screen and (max-width: 600px) {\n  header[_ngcontent-%COMP%] {\n    height: 8.1vh;\n  }\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%] {\n  background-color: #202636;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  position: relative;\n  left: 2%;\n  background-color: #202636;\n  display: flex;\n  align-items: center;\n  color: #bebbbb;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 5px;\n  width: 50px;\n  background-color: #1dd6ff;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 0;\n  font-weight: bolder;\n  float: left;\n  margin-top: 2vh;\n  margin-left: 2vh;\n  color: white;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .subscribite-container[_ngcontent-%COMP%] {\n  background-color: #202636;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .subscribite-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0f79af;\n  color: white;\n  font-weight: 400;\n  position: relative;\n  top: 28%;\n  left: 20%;\n  width: 60%;\n  height: 55%;\n  padding: 0px;\n}\n@media screen and (max-width: 600px) {\n  header[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .subscribite-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    left: 2%;\n    width: 80%;\n    height: 67%;\n  }\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, header[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, header[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  background-color: #202636;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #1da0f2;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  padding-top: 13px;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #253341;\n  height: 2.2rem;\n  border: 1px solid #253341;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]:focus {\n  background-color: red;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]   .searchbox-icon[_ngcontent-%COMP%] {\n  color: #657786;\n  font-size: 1.25rem;\n  padding-left: 15px;\n  width: 10%;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]   .searchbox-input[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0px 10px;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]   .searchbox-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-color: inherit !important;\n  border: none;\n  height: 100%;\n  font-size: 0.98rem;\n  font-weight: 400;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox[_ngcontent-%COMP%]   .searchbox-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::placeholder {\n  color: #798b9a;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox-searchlistVisible[_ngcontent-%COMP%] {\n  border: 1px solid #1da0f2;\n  background-color: rgba(21, 32, 43, 0.2);\n  z-index: 9999;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchbox-searchlistVisible[_ngcontent-%COMP%]   .searchbox-icon[_ngcontent-%COMP%] {\n  color: #1da0f2;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%] {\n  display: none;\n  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.35);\n  border-radius: 5px;\n  overflow: hidden;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist-header[_ngcontent-%COMP%] {\n  font-family: BlinkMacSystemFont;\n  display: flex;\n  padding: 15px 25px 15px 15px;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #38444e;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist-header-title[_ngcontent-%COMP%] {\n  color: #eee;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist-header-clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 25px;\n  width: 90px;\n  line-height: 25px;\n  text-align: center;\n  color: #1da0f2;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border-radius: 20px;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist-header-clear[_ngcontent-%COMP%]:hover {\n  background-color: #1b3448;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item[_ngcontent-%COMP%] {\n  font-family: BlinkMacSystemFont;\n  cursor: pointer;\n  padding: 12px 15px;\n  height: 60px;\n  border-bottom: 1px solid #38444e;\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item[_ngcontent-%COMP%]:hover {\n  background-color: #192734;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-pic[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 100%;\n  overflow: hidden;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-pic-img[_ngcontent-%COMP%] {\n  height: 100%;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-info[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  padding-left: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-info-name[_ngcontent-%COMP%] {\n  color: #eee;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-info-user[_ngcontent-%COMP%] {\n  color: #657786;\n  font-size: 0.95rem;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-clear[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 36px;\n  text-align: center;\n  line-height: 36px;\n  color: #1da0f2;\n  border-radius: 50%;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlist[_ngcontent-%COMP%]   .searchlist-item-clear[_ngcontent-%COMP%]:hover {\n  background-color: #1b3448;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-pane[_ngcontent-%COMP%]   .searchlistVisible[_ngcontent-%COMP%] {\n  display: block;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%] {\n  background-color: #202636;\n  padding-left: 50px;\n  color: #bebbbb;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20%;\n  padding: 0;\n  right: -15%;\n  margin: 0;\n  width: 7vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: 30%;\n  padding: 0;\n  right: -25%;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  background-color: #202636;\n  padding: 1vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n  top: 32%;\n  left: 28%;\n  width: 3vh;\n  color: #bebbbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQSxTQUFBO0FBTUEsb0JBQUE7QUFJQTtFQUNFLGtFQUFBO0FDTkY7QURTQTtFQUNFLGlDQUFBO0VBQ0EscURBQUE7QUNORjtBQXBCQTtFQUNJLFNBQUE7RUFFQSx5QkRRTTtFQ05OLFlBQUE7QUFvQko7QUFuQkk7RUFOSjtJQU9RLGFBQUE7RUFzQk47QUFDRjtBQW5CSTtFQUVJLHlCREZFO0FDc0JWO0FBakJRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBR0EseUJEVkY7RUNXRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRFBDO0FDd0JiO0FBaEJZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRGhCTjtBQ2tDVjtBQWZZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFpQmhCO0FBYlE7RUFFSSx5QkRqQ0Y7QUMrQ1Y7QUFWWTtFQUVJLHlCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVVoQjtBQVRnQjtFQVpKO0lBYVEsUUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBWWxCO0FBQ0Y7QUFJWTs7O0VBR0UsYUFBQTtBQUZkO0FBS1k7RUFDRSx5QkQ1RUo7QUN5RVY7QUFJYztFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGaEI7QUFJYztFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7QUFIaEI7QUFJZTtFQUdHLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpsQjtBQUtrQjtFQUNFLHFCQUFBO0FBSHBCO0FBS2tCO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSHBCO0FBS2tCO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSHBCO0FBSW9CO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRnRCO0FBSXNCO0VBQ0UsY0FBQTtBQUZ4QjtBQVFnQjtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0FBTmxCO0FBT2tCO0VBQ0UsY0FBQTtBQUxwQjtBQVFnQjtFQUNFLGFBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFObEI7QUFPa0I7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUxwQjtBQU1vQjtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSnRCO0FBTW9CO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKdEI7QUFLc0I7RUFDRSx5QkFBQTtBQUh4QjtBQU9rQjtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTHBCO0FBTW9CO0VBQ0UsWUFBQTtBQUp0QjtBQU1vQjtFQUNFLHlCQUFBO0FBSnRCO0FBTW9CO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSnRCO0FBS3NCO0VBQ0UsWUFBQTtBQUh4QjtBQU1vQjtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUp0QjtBQUtzQjtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUh4QjtBQUtzQjtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUh4QjtBQU1vQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUp0QjtBQUtzQjtFQUNFLHlCQUFBO0FBSHhCO0FBUWdCO0VBQ0UsY0FBQTtBQU5sQjtBQWNRO0VBRUkseUJEek9GO0VDMk9FLGtCQUFBO0VBQ0EsY0R0T0M7QUN3TmI7QUFlWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFiaEI7QUFlWTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBYmhCO0FBY2dCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWnBCO0FBbUJRO0VBRUkseUJEdFFGO0VDdVFFLFlBQUE7QUFsQlo7QUFtQlk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNEdlFIO0FDc1BiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxib2R5e1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTonT3BlbnMgU2FucycsaGVsdmV0aWNhOyAgXG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4vKmZvbmRvcyovXG4kY29sb3ItMTogIzIwMjYzNjtcbiRjb2xvci0yOiMyYjMxNDE7XG4kY29sb3ItMzogIzFkZDZmZjtcbiRjb2xvci00OiMzZjQ3NTQ7XG5cbi8qdGlwb2dyYWZpYXMgY29sb3IqL1xuJGxldHJhLWNvbG9yOnJnYigxOTAsIDE4NywgMTg3KTtcbiRsZXRyYS1jb2xvci1ob3ZlcjpyZ2IoMjQxLCAyMzgsIDIzOCk7XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ05vdG9TYW5zS1ItUmVndWxhcicsIEZhbGxiYWNrLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ05vdG9TYW5zS1ItUmVndWxhcic7XG4gIHNyYzogdXJsKCdhc3NldHMvZm9udHMvTm90b19TYW5zX0tSL05vdG9TYW5zS1ItUmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG4gXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5zIFNhbnNcIiwgaGVsdmV0aWNhO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qZm9uZG9zKi9cbi8qdGlwb2dyYWZpYXMgY29sb3IqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNLUi1SZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuaGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNjM2O1xuICBoZWlnaHQ6IDEwdmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogOC4xdmg7XG4gIH1cbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNjM2O1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAubG9nby1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNjM2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2JlYmJiYjtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmxvZ28tY29udGFpbmVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkZDZmZjtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmxvZ28tY29udGFpbmVyIGg2IHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgbWFyZ2luLWxlZnQ6IDJ2aDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuc3Vic2NyaWJpdGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjYzNjtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLnN1YnNjcmliaXRlLWNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3OWFmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDIwJTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlciAuZmlsYS1oZWFkZXIgLnN1YnNjcmliaXRlLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGxlZnQ6IDIlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA2NyU7XG4gIH1cbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgaW5wdXQ6Zm9jdXMsXG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIHRleHRhcmVhOmZvY3VzLFxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDI2MzY7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5tYWluIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMxZGEwZjI7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTNweDtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGJveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTMzNDE7XG4gIGhlaWdodDogMi4ycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjUzMzQxO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNoYm94OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNoYm94IC5zZWFyY2hib3gtaWNvbiB7XG4gIGNvbG9yOiAjNjU3Nzg2O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwJTtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGJveCAuc2VhcmNoYm94LWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGJveCAuc2VhcmNoYm94LWlucHV0IC5pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjk4cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNoYm94IC5zZWFyY2hib3gtaW5wdXQgLmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzk4YjlhO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNoYm94LXNlYXJjaGxpc3RWaXNpYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFkYTBmMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMzIsIDQzLCAwLjIpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNoYm94LXNlYXJjaGxpc3RWaXNpYmxlIC5zZWFyY2hib3gtaWNvbiB7XG4gIGNvbG9yOiAjMWRhMGYyO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNobGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBCbGlua01hY1N5c3RlbUZvbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODQ0NGU7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0LWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGxpc3QtaGVhZGVyLWNsZWFyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiA5MHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFkYTBmMjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNobGlzdC1oZWFkZXItY2xlYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIzNDQ4O1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNobGlzdCAuc2VhcmNobGlzdC1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IEJsaW5rTWFjU3lzdGVtRm9udDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODQ0NGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0IC5zZWFyY2hsaXN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGxpc3QgLnNlYXJjaGxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0IC5zZWFyY2hsaXN0LWl0ZW0tcGljIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGxpc3QgLnNlYXJjaGxpc3QtaXRlbS1waWMtaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNobGlzdCAuc2VhcmNobGlzdC1pdGVtLWluZm8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0IC5zZWFyY2hsaXN0LWl0ZW0taW5mby1uYW1lIHtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0IC5zZWFyY2hsaXN0LWl0ZW0taW5mby11c2VyIHtcbiAgY29sb3I6ICM2NTc3ODY7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLmJ1c2Nhci1jb250YWluZXIgLndyYXBwZXIgLnJpZ2h0LXBhbmUgLnNlYXJjaGxpc3QgLnNlYXJjaGxpc3QtaXRlbS1jbGVhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjMWRhMGYyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5idXNjYXItY29udGFpbmVyIC53cmFwcGVyIC5yaWdodC1wYW5lIC5zZWFyY2hsaXN0IC5zZWFyY2hsaXN0LWl0ZW0tY2xlYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIzNDQ4O1xufVxuaGVhZGVyIC5maWxhLWhlYWRlciAuYnVzY2FyLWNvbnRhaW5lciAud3JhcHBlciAucmlnaHQtcGFuZSAuc2VhcmNobGlzdFZpc2libGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLnVzdWFyaW8tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjYzNjtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBjb2xvcjogI2JlYmJiYjtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLnVzdWFyaW8tY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHJpZ2h0OiAtMTUlO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA3dmg7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC51c3VhcmlvLWNvbnRhaW5lciAubmlja25hbWUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC51c3VhcmlvLWNvbnRhaW5lciAubmlja25hbWUgcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHJpZ2h0OiAtMjUlO1xuICBtYXJnaW46IDA7XG59XG5oZWFkZXIgLmZpbGEtaGVhZGVyIC5tZW51LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDI2MzY7XG4gIHBhZGRpbmc6IDF2aDtcbn1cbmhlYWRlciAuZmlsYS1oZWFkZXIgLm1lbnUtY29udGFpbmVyIHN2ZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMiU7XG4gIGxlZnQ6IDI4JTtcbiAgd2lkdGg6IDN2aDtcbiAgY29sb3I6ICNiZWJiYmI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/lahamburguesa/lahamburguesa.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/lahamburguesa/lahamburguesa.component.ts ***!
  \*********************************************************************/
/*! exports provided: LahamburguesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LahamburguesaComponent", function() { return LahamburguesaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");



class LahamburguesaComponent {
    constructor() { }
    ngOnInit() {
    }
}
LahamburguesaComponent.ɵfac = function LahamburguesaComponent_Factory(t) { return new (t || LahamburguesaComponent)(); };
LahamburguesaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LahamburguesaComponent, selectors: [["app-lahamburguesa"]], decls: 2, vars: 0, consts: [[1, "hamburguesa"]], template: function LahamburguesaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\n.hamburguesa[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7vh;\n  background-color: #2b3141;\n  width: 100%;\n  height: 92vh;\n  z-index: 100000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYWhhbWJ1cmd1ZXNhL2xhaGFtYnVyZ3Vlc2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENBLFNBQUE7QUFNQSxvQkFBQTtBQUlBO0VBQ0Usa0VBQUE7QUNORjtBRFNBO0VBQ0UsaUNBQUE7RUFDQSxxREFBQTtBQ05GO0FBcEJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJEU0s7RUNSTCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFzQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhaGFtYnVyZ3Vlc2EvbGFoYW1idXJndWVzYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsYm9keXtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6J09wZW5zIFNhbnMnLGhlbHZldGljYTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuLypmb25kb3MqL1xuJGNvbG9yLTE6ICMyMDI2MzY7XG4kY29sb3ItMjojMmIzMTQxO1xuJGNvbG9yLTM6ICMxZGQ2ZmY7XG4kY29sb3ItNDojM2Y0NzU0O1xuXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbiRsZXRyYS1jb2xvcjpyZ2IoMTkwLCAxODcsIDE4Nyk7XG4kbGV0cmEtY29sb3ItaG92ZXI6cmdiKDI0MSwgMjM4LCAyMzgpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInO1xuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuIFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJPcGVucyBTYW5zXCIsIGhlbHZldGljYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKmZvbmRvcyovXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIiwgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbi5oYW1idXJndWVzYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjMxNDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkydmg7XG4gIHotaW5kZXg6IDEwMDAwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LahamburguesaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lahamburguesa',
                templateUrl: './lahamburguesa.component.html',
                styleUrls: ['./lahamburguesa.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 4, consts: [[1, "contenedor"], [1, "icono"], ["src", "../../../assets/images/auriculares.png", "alt", ""], [1, "botones"], [1, "loginWithFacebook", 3, "routerLink"], [1, "icon"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "facebook-f", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 320 512", 1, "svg-inline--fa", "fa-facebook-f", "fa-w-10"], ["fill", "currentColor", "d", "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z", 1, ""], [1, "loginWithGoogle", 3, "routerLink"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "google", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 488 512", 1, "svg-inline--fa", "fa-google", "fa-w-16"], ["fill", "currentColor", "d", "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z", 1, ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Spoiler Five");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inicia seci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Inicia seci\u00F3n con Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Inicia seci\u00F3n con Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".contenedor[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  margin: auto;\n  position: relative;\n  margin-top: 12vh;\n}\n.contenedor[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  position: relative;\n}\n.contenedor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .contenedor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n.contenedor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 80px;\n  position: relative;\n  margin: 59px;\n}\n.contenedor[_ngcontent-%COMP%]   button.loginWithGoogle[_ngcontent-%COMP%] {\n  width: 35vh;\n  background: #df4a32;\n  color: white;\n  font-family: helvetica;\n  border: none;\n  font-size: 2vh;\n  height: 7vh;\n  position: relative;\n  margin: auto;\n  line-height: 7vh;\n  margin-top: 11vh;\n  margin-bottom: 13vh;\n}\n.contenedor[_ngcontent-%COMP%]   button.loginWithGoogle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 4vw;\n  float: left;\n}\n.contenedor[_ngcontent-%COMP%]   button.loginWithGoogle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 4vh;\n}\n.contenedor[_ngcontent-%COMP%]   button.loginWithFacebook[_ngcontent-%COMP%] {\n  width: 35vh;\n  background: #5c8bc3;\n  color: white;\n  font-family: helvetica;\n  border: none;\n  font-size: 2vh;\n  height: 7vh;\n  line-height: 7vh;\n  top: 5vh;\n  position: relative;\n  margin: auto;\n}\n.contenedor[_ngcontent-%COMP%]   button.loginWithFacebook[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 4vw;\n  float: left;\n}\n.contenedor[_ngcontent-%COMP%]   button.loginWithFacebook[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 4vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFaO0FBTUE7RUFDSSxrQkFBQTtBQUpKO0FBTUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU1BO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1BO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFLSTtFQUNFLFVBQUE7RUFFQSxXQUFBO0FBSk47QUFLTTtFQUNFLFdBQUE7QUFIUjtBQU9FO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFNSTtFQUNFLFVBQUE7RUFFQSxXQUFBO0FBTE47QUFNTTtFQUNFLFdBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbmVkb3J7XHJcbiAgXHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgIC8vIHdpZHRoOjcwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDoxMnZoO1xyXG4gICAgLmljb25ve1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuaDIsaDZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvdG9uZXN7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDU5cHg7XHJcbn1cclxuYnV0dG9uLmxvZ2luV2l0aEdvb2dsZSB7XHJcbiAgICB3aWR0aDogMzV2aDtcclxuICAgIGJhY2tncm91bmQ6ICNkZjRhMzI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6N3ZoO1xyXG4gICAgbWFyZ2luLXRvcDoxMXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTN2aDtcclxuICAgIC5pY29uIHtcclxuICAgICAgd2lkdGg6IDR2dztcclxuICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmUzZjJiO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDR2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ubG9naW5XaXRoRmFjZWJvb2sge1xyXG4gICAgd2lkdGg6IDM1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWM4YmMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBsaW5lLWhlaWdodDogN3ZoO1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIC5pY29uIHtcclxuICAgICAgd2lkdGg6IDR2dztcclxuICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmUzZjJiO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDR2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main-seccion/main-seccion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-seccion/main-seccion.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainSeccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSeccionComponent", function() { return MainSeccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MainSeccionComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainSeccionComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const playlist_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.irA(playlist_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image:url(", playlist_r1.urlImg, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, playlist_r1.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By: ", playlist_r1.creador, "");
} }
const _c0 = function () { return ["/playlist"]; };
// import Swiper styles
//import 'swiper/swiper-bundle.css';
class MainSeccionComponent {
    constructor(router) {
        this.router = router;
        this.playlists = [
            {
                id: 1,
                nombre: "musica para codear",
                urlImg: "https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
                creador: "juan perez",
            },
            {
                id: 1,
                nombre: "musica para codear",
                urlImg: "",
                creador: "juan perez",
            },
            {
                id: 1,
                nombre: "musica para codear",
                urlImg: "https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
                creador: "juan perez",
            },
            {
                id: 1,
                nombre: "musica para codear",
                urlImg: "https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
                creador: "juan perez",
            },
            {
                id: 1,
                nombre: "musica para codear",
                urlImg: "https://i1.wp.com/con2bemolesradio.com/wp-content/uploads/2017/11/ROCK.jpg?fit=350%2C401&ssl=1",
                creador: "juan perez",
            }
        ];
    }
    ngOnInit() {
        setTimeout(() => {
            let swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
                effect: 'coverflow',
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }, 200);
    }
    irA(id) {
        this.router.navigateByUrl('[playlist/' + id + ']');
        //[routerLink]="['/playlist/'{{playlist.id}}]" 
    }
}
MainSeccionComponent.ɵfac = function MainSeccionComponent_Factory(t) { return new (t || MainSeccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MainSeccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSeccionComponent, selectors: [["app-main-seccion"]], decls: 20, vars: 21, consts: [[1, "col-sm-12"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-1.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-2.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-3.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-4.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-5.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-6.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-7.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-8.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-9.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-10.jpg)", 3, "routerLink"], ["class", "swiper-slide card-playlist", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "swiper-slide", "card-playlist", 3, "click"], [1, "info"]], template: function MainSeccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Escuchados Recientemente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mis Playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainSeccionComponent_div_19_Template, 7, 7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playlists);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\nsection[_ngcontent-%COMP%] {\n  background: #3f4754;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #bebbbb;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 80vh;\n}\nsection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  width: 90%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\nsection[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  width: 18%;\n  height: 22vh;\n}\n@media screen and (max-width: 500px) {\n  section[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n    width: 50%;\n    height: 22vh;\n  }\n}\n.card-playlist[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.card-playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70%;\n  width: 100%;\n  height: 30%;\n  background-color: rgba(2, 2, 20, 0.877);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.card-playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5%;\n  right: -5px;\n  font-weight: 400;\n  color: #bebbbb;\n  padding: 0;\n  margin: 0;\n  font-size: 1em;\n}\n.card-playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n  color: #b0b4b8;\n}\n.card-playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:hover {\n  background-color: #020214;\n}\n.card-playlist[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXNlY2Npb24vbWFpbi1zZWNjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQSxTQUFBO0FBTUEsb0JBQUE7QUFJQTtFQUNFLGtFQUFBO0FDTkY7QURTQTtFQUNFLGlDQUFBO0VBQ0EscURBQUE7QUNORjtBQXBCQTtFQUNJLG1CRGFLO0VDWkwseURBQUE7RUFDQSxlQUFBO0VBQ0EsY0RhUztFQ1pULFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFzQko7QUFyQkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUF1Qk47QUFyQkk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXVCUjtBQXBCSTtFQUVJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXFCUjtBQXBCUTtFQU5KO0lBUVEsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBc0JWO0FBQ0Y7QUFsQkU7RUFFRSxrQkFBQTtBQW9CSjtBQW5CSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBcUJOO0FBcEJNO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0RsQ0s7RUNtQ0wsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBc0JSO0FBckJRO0VBQ0UsY0FBQTtBQXVCVjtBQW5CTTtFQUVFLHlCQUFBO0FBb0JSO0FBZkc7RUFFQyxzQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1zZWNjaW9uL21haW4tc2VjY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsYm9keXtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6J09wZW5zIFNhbnMnLGhlbHZldGljYTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuLypmb25kb3MqL1xuJGNvbG9yLTE6ICMyMDI2MzY7XG4kY29sb3ItMjojMmIzMTQxO1xuJGNvbG9yLTM6ICMxZGQ2ZmY7XG4kY29sb3ItNDojM2Y0NzU0O1xuXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbiRsZXRyYS1jb2xvcjpyZ2IoMTkwLCAxODcsIDE4Nyk7XG4kbGV0cmEtY29sb3ItaG92ZXI6cmdiKDI0MSwgMjM4LCAyMzgpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInO1xuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuIFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJPcGVucyBTYW5zXCIsIGhlbHZldGljYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKmZvbmRvcyovXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIiwgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjM2Y0NzU0O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNiZWJiYmI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbn1cbnNlY3Rpb24gaDQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLnN3aXBlci1jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5zZWN0aW9uIC5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxOCU7XG4gIGhlaWdodDogMjJ2aDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIHNlY3Rpb24gLnN3aXBlci1zbGlkZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDIydmg7XG4gIH1cbn1cblxuLmNhcmQtcGxheWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2FyZC1wbGF5bGlzdCAuaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAyLCAyMCwgMC44NzcpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uY2FyZC1wbGF5bGlzdCAuaW5mbyBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUlO1xuICByaWdodDogLTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNiZWJiYmI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uY2FyZC1wbGF5bGlzdCAuaW5mbyBwIC5leHRyYSB7XG4gIGNvbG9yOiAjYjBiNGI4O1xufVxuLmNhcmQtcGxheWxpc3QgLmluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjE0O1xufVxuLmNhcmQtcGxheWxpc3Q6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSeccionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-seccion',
                templateUrl: './main-seccion.component.html',
                styleUrls: ['./main-seccion.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/playlist/playlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.ts ***!
  \***********************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _popups_question_question_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popups/question/question.component */ "./src/app/components/popups/question/question.component.ts");
/* harmony import */ var _popups_qualification_playlist_qualification_playlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popups/qualification-playlist/qualification-playlist.component */ "./src/app/components/popups/qualification-playlist/qualification-playlist.component.ts");
/* harmony import */ var _popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popups/qualification/qualification.component */ "./src/app/components/popups/qualification/qualification.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PlaylistComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistComponent_tr_34_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.seleccionarTema(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistComponent_tr_34_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.calificarCancion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tema_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tema_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tema_r1.artista);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tema_r1.album);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tema_r1.promedio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tema_r1.duracion);
} }
class PlaylistComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.temas = [
            {
                titulo: "El Final Es En Donde Parti",
                artista: "La Renga",
                album: "Despedazado Por Mil Partes",
                promedio: 3.5,
                duracion: "3:30",
            },
            {
                titulo: "El Final Es En Donde Parti",
                artista: "La Renga",
                album: "Despedazado Por Mil Partes",
                duracion: "3:30",
                promedio: 4.5,
            },
            {
                titulo: "El Final Es En Donde Parti",
                artista: "La Renga",
                album: "Despedazado Por Mil Partes",
                duracion: "3:30",
                promedio: 3.1,
            },
            {
                titulo: "El Final Es En Donde Parti",
                artista: "La Renga",
                album: "Despedazado Por Mil Partes",
                duracion: "3:30",
                promedio: 4.2,
            }
        ];
    }
    ngOnInit() {
    }
    eliminarPlaylist() {
        const modalRef = this.modalService.open(_popups_question_question_component__WEBPACK_IMPORTED_MODULE_1__["QuestionComponent"], { windowClass: 'modal-holder', size: 'md', centered: true });
    }
    calificarPlaylist() {
        const modalRef = this.modalService.open(_popups_qualification_playlist_qualification_playlist_component__WEBPACK_IMPORTED_MODULE_2__["QualificationPlaylistComponent"], { windowClass: 'modal-holder', size: 'md', centered: true });
    }
    calificarCancion() {
        const modalRef = this.modalService.open(_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_3__["QualificationComponent"], { windowClass: 'modal-holder', size: 'md', centered: true });
    }
    seleccionarTema(i) {
        let temass = document.getElementsByClassName("tema-fila");
        console.log(i);
        for (let index = 0; index < temass.length; index++) {
            temass[index].className = "tema-fila";
            if (temass[index].getElementsByTagName('TH')[1].getElementsByTagName('DIV') != null) {
                let baxrr = temass[index].getElementsByTagName('TH')[1].getElementsByTagName('DIV');
                baxrr[0].className = "";
            }
        }
        temass[i].className = "tema-fila selected ";
        let barr = temass[i].getElementsByTagName('TH')[1].getElementsByTagName('DIV');
        barr[0].className = "barritas";
    }
}
PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) { return new (t || PlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistComponent, selectors: [["app-playlist"]], decls: 35, vars: 1, consts: [[1, "back"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "arrow-left", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-arrow-left", "fa-w-14"], ["fill", "currentColor", "d", "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z", 1, ""], [1, "Playlist"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-1.jpg)", "position", "absolute", "top", "18vh", "justify-content", "center", "left", "22vw"], [1, "iconPlay"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "play-circle", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-play-circle", "fa-w-16"], ["fill", "currentColor", "d", "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z", 1, ""], [1, "iconMG"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-heart", "fa-w-16", 3, "click"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z", 1, ""], [1, "iconMenu"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "ellipsis-h", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-ellipsis-h", "fa-w-16", 3, "click"], ["fill", "currentColor", "d", "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z", 1, ""], [1, "table"], [1, "thead-dark"], [1, "encabezado"], ["scope", "col"], [1, "fas", "fa-heart"], ["scope", "col ", 1, "d-none", "d-xl-block"], [1, "fas", "fa-star"], ["scope", "col", 1, "d-none", "d-xl-block"], ["class", "tema-fila", 3, "click", 4, "ngFor", "ngForOf"], [1, "tema-fila", 3, "click"], ["scope", "row"], ["scope", "row", 3, "click"], [1, "far", "fa-heart"], [1, "d-none", "d-xl-block"]], template: function PlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NombrePlayList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistComponent_Template__svg_svg_click_12_listener() { return ctx.calificarPlaylist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistComponent_Template__svg_svg_click_15_listener() { return ctx.eliminarPlaylist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Titulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Artista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Album");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Duraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PlaylistComponent_tr_34_Template, 15, 5, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\nsection[_ngcontent-%COMP%] {\n  background: #3f4754;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #bebbbb;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 80vh;\n}\nsection[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  float: left;\n  width: 7vh;\n  position: relative;\n  top: 3%;\n  left: 3%;\n}\nsection[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n    left: 7%;\n  }\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: 10vh;\n}\nsection[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  width: 15%;\n  height: 22vh;\n}\n@media screen and (max-width: 500px) {\n  section[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n    width: 39%;\n    height: 22vh;\n  }\n}\nsection[_ngcontent-%COMP%]   .iconPlay[_ngcontent-%COMP%] {\n  width: 5vh;\n  position: relative;\n  margin: auto;\n  top: 68%;\n  left: 72%;\n}\nsection[_ngcontent-%COMP%]   .iconPlay[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\nsection[_ngcontent-%COMP%]   .iconMG[_ngcontent-%COMP%] {\n  width: 8vh;\n  position: relative;\n  margin: auto;\n  top: 46%;\n  left: 102%;\n}\nsection[_ngcontent-%COMP%]   .iconMG[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\nsection[_ngcontent-%COMP%]   .iconMenu[_ngcontent-%COMP%] {\n  width: 8vh;\n  position: relative;\n  margin: auto;\n  top: 23%;\n  left: 130%;\n}\nsection[_ngcontent-%COMP%]   .iconMenu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 10%;\n  margin-top: 34vh;\n  width: 80%;\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    margin: 2%;\n    margin-top: 34vh;\n    left: 2%;\n    width: 92%;\n  }\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .encabezado[_ngcontent-%COMP%] {\n  color: #f1eeee;\n  background: #2b3141 !important;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .encabezado[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .encabezado[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-style: none;\n  background: #2b3141 !important;\n  padding: 3px;\n  margin: 0;\n  height: 1vh !important;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .tema-fila[_ngcontent-%COMP%] {\n  color: #bebbbb;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .tema-fila[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .tema-fila[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 3px;\n  margin: 0;\n  height: 1vh !important;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .tema-fila[_ngcontent-%COMP%]:hover {\n  color: #f1eeee;\n  background: #2b3141 !important;\n}\n.selected[_ngcontent-%COMP%] {\n  background: #202636 !important;\n}\n.barritas[_ngcontent-%COMP%], .barritas[_ngcontent-%COMP%]:after, .barritas[_ngcontent-%COMP%]:before {\n  position: relative;\n  width: 10px;\n  height: 2px;\n  background: #29d9c238;\n  transform: translate(-11px, 15px);\n  box-shadow: 0 -30px 0 #29d9c238, 0 -6px 0 #29d9c238, 0 -9px 0 #29d9c238, 0 -12px 0 #29d9c238;\n  animation-name: bar1;\n  animation-duration: 0.3s;\n  animation-direction: alternate;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n.barritas[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  transform: translate(11px, 0);\n  box-shadow: 0 -3px 0 #29d9c238;\n  animation-name: bar2;\n}\n.barritas[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  transform: translate(22px, 0);\n  box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 #29d9c238, 0 -9px 0 #29d9c238;\n  animation-name: bar3;\n}\n@keyframes bar1 {\n  0%, 19.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118), 0 -9px 0 rgba(56, 206, 189, 0.2201568627), 0 -12px 0 rgba(255, 59, 118, 0.2274509804);\n  }\n  20%, 39.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118), 0 -9px 0 rgba(56, 206, 189, 0.2201568627);\n  }\n  40%, 59.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118);\n  }\n  60%, 79.9% {\n    box-shadow: 0 -3px 0 #29d9c238;\n  }\n  80%, 100% {\n    box-shadow: none;\n  }\n}\n@keyframes bar2 {\n  0%, 19.9% {\n    box-shadow: none;\n  }\n  20%, 39.9% {\n    box-shadow: 0 -3px 0 #29d9c238;\n  }\n  40%, 59.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118);\n  }\n  60%, 79.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118), 0 -9px 0 rgba(202, 98, 137, 0.2254901961), 0 -12px 0 rgba(255, 59, 118, 0.2274509804);\n  }\n  80%, 100% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118), 0 -9px 0 rgba(202, 98, 137, 0.2254901961);\n  }\n}\n@keyframes bar3 {\n  0%, 19.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118);\n  }\n  20%, 39.9% {\n    box-shadow: 0 -3px 0 #29d9c238;\n  }\n  40%, 59.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118);\n  }\n  60%, 79.9% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118), 0 -9px 0 rgba(202, 98, 137, 0.2254901961);\n  }\n  80%, 100% {\n    box-shadow: 0 -3px 0 #29d9c238, 0 -6px 0 rgba(149, 137, 156, 0.2235294118), 0 -9px 0 rgba(202, 98, 137, 0.2254901961), 0 -12px 0 rgba(255, 59, 118, 0.2274509804);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0EsU0FBQTtBQU1BLG9CQUFBO0FBSUE7RUFDRSxrRUFBQTtBQ05GO0FEU0E7RUFDRSxpQ0FBQTtFQUNBLHFEQUFBO0FDTkY7QUFwQkE7RUFDUSxtQkRhQztFQ1pELHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGNEYUs7RUNaTCxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBc0JSO0FBckJJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBdUJSO0FBdEJRO0VBQ0ksV0FBQTtBQXdCWjtBQXRCUTtFQVRKO0lBVVEsUUFBQTtFQXlCVjtBQUNGO0FBdEJRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUF3Qlo7QUF0QlE7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXdCWjtBQXZCWTtFQU5KO0lBUVEsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBeUJkO0FBQ0Y7QUF2QlE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUF5Qlo7QUF4Qlk7RUFDSSxXQUFBO0FBMEJoQjtBQXZCUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQXlCWjtBQXZCWTtFQUNJLFdBQUE7QUF5QmhCO0FBdEJRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBd0JaO0FBdEJZO0VBQ0ksV0FBQTtBQXdCaEI7QUFwQkk7RUFFSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLFVBQUE7QUFtQlI7QUFsQlE7RUFSSjtJQVNRLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VBcUJWO0FBQ0Y7QUFuQlE7RUFDSSxjRHpFTztFQzBFUCw4QkFBQTtBQXFCWjtBQW5CWTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBcUJoQjtBQWxCUTtFQUVJLGNEdkZDO0FDMEdiO0FBbEJZO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQW9CaEI7QUFsQlk7RUFDSSxjRDdGRztFQzhGSCw4QkFBQTtBQW9CaEI7QUFOQTtFQUdRLDhCQUFBO0FBT1I7QUFLQTtFQUNFLGtCQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFaVTtFQWNWLGlDQUFBO0VBQ0EsNEZBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FBTEY7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFDQSxvQkFBQTtBQUxKO0FBT0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUVBLHNFQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVVBO0VBQ0U7SUFFRSxpS0FBQTtFQVJGO0VBVUE7SUFFRSxxSEFBQTtFQVRGO0VBV0E7SUFFRSwwRUFBQTtFQVZGO0VBWUE7SUFFRSw4QkFBQTtFQVhGO0VBYUE7SUFFRSxnQkFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFO0lBRUUsZ0JBQUE7RUFkRjtFQWdCQTtJQUVFLDhCQUFBO0VBZkY7RUFpQkE7SUFFRSwwRUFBQTtFQWhCRjtFQWtCQTtJQUVFLGlLQUFBO0VBakJGO0VBbUJBO0lBRUUscUhBQUE7RUFsQkY7QUFDRjtBQXFCQTtFQUNFO0lBRUUsMEVBQUE7RUFwQkY7RUFzQkE7SUFFRSw4QkFBQTtFQXJCRjtFQXVCQTtJQUVFLDBFQUFBO0VBdEJGO0VBd0JBO0lBRUUscUhBQUE7RUF2QkY7RUF5QkE7SUFFRSxpS0FBQTtFQXhCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsYm9keXtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6J09wZW5zIFNhbnMnLGhlbHZldGljYTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuLypmb25kb3MqL1xuJGNvbG9yLTE6ICMyMDI2MzY7XG4kY29sb3ItMjojMmIzMTQxO1xuJGNvbG9yLTM6ICMxZGQ2ZmY7XG4kY29sb3ItNDojM2Y0NzU0O1xuXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbiRsZXRyYS1jb2xvcjpyZ2IoMTkwLCAxODcsIDE4Nyk7XG4kbGV0cmEtY29sb3ItaG92ZXI6cmdiKDI0MSwgMjM4LCAyMzgpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInO1xuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuIFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJPcGVucyBTYW5zXCIsIGhlbHZldGljYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKmZvbmRvcyovXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIiwgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjM2Y0NzU0O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNiZWJiYmI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbn1cbnNlY3Rpb24gLmJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDd2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMlO1xuICBsZWZ0OiAzJTtcbn1cbnNlY3Rpb24gLmJhY2sgc3ZnIHtcbiAgaGVpZ2h0OiA1dmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uIC5iYWNrIHtcbiAgICBsZWZ0OiA3JTtcbiAgfVxufVxuc2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwdmg7XG59XG5zZWN0aW9uIC5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMnZoO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgc2VjdGlvbiAuc3dpcGVyLXNsaWRlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMzklO1xuICAgIGhlaWdodDogMjJ2aDtcbiAgfVxufVxuc2VjdGlvbiAuaWNvblBsYXkge1xuICB3aWR0aDogNXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA2OCU7XG4gIGxlZnQ6IDcyJTtcbn1cbnNlY3Rpb24gLmljb25QbGF5IHN2ZyB7XG4gIGhlaWdodDogNXZoO1xufVxuc2VjdGlvbiAuaWNvbk1HIHtcbiAgd2lkdGg6IDh2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogNDYlO1xuICBsZWZ0OiAxMDIlO1xufVxuc2VjdGlvbiAuaWNvbk1HIHN2ZyB7XG4gIGhlaWdodDogNXZoO1xufVxuc2VjdGlvbiAuaWNvbk1lbnUge1xuICB3aWR0aDogOHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAyMyU7XG4gIGxlZnQ6IDEzMCU7XG59XG5zZWN0aW9uIC5pY29uTWVudSBzdmcge1xuICBoZWlnaHQ6IDV2aDtcbn1cbnNlY3Rpb24gdGFibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMTAlO1xuICBtYXJnaW4tdG9wOiAzNHZoO1xuICB3aWR0aDogODAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc2VjdGlvbiB0YWJsZSB7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBtYXJnaW4tdG9wOiAzNHZoO1xuICAgIGxlZnQ6IDIlO1xuICAgIHdpZHRoOiA5MiU7XG4gIH1cbn1cbnNlY3Rpb24gdGFibGUgLmVuY2FiZXphZG8ge1xuICBjb2xvcjogI2YxZWVlZTtcbiAgYmFja2dyb3VuZDogIzJiMzE0MSAhaW1wb3J0YW50O1xufVxuc2VjdGlvbiB0YWJsZSAuZW5jYWJlemFkbyB0aCwgc2VjdGlvbiB0YWJsZSAuZW5jYWJlemFkbyB0ZCB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzJiMzE0MSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxdmggIWltcG9ydGFudDtcbn1cbnNlY3Rpb24gdGFibGUgLnRlbWEtZmlsYSB7XG4gIGNvbG9yOiAjYmViYmJiO1xufVxuc2VjdGlvbiB0YWJsZSAudGVtYS1maWxhIHRoLCBzZWN0aW9uIHRhYmxlIC50ZW1hLWZpbGEgdGQge1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxdmggIWltcG9ydGFudDtcbn1cbnNlY3Rpb24gdGFibGUgLnRlbWEtZmlsYTpob3ZlciB7XG4gIGNvbG9yOiAjZjFlZWVlO1xuICBiYWNrZ3JvdW5kOiAjMmIzMTQxICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMyMDI2MzYgIWltcG9ydGFudDtcbn1cblxuLmJhcnJpdGFzLCAuYmFycml0YXM6YWZ0ZXIsIC5iYXJyaXRhczpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzI5ZDljMjM4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTFweCwgMTVweCk7XG4gIGJveC1zaGFkb3c6IDAgLTMwcHggMCAjMjlkOWMyMzgsIDAgLTZweCAwICMyOWQ5YzIzOCwgMCAtOXB4IDAgIzI5ZDljMjM4LCAwIC0xMnB4IDAgIzI5ZDljMjM4O1xuICBhbmltYXRpb24tbmFtZTogYmFyMTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uYmFycml0YXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXB4LCAwKTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDAgIzI5ZDljMjM4O1xuICBhbmltYXRpb24tbmFtZTogYmFyMjtcbn1cbi5iYXJyaXRhczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjJweCwgMCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzOCwgMCAtNnB4IDAgIzI5ZDljMjM4LCAwIC05cHggMCAjMjlkOWMyMzg7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYXIzO1xufVxuXG5Aa2V5ZnJhbWVzIGJhcjEge1xuICAwJSwgMTkuOSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzOCwgMCAtNnB4IDAgcmdiYSgxNDksIDEzNywgMTU2LCAwLjIyMzUyOTQxMTgpLCAwIC05cHggMCByZ2JhKDU2LCAyMDYsIDE4OSwgMC4yMjAxNTY4NjI3KSwgMCAtMTJweCAwIHJnYmEoMjU1LCA1OSwgMTE4LCAwLjIyNzQ1MDk4MDQpO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzOCwgMCAtNnB4IDAgcmdiYSgxNDksIDEzNywgMTU2LCAwLjIyMzUyOTQxMTgpLCAwIC05cHggMCByZ2JhKDU2LCAyMDYsIDE4OSwgMC4yMjAxNTY4NjI3KTtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBib3gtc2hhZG93OiAwIC0zcHggMCAjMjlkOWMyMzgsIDAgLTZweCAwIHJnYmEoMTQ5LCAxMzcsIDE1NiwgMC4yMjM1Mjk0MTE4KTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBib3gtc2hhZG93OiAwIC0zcHggMCAjMjlkOWMyMzg7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhcjIge1xuICAwJSwgMTkuOSUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMjAlLCAzOS45JSB7XG4gICAgYm94LXNoYWRvdzogMCAtM3B4IDAgIzI5ZDljMjM4O1xuICB9XG4gIDQwJSwgNTkuOSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzOCwgMCAtNnB4IDAgcmdiYSgxNDksIDEzNywgMTU2LCAwLjIyMzUyOTQxMTgpO1xuICB9XG4gIDYwJSwgNzkuOSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzOCwgMCAtNnB4IDAgcmdiYSgxNDksIDEzNywgMTU2LCAwLjIyMzUyOTQxMTgpLCAwIC05cHggMCByZ2JhKDIwMiwgOTgsIDEzNywgMC4yMjU0OTAxOTYxKSwgMCAtMTJweCAwIHJnYmEoMjU1LCA1OSwgMTE4LCAwLjIyNzQ1MDk4MDQpO1xuICB9XG4gIDgwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtM3B4IDAgIzI5ZDljMjM4LCAwIC02cHggMCByZ2JhKDE0OSwgMTM3LCAxNTYsIDAuMjIzNTI5NDExOCksIDAgLTlweCAwIHJnYmEoMjAyLCA5OCwgMTM3LCAwLjIyNTQ5MDE5NjEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhcjMge1xuICAwJSwgMTkuOSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzOCwgMCAtNnB4IDAgcmdiYSgxNDksIDEzNywgMTU2LCAwLjIyMzUyOTQxMTgpO1xuICB9XG4gIDIwJSwgMzkuOSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTNweCAwICMyOWQ5YzIzODtcbiAgfVxuICA0MCUsIDU5LjklIHtcbiAgICBib3gtc2hhZG93OiAwIC0zcHggMCAjMjlkOWMyMzgsIDAgLTZweCAwIHJnYmEoMTQ5LCAxMzcsIDE1NiwgMC4yMjM1Mjk0MTE4KTtcbiAgfVxuICA2MCUsIDc5LjklIHtcbiAgICBib3gtc2hhZG93OiAwIC0zcHggMCAjMjlkOWMyMzgsIDAgLTZweCAwIHJnYmEoMTQ5LCAxMzcsIDE1NiwgMC4yMjM1Mjk0MTE4KSwgMCAtOXB4IDAgcmdiYSgyMDIsIDk4LCAxMzcsIDAuMjI1NDkwMTk2MSk7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0zcHggMCAjMjlkOWMyMzgsIDAgLTZweCAwIHJnYmEoMTQ5LCAxMzcsIDE1NiwgMC4yMjM1Mjk0MTE4KSwgMCAtOXB4IDAgcmdiYSgyMDIsIDk4LCAxMzcsIDAuMjI1NDkwMTk2MSksIDAgLTEycHggMCByZ2JhKDI1NSwgNTksIDExOCwgMC4yMjc0NTA5ODA0KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist',
                templateUrl: './playlist.component.html',
                styleUrls: ['./playlist.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/popups/price-table/price-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/popups/price-table/price-table.component.ts ***!
  \************************************************************************/
/*! exports provided: PriceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTableComponent", function() { return PriceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class PriceTableComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    closePopUp() {
        this.activeModal.close();
    }
}
PriceTableComponent.ɵfac = function PriceTableComponent_Factory(t) { return new (t || PriceTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
PriceTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PriceTableComponent, selectors: [["app-price-table"]], decls: 49, vars: 0, consts: [[1, "overlay"], [1, "pop-up"], [1, "fondoPopUp"], [1, "btnClose", 3, "click"], [1, "far", "fa-check-square"], [1, "pricing"], [1, "plan"], [1, "price"], [1, "features"]], template: function PriceTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceTableComponent_Template_div_click_3_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Beneficios de ser Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chau publicidades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Mismo nivel de volumen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sonido en alta resoluci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Salto de canciones ilimitado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tipos de planes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1 cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "$140 x mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mejor\u00E1 tu plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ambo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2 cuentas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "$180 x mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mejor\u00E1 tu plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "4 cuentas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "$240 x mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Mejor\u00E1 tu plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");\n.btnClose[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  color: white;\n  font-weight: bolder;\n  font-size: large;\n  margin-right: 4px;\n}\n.icono[_ngcontent-%COMP%] {\n  width: 2vw;\n  position: relative;\n  left: 1vw;\n}\n.icono[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n.pop-up[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  padding: 2vh;\n}\n.fondoPopUp[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 100%;\n  background-color: #2da744;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #dff9fb;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.pricing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 2.5rem;\n  margin: 12px;\n  border-radius: 5px;\n  text-align: center;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 12px;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 30px;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   ul.features[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: left;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   ul.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   ul.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   ul.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-check-circle[_ngcontent-%COMP%] {\n  color: #6ab04c;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   ul.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-times-circle[_ngcontent-%COMP%] {\n  color: #eb4d4b;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  padding: 12px 35px;\n  margin-top: 1rem;\n  background-color: #6ab04c;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n}\n.pricing[_ngcontent-%COMP%]   .plan.popular[_ngcontent-%COMP%] {\n  border: 2px solid #6ab04c;\n  position: relative;\n  transform: scale(1.08);\n}\n.pricing[_ngcontent-%COMP%]   .plan.popular[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #6ab04c;\n  color: #fff;\n  padding: 4px 20px;\n  font-size: 18px;\n  border-radius: 5px;\n}\n.pricing[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 7px 67px -28px rgba(0, 0, 0, 0.37);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMvcHJpY2UtdGFibGUvcHJpY2UtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NRLG1GQUFBO0FBbkNSO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7QUFBRjtBQUNJO0VBQ0UsV0FBQTtBQUNOO0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGO0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7QUFGRjtBQUlBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRUY7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7QUFBSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUVJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUFOO0FBQ007RUFDRSxXQUFBO0FBQ1I7QUFBUTtFQUNFLGlCQUFBO0FBRVY7QUFBUTtFQUNFLGNBQUE7QUFFVjtBQUFRO0VBQ0UsY0FBQTtBQUVWO0FBR0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRE47QUFJSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUZOO0FBSU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZSO0FBTUk7RUFDRSxrREFBQTtBQUpOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMvcHJpY2UtdGFibGUvcHJpY2UtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bkNsb3Nle1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbi1yaWdodDo0cHg7XHJcbn1cclxuXHJcbi5pY29ub3tcclxuICB3aWR0aDogMnZ3O1xyXG4gIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JlM2YyYjtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBsZWZ0OjF2dztcclxuICAgIHN2ZyB7XHJcbiAgICAgIGhlaWdodDogMnZoO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4ucG9wLXVwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcblxyXG4uYm90b257XHJcbiAgcGFkZGluZzogMnZoO1xyXG59XHJcbi5mb25kb1BvcFVwe1xyXG4gIGhlaWdodDogMjJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyZGE3NDQ7XHJcblxyXG59XHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8mZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOWZiO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuLnByaWNpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAucGxhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMi41cmVtO1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJpY2Uge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwuZmVhdHVyZXMge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICAuZmFzIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtY2hlY2stY2lyY2xlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNmFiMDRjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtdGltZXMtY2lyY2xlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZWI0ZDRiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMzVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYjA0YztcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wb3B1bGFyIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzZhYjA0YztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFiMDRjO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDdweCA2N3B4IC0yOHB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-price-table',
                templateUrl: './price-table.component.html',
                styleUrls: ['./price-table.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/popups/qualification-playlist/qualification-playlist.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/popups/qualification-playlist/qualification-playlist.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: QualificationPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationPlaylistComponent", function() { return QualificationPlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class QualificationPlaylistComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    closePopUp() {
        this.activeModal.close();
    }
}
QualificationPlaylistComponent.ɵfac = function QualificationPlaylistComponent_Factory(t) { return new (t || QualificationPlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
QualificationPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QualificationPlaylistComponent, selectors: [["app-qualification-playlist"]], decls: 27, vars: 0, consts: [[1, "overlay"], [1, "pop-up"], [1, "fondoPopUp"], [1, "btnClose", 3, "click"], [1, "container"], [1, "feedback"], [1, "rating"], ["type", "radio", "name", "rating", "id", "rating-5"], ["for", "rating-5"], ["type", "radio", "name", "rating", "id", "rating-4"], ["for", "rating-4"], ["type", "radio", "name", "rating", "id", "rating-3"], ["for", "rating-3"], ["type", "radio", "name", "rating", "id", "rating-2"], ["for", "rating-2"], ["type", "radio", "name", "rating", "id", "rating-1"], ["for", "rating-1"], [1, "emoji-wrapper"], [1, "comentario"], ["name", "", "id", "", "cols", "50", "placeholder", "Ingrese un comentario...", "rows", "5"], [3, "click"]], template: function QualificationPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QualificationPlaylistComponent_Template_div_click_3_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Calific\u00E1 la playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QualificationPlaylistComponent_Template_button_click_25_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\n.pop-up[_ngcontent-%COMP%] {\n  background-color: #202636;\n}\nh3[_ngcontent-%COMP%] {\n  color: #bebbbb;\n}\n.btnClose[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  color: white;\n  font-weight: bolder;\n  font-size: large;\n  margin-right: 4px;\n}\n.icono[_ngcontent-%COMP%] {\n  width: 2vw;\n  position: relative;\n  left: 1vw;\n}\n.icono[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n.pop-up[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  padding: 2vh;\n}\n.fondoPopUp[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 100%;\n  background-color: #1dd6ff;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 35vh;\n  background: #1dd6ff;\n  color: white;\n  font-family: helvetica;\n  border: none;\n  font-size: 2vh;\n  height: 7vh;\n  line-height: 7vh;\n  bottom: 7vh;\n  position: relative;\n  margin: auto;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 50vh;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  flex-direction: row-reverse;\n  height: 150px;\n  position: relative;\n  bottom: 11vh;\n}\n.rating-0[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 63px;\n  height: 63px;\n  margin-top: auto;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  transition: 0.3s;\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n.emoji-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.emoji-wrapper[_ngcontent-%COMP%]:before, .emoji-wrapper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n.emoji-wrapper[_ngcontent-%COMP%]:before {\n  top: 0;\n  background: linear-gradient(to bottom, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n.emoji-wrapper[_ngcontent-%COMP%]:after {\n  bottom: 0;\n  background: linear-gradient(to top, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n.emoji[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s;\n}\n.emoji[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n#rating-1[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-100px);\n}\n#rating-2[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-200px);\n}\n#rating-3[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-300px);\n}\n#rating-4[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-400px);\n}\n#rating-5[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-500px);\n}\n.comentario[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 12vh;\n}\n.comentario[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: #bebbbb;\n}\n.feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMvcXVhbGlmaWNhdGlvbi1wbGF5bGlzdC9xdWFsaWZpY2F0aW9uLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQSxTQUFBO0FBTUEsb0JBQUE7QUFJQTtFQUNFLGtFQUFBO0FDTkY7QURTQTtFQUNFLGlDQUFBO0VBQ0EscURBQUE7QUNORjtBQXBCQTtFQUNBLHlCRFVVO0FDWVY7QUFwQkE7RUFDSSxjRGFTO0FDVWI7QUFyQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF3Qko7QUFyQkU7RUFDRSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0FBdUJKO0FBdEJNO0VBQ0UsV0FBQTtBQXdCUjtBQXJCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF3Qko7QUFwQkU7RUFDRSxZQUFBO0FBdUJKO0FBckJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR4Qk07QUNnRFY7QUFyQkU7RUFDRSxXQUFBO0VBQ0EsbUJEN0JNO0VDOEJOLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXdCSjtBQXRCRTtFQUFJLHNCQUFBO0FBMEJOO0FBeEJBO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUEwQkY7QUF2QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUEwQkY7QUF2QkE7RUFDRSx1QkFBQTtBQTBCRjtBQXZCQTtFQUNFLGFBQUE7QUEwQkY7QUF2QkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBMEJGO0FBdkJBOztFQUVFLHFpQkFBQTtBQTBCRjtBQXRCQTs7RUFFRSxxaUJBQUE7QUF5QkY7QUF0QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUF5QkY7QUF0QkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQXlCRjtBQXRCQTtFQUNFLE1BQUE7RUFDQSx3RkFBQTtBQXlCRjtBQXRCQTtFQUNFLFNBQUE7RUFDQSxxRkFBQTtBQXlCRjtBQXRCQTtFQUVFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXdCRjtBQXJCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF3QkY7QUFyQkE7RUFBOEMsNkJBQUE7QUF5QjlDO0FBeEJBO0VBQThDLDZCQUFBO0FBNEI5QztBQTNCQTtFQUE4Qyw2QkFBQTtBQStCOUM7QUE5QkE7RUFBOEMsNkJBQUE7QUFrQzlDO0FBakNBO0VBQThDLDZCQUFBO0FBcUM5QztBQW5DQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQXNDSjtBQXJDSTtFQUNJLHlCRC9JSztBQ3NMYjtBQXBDQTtFQUdFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFxQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcHVwcy9xdWFsaWZpY2F0aW9uLXBsYXlsaXN0L3F1YWxpZmljYXRpb24tcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLGJvZHl7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OidPcGVucyBTYW5zJyxoZWx2ZXRpY2E7ICBcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbi8qZm9uZG9zKi9cbiRjb2xvci0xOiAjMjAyNjM2O1xuJGNvbG9yLTI6IzJiMzE0MTtcbiRjb2xvci0zOiAjMWRkNmZmO1xuJGNvbG9yLTQ6IzNmNDc1NDtcblxuLyp0aXBvZ3JhZmlhcyBjb2xvciovXG4kbGV0cmEtY29sb3I6cmdiKDE5MCwgMTg3LCAxODcpO1xuJGxldHJhLWNvbG9yLWhvdmVyOnJnYigyNDEsIDIzOCwgMjM4KTtcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNLUi1SZWd1bGFyJywgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNLUi1SZWd1bGFyJztcbiAgc3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbiBcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbnMgU2Fuc1wiLCBoZWx2ZXRpY2E7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLypmb25kb3MqL1xuLyp0aXBvZ3JhZmlhcyBjb2xvciovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNLUi1SZWd1bGFyXCIsIEZhbGxiYWNrLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTm90b19TYW5zX0tSL05vdG9TYW5zS1ItUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG4ucG9wLXVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjYzNjtcbn1cblxuaDMge1xuICBjb2xvcjogI2JlYmJiYjtcbn1cblxuLmJ0bkNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5pY29ubyB7XG4gIHdpZHRoOiAydnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMXZ3O1xufVxuLmljb25vIHN2ZyB7XG4gIGhlaWdodDogMnZoO1xufVxuXG4ucG9wLXVwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm90b24ge1xuICBwYWRkaW5nOiAydmg7XG59XG5cbi5mb25kb1BvcFVwIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkZDZmZjtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDM1dmg7XG4gIGJhY2tncm91bmQ6ICMxZGQ2ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDJ2aDtcbiAgaGVpZ2h0OiA3dmg7XG4gIGxpbmUtaGVpZ2h0OiA3dmg7XG4gIGJvdHRvbTogN3ZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogNTB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTF2aDtcbn1cblxuLnJhdGluZy0wIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbi5yYXRpbmcgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYXRpbmcgPiBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDYzcHg7XG4gIGhlaWdodDogNjNweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyNi43MjknIGhlaWdodD0nMTI2LjczJyUzZSUzY3BhdGggZmlsbD0nJTIzZTNlM2UzJyBkPSdNMTIxLjIxNSA0NC4yMTJsLTM0Ljg5OS0zLjNjLTIuMi0uMi00LjEwMS0xLjYtNS0zLjdsLTEyLjUtMzAuM2MtMi01LTkuMTAxLTUtMTEuMTAxIDBsLTEyLjQgMzAuM2MtLjggMi4xLTIuOCAzLjUtNSAzLjdsLTM0LjkgMy4zYy01LjIuNS03LjMgNy0zLjQgMTAuNWwyNi4zIDIzLjFjMS43IDEuNSAyLjQgMy43IDEuOSA1LjlsLTcuOSAzMi4zOTljLTEuMiA1LjEwMSA0LjMgOS4zIDguOSA2LjYwMWwyOS4xLTE3LjEwMWMxLjktMS4xIDQuMi0xLjEgNi4xIDBsMjkuMTAxIDE3LjEwMWM0LjYgMi42OTkgMTAuMS0xLjQgOC44OTktNi42MDFsLTcuOC0zMi4zOTljLS41LTIuMi4yLTQuNCAxLjktNS45bDI2LjMtMjMuMWMzLjgtMy41IDEuNi0xMC0zLjYtMTAuNXonLyUzZSUzYy9zdmclM2VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB+IGxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyNi43MjknIGhlaWdodD0nMTI2LjczJyUzZSUzY3BhdGggZmlsbD0nJTIzZmNkOTNhJyBkPSdNMTIxLjIxNSA0NC4yMTJsLTM0Ljg5OS0zLjNjLTIuMi0uMi00LjEwMS0xLjYtNS0zLjdsLTEyLjUtMzAuM2MtMi01LTkuMTAxLTUtMTEuMTAxIDBsLTEyLjQgMzAuM2MtLjggMi4xLTIuOCAzLjUtNSAzLjdsLTM0LjkgMy4zYy01LjIuNS03LjMgNy0zLjQgMTAuNWwyNi4zIDIzLjFjMS43IDEuNSAyLjQgMy43IDEuOSA1LjlsLTcuOSAzMi4zOTljLTEuMiA1LjEwMSA0LjMgOS4zIDguOSA2LjYwMWwyOS4xLTE3LjEwMWMxLjktMS4xIDQuMi0xLjEgNi4xIDBsMjkuMTAxIDE3LjEwMWM0LjYgMi42OTkgMTAuMS0xLjQgOC44OTktNi42MDFsLTcuOC0zMi4zOTljLS41LTIuMi4yLTQuNCAxLjktNS45bDI2LjMtMjMuMWMzLjgtMy41IDEuNi0xMC0zLjYtMTAuNXonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5yYXRpbmcgPiBpbnB1dDpub3QoOmNoZWNrZWQpIH4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nID4gaW5wdXQ6bm90KDpjaGVja2VkKSB+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNkOGIxMWUnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmVtb2ppLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmVtb2ppLXdyYXBwZXI6YmVmb3JlLFxuLmVtb2ppLXdyYXBwZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5lbW9qaS13cmFwcGVyOmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMCUsIHdoaXRlIDM1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbn1cblxuLmVtb2ppLXdyYXBwZXI6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHdoaXRlIDAlLCB3aGl0ZSAzNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG59XG5cbi5lbW9qaSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5lbW9qaSA+IHN2ZyB7XG4gIG1hcmdpbjogMTVweCAwO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuI3JhdGluZy0xOmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xufVxuXG4jcmF0aW5nLTI6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XG59XG5cbiNyYXRpbmctMzpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcbn1cblxuI3JhdGluZy00OmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAwcHgpO1xufVxuXG4jcmF0aW5nLTU6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XG59XG5cbi5jb21lbnRhcmlvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEydmg7XG59XG4uY29tZW50YXJpbyB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJiYmI7XG59XG5cbi5mZWVkYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QualificationPlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qualification-playlist',
                templateUrl: './qualification-playlist.component.html',
                styleUrls: ['./qualification-playlist.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/popups/qualification/qualification.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/popups/qualification/qualification.component.ts ***!
  \****************************************************************************/
/*! exports provided: QualificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationComponent", function() { return QualificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class QualificationComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.cancion = true;
    }
    ngOnInit() {
    }
    closePopUp() {
        this.activeModal.close();
    }
}
QualificationComponent.ɵfac = function QualificationComponent_Factory(t) { return new (t || QualificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
QualificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QualificationComponent, selectors: [["app-qualification"]], decls: 25, vars: 0, consts: [[1, "overlay"], [1, "pop-up"], [1, "fondoPopUp"], [1, "btnClose", 3, "click"], [1, "container"], [1, "feedback"], [1, "rating"], ["type", "radio", "name", "rating", "id", "rating-5"], ["for", "rating-5"], ["type", "radio", "name", "rating", "id", "rating-4"], ["for", "rating-4"], ["type", "radio", "name", "rating", "id", "rating-3"], ["for", "rating-3"], ["type", "radio", "name", "rating", "id", "rating-2"], ["for", "rating-2"], ["type", "radio", "name", "rating", "id", "rating-1"], ["for", "rating-1"], [1, "emoji-wrapper"], [3, "click"]], template: function QualificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QualificationComponent_Template_div_click_3_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Calific\u00E1 la canci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QualificationComponent_Template_button_click_23_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\n.pop-up[_ngcontent-%COMP%] {\n  background-color: #202636;\n}\nh3[_ngcontent-%COMP%] {\n  color: #bebbbb;\n}\n.btnClose[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  color: white;\n  font-weight: bolder;\n  font-size: large;\n  margin-right: 4px;\n}\n.icono[_ngcontent-%COMP%] {\n  width: 2vw;\n  position: relative;\n  left: 1vw;\n}\n.icono[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n.pop-up[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  padding: 2vh;\n}\n.fondoPopUp[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 100%;\n  background-color: #1dd6ff;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 35vh;\n  background: #1dd6ff;\n  color: white;\n  font-family: helvetica;\n  border: none;\n  font-size: 2vh;\n  height: 7vh;\n  line-height: 7vh;\n  bottom: 7vh;\n  position: relative;\n  margin: auto;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 50vh;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  flex-direction: row-reverse;\n  height: 150px;\n  position: relative;\n  bottom: 11vh;\n}\n.rating-0[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 63px;\n  height: 63px;\n  margin-top: auto;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  transition: 0.3s;\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n.emoji-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.emoji-wrapper[_ngcontent-%COMP%]:before, .emoji-wrapper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n.emoji-wrapper[_ngcontent-%COMP%]:before {\n  top: 0;\n  background: linear-gradient(to bottom, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n.emoji-wrapper[_ngcontent-%COMP%]:after {\n  bottom: 0;\n  background: linear-gradient(to top, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n.emoji[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s;\n}\n.emoji[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n#rating-1[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-100px);\n}\n#rating-2[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-200px);\n}\n#rating-3[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-300px);\n}\n#rating-4[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-400px);\n}\n#rating-5[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-500px);\n}\n.comentario[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 12vh;\n}\n.comentario[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: #bebbbb;\n}\n.feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMvcXVhbGlmaWNhdGlvbi9xdWFsaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQSxTQUFBO0FBTUEsb0JBQUE7QUFJQTtFQUNFLGtFQUFBO0FDTkY7QURTQTtFQUNFLGlDQUFBO0VBQ0EscURBQUE7QUNORjtBQXBCQTtFQUNBLHlCRFVVO0FDWVY7QUFwQkE7RUFDSSxjRGFTO0FDVWI7QUFyQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF3Qko7QUFyQkU7RUFDRSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0FBdUJKO0FBdEJNO0VBQ0UsV0FBQTtBQXdCUjtBQXJCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF3Qko7QUFwQkU7RUFDRSxZQUFBO0FBdUJKO0FBckJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR4Qk07QUNnRFY7QUFyQkU7RUFDRSxXQUFBO0VBQ0EsbUJEN0JNO0VDOEJOLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXdCSjtBQXRCRTtFQUFJLHNCQUFBO0FBMEJOO0FBeEJBO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUEwQkY7QUF2QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUEwQkY7QUF2QkE7RUFDRSx1QkFBQTtBQTBCRjtBQXZCQTtFQUNFLGFBQUE7QUEwQkY7QUF2QkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBMEJGO0FBdkJBOztFQUVFLHFpQkFBQTtBQTBCRjtBQXRCQTs7RUFFRSxxaUJBQUE7QUF5QkY7QUF0QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUF5QkY7QUF0QkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQXlCRjtBQXRCQTtFQUNFLE1BQUE7RUFDQSx3RkFBQTtBQXlCRjtBQXRCQTtFQUNFLFNBQUE7RUFDQSxxRkFBQTtBQXlCRjtBQXRCQTtFQUVFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXdCRjtBQXJCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF3QkY7QUFyQkE7RUFBOEMsNkJBQUE7QUF5QjlDO0FBeEJBO0VBQThDLDZCQUFBO0FBNEI5QztBQTNCQTtFQUE4Qyw2QkFBQTtBQStCOUM7QUE5QkE7RUFBOEMsNkJBQUE7QUFrQzlDO0FBakNBO0VBQThDLDZCQUFBO0FBcUM5QztBQW5DQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQXNDSjtBQXJDSTtFQUNJLHlCRC9JSztBQ3NMYjtBQXBDQTtFQUdFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFxQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcHVwcy9xdWFsaWZpY2F0aW9uL3F1YWxpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLGJvZHl7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OidPcGVucyBTYW5zJyxoZWx2ZXRpY2E7ICBcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbi8qZm9uZG9zKi9cbiRjb2xvci0xOiAjMjAyNjM2O1xuJGNvbG9yLTI6IzJiMzE0MTtcbiRjb2xvci0zOiAjMWRkNmZmO1xuJGNvbG9yLTQ6IzNmNDc1NDtcblxuLyp0aXBvZ3JhZmlhcyBjb2xvciovXG4kbGV0cmEtY29sb3I6cmdiKDE5MCwgMTg3LCAxODcpO1xuJGxldHJhLWNvbG9yLWhvdmVyOnJnYigyNDEsIDIzOCwgMjM4KTtcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNLUi1SZWd1bGFyJywgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNLUi1SZWd1bGFyJztcbiAgc3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbiBcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbnMgU2Fuc1wiLCBoZWx2ZXRpY2E7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLypmb25kb3MqL1xuLyp0aXBvZ3JhZmlhcyBjb2xvciovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNLUi1SZWd1bGFyXCIsIEZhbGxiYWNrLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTm90b19TYW5zX0tSL05vdG9TYW5zS1ItUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG4ucG9wLXVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjYzNjtcbn1cblxuaDMge1xuICBjb2xvcjogI2JlYmJiYjtcbn1cblxuLmJ0bkNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5pY29ubyB7XG4gIHdpZHRoOiAydnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMXZ3O1xufVxuLmljb25vIHN2ZyB7XG4gIGhlaWdodDogMnZoO1xufVxuXG4ucG9wLXVwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm90b24ge1xuICBwYWRkaW5nOiAydmg7XG59XG5cbi5mb25kb1BvcFVwIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkZDZmZjtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDM1dmg7XG4gIGJhY2tncm91bmQ6ICMxZGQ2ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDJ2aDtcbiAgaGVpZ2h0OiA3dmg7XG4gIGxpbmUtaGVpZ2h0OiA3dmg7XG4gIGJvdHRvbTogN3ZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogNTB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTF2aDtcbn1cblxuLnJhdGluZy0wIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbi5yYXRpbmcgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYXRpbmcgPiBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDYzcHg7XG4gIGhlaWdodDogNjNweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyNi43MjknIGhlaWdodD0nMTI2LjczJyUzZSUzY3BhdGggZmlsbD0nJTIzZTNlM2UzJyBkPSdNMTIxLjIxNSA0NC4yMTJsLTM0Ljg5OS0zLjNjLTIuMi0uMi00LjEwMS0xLjYtNS0zLjdsLTEyLjUtMzAuM2MtMi01LTkuMTAxLTUtMTEuMTAxIDBsLTEyLjQgMzAuM2MtLjggMi4xLTIuOCAzLjUtNSAzLjdsLTM0LjkgMy4zYy01LjIuNS03LjMgNy0zLjQgMTAuNWwyNi4zIDIzLjFjMS43IDEuNSAyLjQgMy43IDEuOSA1LjlsLTcuOSAzMi4zOTljLTEuMiA1LjEwMSA0LjMgOS4zIDguOSA2LjYwMWwyOS4xLTE3LjEwMWMxLjktMS4xIDQuMi0xLjEgNi4xIDBsMjkuMTAxIDE3LjEwMWM0LjYgMi42OTkgMTAuMS0xLjQgOC44OTktNi42MDFsLTcuOC0zMi4zOTljLS41LTIuMi4yLTQuNCAxLjktNS45bDI2LjMtMjMuMWMzLjgtMy41IDEuNi0xMC0zLjYtMTAuNXonLyUzZSUzYy9zdmclM2VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB+IGxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyNi43MjknIGhlaWdodD0nMTI2LjczJyUzZSUzY3BhdGggZmlsbD0nJTIzZmNkOTNhJyBkPSdNMTIxLjIxNSA0NC4yMTJsLTM0Ljg5OS0zLjNjLTIuMi0uMi00LjEwMS0xLjYtNS0zLjdsLTEyLjUtMzAuM2MtMi01LTkuMTAxLTUtMTEuMTAxIDBsLTEyLjQgMzAuM2MtLjggMi4xLTIuOCAzLjUtNSAzLjdsLTM0LjkgMy4zYy01LjIuNS03LjMgNy0zLjQgMTAuNWwyNi4zIDIzLjFjMS43IDEuNSAyLjQgMy43IDEuOSA1LjlsLTcuOSAzMi4zOTljLTEuMiA1LjEwMSA0LjMgOS4zIDguOSA2LjYwMWwyOS4xLTE3LjEwMWMxLjktMS4xIDQuMi0xLjEgNi4xIDBsMjkuMTAxIDE3LjEwMWM0LjYgMi42OTkgMTAuMS0xLjQgOC44OTktNi42MDFsLTcuOC0zMi4zOTljLS41LTIuMi4yLTQuNCAxLjktNS45bDI2LjMtMjMuMWMzLjgtMy41IDEuNi0xMC0zLjYtMTAuNXonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5yYXRpbmcgPiBpbnB1dDpub3QoOmNoZWNrZWQpIH4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nID4gaW5wdXQ6bm90KDpjaGVja2VkKSB+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNkOGIxMWUnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmVtb2ppLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmVtb2ppLXdyYXBwZXI6YmVmb3JlLFxuLmVtb2ppLXdyYXBwZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5lbW9qaS13cmFwcGVyOmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMCUsIHdoaXRlIDM1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbn1cblxuLmVtb2ppLXdyYXBwZXI6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHdoaXRlIDAlLCB3aGl0ZSAzNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG59XG5cbi5lbW9qaSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5lbW9qaSA+IHN2ZyB7XG4gIG1hcmdpbjogMTVweCAwO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuI3JhdGluZy0xOmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xufVxuXG4jcmF0aW5nLTI6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XG59XG5cbiNyYXRpbmctMzpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcbn1cblxuI3JhdGluZy00OmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAwcHgpO1xufVxuXG4jcmF0aW5nLTU6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XG59XG5cbi5jb21lbnRhcmlvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEydmg7XG59XG4uY29tZW50YXJpbyB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJiYmI7XG59XG5cbi5mZWVkYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QualificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qualification',
                templateUrl: './qualification.component.html',
                styleUrls: ['./qualification.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/popups/question/question.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/popups/question/question.component.ts ***!
  \******************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class QuestionComponent {
    constructor(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    closePopUp() {
        this.activeModal.close();
    }
    eliminarPlaylist() {
        const modalRef = this.modalService.open(QuestionComponent, { windowClass: 'modal-holder', size: 'm', centered: true });
    }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) { return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["app-question"]], decls: 13, vars: 0, consts: [[1, "overlay"], [1, "pop-up"], [1, "fondoPopUp"], [1, "btnClose", 3, "click"], [2, "display", "flex", "padding", "18px"], [1, "boton", 3, "click"]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_div_click_3_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desea eliminar la playlist?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_9_listener() { return ctx.eliminarPlaylist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_11_listener() { return ctx.closePopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\n.pop-up[_ngcontent-%COMP%] {\n  background-color: #202636;\n}\nh5[_ngcontent-%COMP%] {\n  color: #bebbbb;\n}\n.btnClose[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  color: white;\n  font-weight: bolder;\n  font-size: large;\n  margin-right: 4px;\n}\n.icono[_ngcontent-%COMP%] {\n  width: 2vw;\n  position: relative;\n  left: 1vw;\n}\n.icono[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n.pop-up[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  padding: 2vh;\n  width: 19vh;\n}\n.fondoPopUp[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 100%;\n  background-color: #1dd6ff;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 35vh;\n  background: #1dd6ff;\n  color: white;\n  font-family: helvetica;\n  border: none;\n  font-size: 2vh;\n  height: 7vh;\n  line-height: 3vh;\n  position: relative;\n  margin: auto;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 50vh;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  flex-direction: row-reverse;\n  height: 150px;\n  position: relative;\n  bottom: 11vh;\n}\n.rating-0[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 63px;\n  height: 63px;\n  margin-top: auto;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  transition: 0.3s;\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n.emoji-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.emoji-wrapper[_ngcontent-%COMP%]:before, .emoji-wrapper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n.emoji-wrapper[_ngcontent-%COMP%]:before {\n  top: 0;\n  background: linear-gradient(to bottom, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n.emoji-wrapper[_ngcontent-%COMP%]:after {\n  bottom: 0;\n  background: linear-gradient(to top, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n.emoji[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s;\n}\n.emoji[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n#rating-1[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-100px);\n}\n#rating-2[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-200px);\n}\n#rating-3[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-300px);\n}\n#rating-4[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-400px);\n}\n#rating-5[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-500px);\n}\n.comentario[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 12vh;\n}\n.comentario[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: #bebbbb;\n}\n.feedback[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENBLFNBQUE7QUFNQSxvQkFBQTtBQUlBO0VBQ0Usa0VBQUE7QUNORjtBRFNBO0VBQ0UsaUNBQUE7RUFDQSxxREFBQTtBQ05GO0FBcEJBO0VBQ0EseUJEVVU7QUNZVjtBQXBCQTtFQUNJLGNEYVM7QUNVYjtBQXJCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXdCSjtBQXJCRTtFQUNFLFVBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7QUF1Qko7QUF0Qk07RUFDRSxXQUFBO0FBd0JSO0FBckJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXdCSjtBQXBCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBdUJKO0FBckJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR6Qk07QUNpRFY7QUFyQkU7RUFDRSxXQUFBO0VBQ0EsbUJEOUJNO0VDK0JOLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBd0JKO0FBdEJFO0VBQUksc0JBQUE7QUEwQk47QUF4QkE7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTBCRjtBQXZCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTBCRjtBQXZCQTtFQUNFLHVCQUFBO0FBMEJGO0FBdkJBO0VBQ0UsYUFBQTtBQTBCRjtBQXZCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscWlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUEwQkY7QUF2QkE7O0VBRUUscWlCQUFBO0FBMEJGO0FBdEJBOztFQUVFLHFpQkFBQTtBQXlCRjtBQXRCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQXlCRjtBQXRCQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBeUJGO0FBdEJBO0VBQ0UsTUFBQTtFQUNBLHdGQUFBO0FBeUJGO0FBdEJBO0VBQ0UsU0FBQTtFQUNBLHFGQUFBO0FBeUJGO0FBdEJBO0VBRUUsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBd0JGO0FBckJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXdCRjtBQXJCQTtFQUE4Qyw2QkFBQTtBQXlCOUM7QUF4QkE7RUFBOEMsNkJBQUE7QUE0QjlDO0FBM0JBO0VBQThDLDZCQUFBO0FBK0I5QztBQTlCQTtFQUE4Qyw2QkFBQTtBQWtDOUM7QUFqQ0E7RUFBOEMsNkJBQUE7QUFxQzlDO0FBbkNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBc0NKO0FBckNJO0VBQ0kseUJEL0lLO0FDc0xiO0FBcENBO0VBR0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wdXBzL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxib2R5e1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTonT3BlbnMgU2FucycsaGVsdmV0aWNhOyAgXG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4vKmZvbmRvcyovXG4kY29sb3ItMTogIzIwMjYzNjtcbiRjb2xvci0yOiMyYjMxNDE7XG4kY29sb3ItMzogIzFkZDZmZjtcbiRjb2xvci00OiMzZjQ3NTQ7XG5cbi8qdGlwb2dyYWZpYXMgY29sb3IqL1xuJGxldHJhLWNvbG9yOnJnYigxOTAsIDE4NywgMTg3KTtcbiRsZXRyYS1jb2xvci1ob3ZlcjpyZ2IoMjQxLCAyMzgsIDIzOCk7XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ05vdG9TYW5zS1ItUmVndWxhcicsIEZhbGxiYWNrLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ05vdG9TYW5zS1ItUmVndWxhcic7XG4gIHNyYzogdXJsKCdhc3NldHMvZm9udHMvTm90b19TYW5zX0tSL05vdG9TYW5zS1ItUmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG4gXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5zIFNhbnNcIiwgaGVsdmV0aWNhO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qZm9uZG9zKi9cbi8qdGlwb2dyYWZpYXMgY29sb3IqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNLUi1SZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLnBvcC11cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDI2MzY7XG59XG5cbmg1IHtcbiAgY29sb3I6ICNiZWJiYmI7XG59XG5cbi5idG5DbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uaWNvbm8ge1xuICB3aWR0aDogMnZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDF2dztcbn1cbi5pY29ubyBzdmcge1xuICBoZWlnaHQ6IDJ2aDtcbn1cblxuLnBvcC11cCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJvdG9uIHtcbiAgcGFkZGluZzogMnZoO1xuICB3aWR0aDogMTl2aDtcbn1cblxuLmZvbmRvUG9wVXAge1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRkNmZmO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMzV2aDtcbiAgYmFja2dyb3VuZDogIzFkZDZmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnZoO1xuICBoZWlnaHQ6IDd2aDtcbiAgbGluZS1oZWlnaHQ6IDN2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDExdmg7XG59XG5cbi5yYXRpbmctMCB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4ucmF0aW5nID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmF0aW5nID4gbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA2M3B4O1xuICBoZWlnaHQ6IDYzcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjYuNzI5JyBoZWlnaHQ9JzEyNi43MyclM2UlM2NwYXRoIGZpbGw9JyUyM2UzZTNlMycgZD0nTTEyMS4yMTUgNDQuMjEybC0zNC44OTktMy4zYy0yLjItLjItNC4xMDEtMS42LTUtMy43bC0xMi41LTMwLjNjLTItNS05LjEwMS01LTExLjEwMSAwbC0xMi40IDMwLjNjLS44IDIuMS0yLjggMy41LTUgMy43bC0zNC45IDMuM2MtNS4yLjUtNy4zIDctMy40IDEwLjVsMjYuMyAyMy4xYzEuNyAxLjUgMi40IDMuNyAxLjkgNS45bC03LjkgMzIuMzk5Yy0xLjIgNS4xMDEgNC4zIDkuMyA4LjkgNi42MDFsMjkuMS0xNy4xMDFjMS45LTEuMSA0LjItMS4xIDYuMSAwbDI5LjEwMSAxNy4xMDFjNC42IDIuNjk5IDEwLjEtMS40IDguODk5LTYuNjAxbC03LjgtMzIuMzk5Yy0uNS0yLjIuMi00LjQgMS45LTUuOWwyNi4zLTIzLjFjMy44LTMuNSAxLjYtMTAtMy42LTEwLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwgfiBsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjYuNzI5JyBoZWlnaHQ9JzEyNi43MyclM2UlM2NwYXRoIGZpbGw9JyUyM2ZjZDkzYScgZD0nTTEyMS4yMTUgNDQuMjEybC0zNC44OTktMy4zYy0yLjItLjItNC4xMDEtMS42LTUtMy43bC0xMi41LTMwLjNjLTItNS05LjEwMS01LTExLjEwMSAwbC0xMi40IDMwLjNjLS44IDIuMS0yLjggMy41LTUgMy43bC0zNC45IDMuM2MtNS4yLjUtNy4zIDctMy40IDEwLjVsMjYuMyAyMy4xYzEuNyAxLjUgMi40IDMuNyAxLjkgNS45bC03LjkgMzIuMzk5Yy0xLjIgNS4xMDEgNC4zIDkuMyA4LjkgNi42MDFsMjkuMS0xNy4xMDFjMS45LTEuMSA0LjItMS4xIDYuMSAwbDI5LjEwMSAxNy4xMDFjNC42IDIuNjk5IDEwLjEtMS40IDguODk5LTYuNjAxbC03LjgtMzIuMzk5Yy0uNS0yLjIuMi00LjQgMS45LTUuOWwyNi4zLTIzLjFjMy44LTMuNSAxLjYtMTAtMy42LTEwLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4ucmF0aW5nID4gaW5wdXQ6bm90KDpjaGVja2VkKSB+IGxhYmVsOmhvdmVyLFxuLnJhdGluZyA+IGlucHV0Om5vdCg6Y2hlY2tlZCkgfiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyNi43MjknIGhlaWdodD0nMTI2LjczJyUzZSUzY3BhdGggZmlsbD0nJTIzZDhiMTFlJyBkPSdNMTIxLjIxNSA0NC4yMTJsLTM0Ljg5OS0zLjNjLTIuMi0uMi00LjEwMS0xLjYtNS0zLjdsLTEyLjUtMzAuM2MtMi01LTkuMTAxLTUtMTEuMTAxIDBsLTEyLjQgMzAuM2MtLjggMi4xLTIuOCAzLjUtNSAzLjdsLTM0LjkgMy4zYy01LjIuNS03LjMgNy0zLjQgMTAuNWwyNi4zIDIzLjFjMS43IDEuNSAyLjQgMy43IDEuOSA1LjlsLTcuOSAzMi4zOTljLTEuMiA1LjEwMSA0LjMgOS4zIDguOSA2LjYwMWwyOS4xLTE3LjEwMWMxLjktMS4xIDQuMi0xLjEgNi4xIDBsMjkuMTAxIDE3LjEwMWM0LjYgMi42OTkgMTAuMS0xLjQgOC44OTktNi42MDFsLTcuOC0zMi4zOTljLS41LTIuMi4yLTQuNCAxLjktNS45bDI2LjMtMjMuMWMzLjgtMy41IDEuNi0xMC0zLjYtMTAuNXonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5lbW9qaS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5lbW9qaS13cmFwcGVyOmJlZm9yZSxcbi5lbW9qaS13cmFwcGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZW1vamktd3JhcHBlcjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDAlLCB3aGl0ZSAzNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG59XG5cbi5lbW9qaS13cmFwcGVyOmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB3aGl0ZSAwJSwgd2hpdGUgMzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xufVxuXG4uZW1vamkge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZW1vamkgPiBzdmcge1xuICBtYXJnaW46IDE1cHggMDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbiNyYXRpbmctMTpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbn1cblxuI3JhdGluZy0yOmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xufVxuXG4jcmF0aW5nLTM6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XG59XG5cbiNyYXRpbmctNDpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwMHB4KTtcbn1cblxuI3JhdGluZy01OmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xufVxuXG4uY29tZW50YXJpbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxMnZoO1xufVxuLmNvbWVudGFyaW8gdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmViYmJiO1xufVxuXG4uZmVlZGJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question',
                templateUrl: './question.component.html',
                styleUrls: ['./question.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goFaqs() {
        this.router.navigateByUrl('faqs');
        return this.router.navigate(['faqs']);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 49, vars: 0, consts: [[1, "col-12", "d-block", "d-xl-none", "usuario-container"], [1, "row"], ["src", "../../../assets/images/usuario.png", "alt", "../../../assets/images/usuario.png"], [1, "nickname"], ["data-toggle", "tooltip", "data-placement", "right", "title", "preguntas frecuentes", 1, "icon"], ["href", "faqs"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "question-circle", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-question-circle", "fa-w-16"], ["fill", "currentColor", "d", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z", 1, ""], [1, "d-none", "d-xl-block"], ["data-placement", "right", "title", "home", 1, "iconHome"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "home", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-home", "fa-w-18"], ["fill", "currentColor", "d", "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z", 1, ""], [2, "position", "relative", "margin-top", "12vh"], ["href", ""]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "juan perez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "premiun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mis playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Crear Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mis podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Canciones que me gustan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Escuchados recientemente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Recomendados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Tendencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  color: black;\n  font-family: \"Opens Sans\", helvetica;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n}\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"NotoSansKR-Regular\", Fallback, sans-serif !important;\n}\n@font-face {\n  font-family: \"NotoSansKR-Regular\";\n  src: url('NotoSansKR-Regular.otf') format(\"opentype\");\n}\na[_ngcontent-%COMP%] {\n  color: #bebbbb;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #f1eeee;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\naside[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  height: 80vh;\n  background-color: #2b3141;\n}\nnav[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 4vw;\n  float: left;\n  position: relative;\n  left: 0.5vw;\n  top: 1vh;\n}\n.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 4vh;\n}\n.iconHome[_ngcontent-%COMP%] {\n  width: 5vw;\n  float: left;\n  position: relative;\n  margin: auto;\n  text-align: center;\n}\n.iconHome[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: 6vh;\n  height: 5vh;\n  color: #bebbbb;\n}\n.iconHome[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  color: white;\n}\nul[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2vh;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 2vh;\n  font-size: 16px;\n}\n.usuario-container[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  color: #bebbbb;\n}\n.usuario-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 45%;\n  padding: 0;\n  right: -15%;\n  margin: 0;\n  width: 12vh;\n}\n.usuario-container[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  position: relative;\n  top: 45%;\n}\n.usuario-container[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: 59%;\n  padding: 0;\n  right: -40%;\n  margin: 0;\n}\n.usuario-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 6vh;\n  position: fixed;\n  right: 10%;\n  top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENBLFNBQUE7QUFNQSxvQkFBQTtBQUlBO0VBQ0Usa0VBQUE7QUNORjtBRFNBO0VBQ0UsaUNBQUE7RUFDQSxxREFBQTtBQ05GO0FBbkJBO0VBQ0UsY0RlVztFQ2RYLHFCQUFBO0FBcUJGO0FBbkJBO0VBQ0UsY0RZaUI7QUNVbkI7QUFwQkE7RUFDRSxnQkFBQTtBQXVCRjtBQW5CQTtFQUNJLGtCQUFBO0VBRUEsU0FBQTtFQUVBLFlBQUE7RUFFQSx5QkRSSztBQzJCVDtBQWZBO0VBQ0Usa0JBQUE7QUFrQkY7QUFmQTtFQUNFLFVBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQWlCRjtBQWhCSTtFQUNFLFdBQUE7QUFrQk47QUFmRTtFQUNFLFVBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFpQko7QUFoQks7RUFDRyxlQUFBO0VBQ0QsV0FBQTtFQUNBLGNEaENNO0FDa0RiO0FBakJPO0VBQ0MsWUFBQTtBQW1CUjtBQWRFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWlCSjtBQWhCSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFrQk47QUFkRTtFQUlHLGtCQUFBO0VBQ0EsY0R0RFE7QUNvRWI7QUFiSztFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFlVDtBQWJLO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFlVDtBQWRTO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZ0JiO0FBUk07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBVVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsYm9keXtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6J09wZW5zIFNhbnMnLGhlbHZldGljYTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuLypmb25kb3MqL1xuJGNvbG9yLTE6ICMyMDI2MzY7XG4kY29sb3ItMjojMmIzMTQxO1xuJGNvbG9yLTM6ICMxZGQ2ZmY7XG4kY29sb3ItNDojM2Y0NzU0O1xuXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbiRsZXRyYS1jb2xvcjpyZ2IoMTkwLCAxODcsIDE4Nyk7XG4kbGV0cmEtY29sb3ItaG92ZXI6cmdiKDI0MSwgMjM4LCAyMzgpO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInLCBGYWxsYmFjaywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0tSLVJlZ3VsYXInO1xuICBzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL05vdG9fU2Fuc19LUi9Ob3RvU2Fuc0tSLVJlZ3VsYXIub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuIFxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJPcGVucyBTYW5zXCIsIGhlbHZldGljYTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKmZvbmRvcyovXG4vKnRpcG9ncmFmaWFzIGNvbG9yKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0tSLVJlZ3VsYXJcIiwgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zS1ItUmVndWxhclwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9Ob3RvX1NhbnNfS1IvTm90b1NhbnNLUi1SZWd1bGFyLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbmEge1xuICBjb2xvcjogI2JlYmJiYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmMWVlZWU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYXNpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA4MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMTQxO1xufVxuXG5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDR2dztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMC41dnc7XG4gIHRvcDogMXZoO1xufVxuLmljb24gc3ZnIHtcbiAgaGVpZ2h0OiA0dmg7XG59XG5cbi5pY29uSG9tZSB7XG4gIHdpZHRoOiA1dnc7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmljb25Ib21lIHN2ZyB7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbiAgaGVpZ2h0OiA1dmg7XG4gIGNvbG9yOiAjYmViYmJiO1xufVxuLmljb25Ib21lIHN2Zzpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cbnVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnVzdWFyaW8tY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBjb2xvcjogI2JlYmJiYjtcbn1cbi51c3VhcmlvLWNvbnRhaW5lciBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDUlO1xuICBwYWRkaW5nOiAwO1xuICByaWdodDogLTE1JTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTJ2aDtcbn1cbi51c3VhcmlvLWNvbnRhaW5lciAubmlja25hbWUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NSU7XG59XG4udXN1YXJpby1jb250YWluZXIgLm5pY2tuYW1lIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTklO1xuICBwYWRkaW5nOiAwO1xuICByaWdodDogLTQwJTtcbiAgbWFyZ2luOiAwO1xufVxuLnVzdWFyaW8tY29udGFpbmVyIC5pY29uIHN2ZyB7XG4gIGhlaWdodDogNnZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogMTAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\toto\Desktop\TP5UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map