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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-seccion/main-seccion.component */ "./src/app/components/main-seccion/main-seccion.component.ts");
/* harmony import */ var _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/control-bar/control-bar.component */ "./src/app/components/control-bar/control-bar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popups/price-table/price-table.component */ "./src/app/components/popups/price-table/price-table.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");
/* harmony import */ var _components_lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lahamburguesa/lahamburguesa.component */ "./src/app/components/lahamburguesa/lahamburguesa.component.ts");
/* harmony import */ var _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/faq-accordion/faq-accordion.component */ "./src/app/components/faq-accordion/faq-accordion.component.ts");
/* harmony import */ var _components_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/popups/qualification/qualification.component */ "./src/app/components/popups/qualification/qualification.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
        _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_6__["MainSeccionComponent"],
        _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_7__["ControlBarComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_9__["PriceTableComponent"],
        _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistComponent"],
        _components_lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_11__["LahamburguesaComponent"],
        _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_12__["FaqAccordionComponent"],
        _components_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_13__["QualificationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                    _components_main_seccion_main_seccion_component__WEBPACK_IMPORTED_MODULE_6__["MainSeccionComponent"],
                    _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_7__["ControlBarComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _components_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_9__["PriceTableComponent"],
                    _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistComponent"],
                    _components_lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_11__["LahamburguesaComponent"],
                    _components_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_12__["FaqAccordionComponent"],
                    _components_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_13__["QualificationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
    }
    calificarCancion() {
        const modalRef = this.modalService.open(_popups_qualification_qualification_component__WEBPACK_IMPORTED_MODULE_1__["QualificationComponent"], { windowClass: 'modal-holder', size: 'xl', centered: true });
    }
}
ControlBarComponent.ɵfac = function ControlBarComponent_Factory(t) { return new (t || ControlBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ControlBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlBarComponent, selectors: [["app-control-bar"]], decls: 52, vars: 0, consts: [[1, "row", "fila-footer"], [1, "col-2", "d-none", "d-lg-block", "album-container"], [1, "row"], [1, "col-6", "albun-foto"], ["src", "../../../assets/images/usuario.png", "alt", ""], [1, "col-6", "info-tema"], [1, "col-12", "col-sm-8", "row", "controles-container"], [1, "col-3", "col-sm-3"], [1, "row", "btns-control"], [1, "col-6", "btn-aleatorio"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 1000 1000", "enable-background", "new 0 0 1000 1000", 0, "xml", "space", "preserve"], ["d", "M807.3,340.8v98.8c0,24.2,13.8,29.8,30.8,12.7l140.8-142.2c14.9-15,14.9-39.4,0-54.5L838,113.5c-17-17.2-30.8-11.5-30.8,12.7v75.2h-178c-183.9,0-317,458.4-431.8,458.4H75.7c-36.3,0-65.7,29.4-65.7,65.7v8.1c0,36.3,29.4,65.7,65.7,65.7h121.8c183.9,0,317-458.4,431.8-458.4H807.3z M518.4,558.1c39.3,59.1,75.9,101.6,110.9,101.6h178v-97.8c0-24.7,14.1-30.5,31.5-13l139.5,140.8c15.2,15.4,15.2,40.3,0,55.7L838.7,886.3c-17.4,17.6-31.5,11.8-31.5-13v-74.2h-178c-67.5,0-121.2-53.3-176.7-131.1L518.4,558.1z M311.5,447c-42.6-66.1-76.5-106.2-114.1-106.2H77.1c-37.1,0-67.1-30.1-67.1-67.2v-5.1c0-37.1,30.1-67.2,67.1-67.2h120.3c66.2,0,128.1,62.4,183.4,139.5L311.5,447z"], [1, "col-6", "btn-repeat"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "repeat", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-repeat", "fa-w-16"], ["fill", "currentColor", "d", "M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z", 1, ""], [1, "col-6", "col-sm-6", "d-flex", "justify-content-center", "btns-control"], [1, "btn-back-song"], ["href", "#", "data-vbtype", "video", "data-autoplay", "true", 1, "back-btn"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "step-backward", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-step-backward", "fa-w-14"], ["fill", "currentColor", "d", "M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z", 1, ""], [1, "btn-play"], ["href", "#", "data-vbtype", "video", "data-autoplay", "true", 1, "pause-btn"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "pause", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-pause", "fa-w-14"], ["fill", "currentColor", "d", "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z", 1, ""], [1, "btn-next-song"], ["href", "#", "data-vbtype", "video", "data-autoplay", "true", 1, "next-btn"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "step-forward", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-step-forward", "fa-w-14"], ["fill", "currentColor", "d", "M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z", 1, ""], [1, "volume"], [1, "col-2", "d-none", "d-lg-block", "opciones-container"], [3, "click"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-heart", "fa-w-16"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z", 1, ""]], template: function ControlBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "album");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlBarComponent_Template_div_click_49_listener() { return ctx.calificarCancion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway:500);\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 0;\n  width: 100%;\n  background-color: burlywood;\n  border: 1px solid #010108;\n  height: 10vh;\n  \n}\nfooter[_ngcontent-%COMP%]   .album-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .album-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4vw;\n}\nfooter[_ngcontent-%COMP%]   .album-container[_ngcontent-%COMP%]   .info-tema[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-aleatorio[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-repeat[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-aleatorio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-repeat[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 4vh;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%] {\n  padding: 0.5vw;\n  border: 1px solid blue;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-back-song[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .btns-control[_ngcontent-%COMP%]   .btn-next-song[_ngcontent-%COMP%] {\n  padding: 0.5vw;\n  display: flex;\n  align-items: center;\n  border: 1px solid blue;\n}\nfooter[_ngcontent-%COMP%]   .controles-container[_ngcontent-%COMP%]   .progreso[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 15px;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n  display: flex;\n  align-items: center;\n  border: 1px solid blue;\n  display: flex;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .btn-aleatorio[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .btn-repeat[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n}\nfooter[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .btn-aleatorio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]   .btn-repeat[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 4vh;\n}\n\n.play-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: radial-gradient(#342091 50%, rgba(30, 30, 156, 0.877) 50%);\n  display: block;\n  transform: rotate(45deg);\n  \n  position: relative;\n  overflow: hidden;\n  border-radius: 40px;\n}\n.play-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n}\n\n@keyframes play-btn {\n  0% {\n    transform: scale(0.6, 0.6);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n.back-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background: radial-gradient(#342091 100%, rgba(12, 12, 201, 0.692) 50%);\n  display: block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50px;\n}\n.back-btn[_ngcontent-%COMP%]:hover, .next-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n}\n.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20%;\n  top: 19%;\n  width: 20px;\n}\n.pause-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: radial-gradient(#342091 100%, rgba(12, 12, 201, 0.692) 50%);\n  display: block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50px;\n}\n.pause-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 2px #dcdcdc;\n}\n.pause-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 26%;\n  top: 22%;\n  width: 20px;\n}\nbody[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n  font-family: Raleway;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 34px;\n  padding-top: 40px;\n  color: #FFF;\n}\np[_ngcontent-%COMP%] {\n  color: #999;\n  text-align: center;\n  font-size: 15px;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2ecc71;\n  text-decoration: none;\n  padding: 1px 2px 0px 2px;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  transition: all 0.1s ease;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  padding: 1px 2px 1px 2px;\n  border-bottom: 2px solid #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWJhci9jb250cm9sLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwT1ksZ0VBQUE7QUExT1o7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNEOzs7O3dCQUFBO0FBS0g7QUFBUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQUFZO0VBQ0ksVUFBQTtBQUVoQjtBQUFZO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFFaEI7QUFDUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNZO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDaEI7QUFBZ0I7RUFJSSxzQkFBQTtBQURwQjtBQUVvQjtFQUNJLFVBQUE7QUFBeEI7QUFJZ0I7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7QUFGcEI7QUFJZ0I7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGcEI7QUFNWTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUpoQjtBQVNRO0VBRUksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUlo7QUFTWTtFQUlJLHNCQUFBO0FBVmhCO0FBV2dCO0VBQ0ksVUFBQTtBQVRwQjtBQW1CQSxvQ0FBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzRUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUtBLG1CQUFBO0FBckJKO0FBaUJJO0VBQ0ksb0NBQUE7QUFmUjtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQUE7QUFtRUk7RUFDQTtJQUNJLDBCQUFBO0lBQ0EsVUFBQTtFQWpCTjtFQW1CRTtJQUNJLHNCQUFBO0lBQ0EsVUFBQTtFQWpCTjtBQUNGO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1RUFBQTtFQUNBLGNBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsbUJBQUE7QUF2QlI7QUFvQlE7RUFDSSxvQ0FBQTtBQWxCWjtBQXFCUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBbkJaO0FBd0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1RUFBQTtFQUNBLGNBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsbUJBQUE7QUExQlI7QUF1QlE7RUFDSSxvQ0FBQTtBQXJCWjtBQXdCUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBdEJaO0FBZ0NJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQTdCUjtBQWdDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTdCUjtBQWdDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3QlI7QUErQlE7RUFDSSxjQXBCUTtFQXFCUixxQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQTdCWjtBQStCWTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7QUE3QmhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWJhci9jb250cm9sLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9wYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kOy8vXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMSwgMSwgOCk7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgIC8qIC5maWxhLWZvb3RlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQ4LCAxNDgsIDE4MCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTE2LCA5OCk7Ly9cclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7Ki9cclxuICAgICAgICAuYWxidW0tY29udGFpbmVye1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNDUsIDEyKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvLXRlbWEgcHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRyb2xlcy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE0NSwgMTIpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmJ0bnMtY29udHJvbHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5idG4tYWxlYXRvcmlvLC5idG4tcmVwZWF0e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0dmg7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLXBsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tYmFjay1zb25nLC5idG4tbmV4dC1zb25ne1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2dyZXNve1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wY2lvbmVzLWNvbnRhaW5lcntcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE0NSwgMTIpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuYnRuLWFsZWF0b3JpbywuYnRuLXJlcGVhdHtcclxuICAgICAgICAgICAgICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHZoOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgIC8vIH1cclxufVxyXG4vKmNzcyBib3RvbiBkZSBwbGF5IGNvbiAgYW5pbWFjaW9tbiovXHJcblxyXG4ucGxheS1idG4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzM0MjA5MSA1MCUsIHJnYmEoMzAsIDMwLCAxNTYsIDAuODc3KSA1MCUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAvKm1hcmdpbjogMTAwcHggYXV0bzsqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgfVxyXG4gICAgLy9ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbi8qLnBsYXktYnRuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmZmY7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgODAwbXMgY2lyY2xlLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4ucGxheS1idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwbGF5LWJ0biAycztcclxuICAgIGFuaW1hdGlvbjogcGxheS1idG4gM3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogZm9yd2FyZHM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLnBsYXktYnRuOmhvdmVyOjphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjNTM0Y2FmO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyMCk7XHJcbn1cclxuLnBsYXktYnRuOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZmZmO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4vKi0tIEFuaW1hdGVkIENTUyAtLSovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwbGF5LWJ0biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcGxheS1idG4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrLWJ0biAsLm5leHQtYnRue1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzM0MjA5MSAxMDAlLCByZ2JhKDEyLCAxMiwgMjAxLCAwLjY5MikgNTAlKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNkY2RjZGM7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgdG9wOiAxOSU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnBhdXNlLWJ0bntcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzM0MjA5MSAxMDAlLCByZ2JhKDEyLCAxMiwgMjAxLCAwLjY5MikgNTAlKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICNkY2RjZGM7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcclxuICAgICAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3ZvbHVtZVxyXG5cclxuICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjUwMCk7XHJcblxyXG4gICAgJHByaW1hcnktY29sb3I6ICMyZWNjNzE7XHJcbiAgICBcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyYTJhMmE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4IDBweCAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4IDFweCAycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4vL3ZvbHVtZVxyXG4iXX0= */"] });
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
    } }, styles: ["section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.faq-heading[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-weight: 400;\n  font-size: 19px;\n  -webkit-transition: text-indent 0.2s;\n  text-indent: 20px;\n  color: #333;\n}\n\n.faq-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-weight: 400;\n  color: #919191;\n  width: 95%;\n  padding-left: 20px;\n  margin-bottom: 30px;\n}\n\n.faq[_ngcontent-%COMP%] {\n  width: 1000px;\n  margin: 0 auto;\n  background: white;\n  border-radius: 4px;\n  position: relative;\n  border: 1px solid #E1E1E1;\n}\n\n.faq[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  height: 56px;\n  padding-top: 1px;\n  background-color: #FAFAFA;\n  border-bottom: 1px solid #E1E1E1;\n}\n\n.faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.faq[_ngcontent-%COMP%]   .faq-arrow[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  border-top: 2px solid rgba(0, 0, 0, 0.33);\n  border-right: 2px solid rgba(0, 0, 0, 0.33);\n  float: right;\n  position: relative;\n  top: -30px;\n  right: 27px;\n  transform: rotate(45deg);\n}\n\n.faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]    > .faq-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transform: rotate(135deg);\n}\n\n.faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  display: block;\n  background: white !important;\n  color: #4f7351;\n  height: 225px;\n  transition: height 0.8s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.faq[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%] {\n  display: block;\n  transition: height 0.8s;\n  height: 45px;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEtYWNjb3JkaW9uL2ZhcS1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0FBSEo7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNDLG9DQUFBO0VBQ0QsaUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdDQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0VBRUEsMEVBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFUSx3QkFBQTtBQUZWOztBQUtDO0VBRUMsMEJBQUE7RUFFQSwwRUFBQTtFQUVRLHlCQUFBO0FBRlY7O0FBSUM7RUFDQyxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEVBQUE7QUFERjs7QUFJQztFQUNDLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwRUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXEtYWNjb3JkaW9uL2ZhcS1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byk7XHJcblxyXG4vLyhodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbiBTYW5zKTtcclxuc2VjdGlvbntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmZhcS1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogTGF0bzsgICBcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjJzO1xyXG4gIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZmFxLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7ICAgXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzkxOTE5MTtcclxuICB3aWR0aDo5NSU7XHJcbiAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG4uZmFxIHtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcclxufVxyXG4uZmFxIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHBhZGRpbmctdG9wOjFweDtcclxuIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7XHJcbn1cclxuXHJcbi5mYXEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmFxIC5mYXEtYXJyb3cge1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC44cztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cywgLXdlYmtpdC10cmFuc2Zvcm0gMC44cztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMzKTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMzBweDtcclxuICByaWdodDogMjdweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuIC5mYXEgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCA+IC5mYXEtYXJyb3cge1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuOHM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxufVxyXG4gLmZhcSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDI1NSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzRmNzM1MTtcclxuICBoZWlnaHQ6IDIyNXB4O1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjhzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xyXG59XHJcblxyXG4gLmZhcSBpbnB1dFt0eXBlPSdjaGVja2JveCddOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuOHM7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"] });
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






function HeaderComponent_app_lahamburguesa_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lahamburguesa", 17);
} }
class HeaderComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.hamburguesa = false;
    }
    ngOnInit() {
    }
    cambiarPlan() {
        const modalRef = this.modalService.open(_popups_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_1__["PriceTableComponent"], { windowClass: 'modal-holder', size: 'xl', centered: true });
    }
    toggleHamburguesa() {
        this.hamburguesa = !this.hamburguesa;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 1, consts: [[1, "row", "fila-header"], [1, "col-3", "col-sm-2", "logo-container"], ["href", "home"], ["src", "../../../assets/images/auriculares.png", "alt", "../../../assets/images/logo.jpg"], [1, "d-none", "d-xl-block"], [1, "col-6", "col-sm-8", "col-md-4", "subscribite-container"], [3, "click"], [1, "col-4", "d-none", "d-xl-block", "buscar-container"], ["type", "search", "name", "buscar", "id", ""], [1, "col-2", "d-none", "d-xl-block", "usuario-container"], [1, "row"], ["src", "../../../assets/images/usuario.png", "alt", "../../../assets/images/usuario.png"], [1, "nickname"], [1, "col-3", "col-sm-2", "d-block", "d-xl-none", "menu-container"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "bars", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-bars", "fa-w-14"], ["fill", "currentColor", "d", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z", 1, ""], ["class", "d-block d-xl-none", 4, "ngIf"], [1, "d-block", "d-xl-none"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.cambiarPlan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cambiar de plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "juan perez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_20_listener() { return ctx.toggleHamburguesa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_app_lahamburguesa_23_Template, 1, 0, "app-lahamburguesa", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hamburguesa);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _lahamburguesa_lahamburguesa_component__WEBPACK_IMPORTED_MODULE_4__["LahamburguesaComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: burlywood;\n  border: 1px solid #010108;\n  height: 10vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%] {\n  border: 1px solid #9494b4;\n  background-color: #817462;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  float: left;\n  margin-top: 4vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .subscribite-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .subscribite-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: crimson;\n  position: relative;\n  top: 25%;\n  left: 20%;\n  width: 60%;\n  height: 55%;\n  padding: 0px;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .buscar-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 32%;\n  left: 28%;\n  color: #df1010;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n  padding: 1vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .usuario-container[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: #f0910c;\n  padding: 1vh;\n}\nheader[_ngcontent-%COMP%]   .fila-header[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n  top: 32%;\n  left: 28%;\n  width: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUdRO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURaO0FBRVk7RUFDSSxXQUFBO0FBQWhCO0FBR1k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRGhCO0FBSVE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FBRlo7QUFNWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpoQjtBQU9RO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQUxaO0FBT1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUxoQjtBQVNRO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFQWjtBQVFZO0VBRUksV0FBQTtBQVBoQjtBQVNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVBoQjtBQVVRO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFSWjtBQVNZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFQaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgIC8vIHBhZGRpbmc6IDF2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDsvL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEsIDEsIDgpO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgXHJcbiAgICAuZmlsYS1oZWFkZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0OCwgMTQ4LCAxODApO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjksIDExNiwgOTgpOy8vXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2dvLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTQ1LCAxMik7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1YnNjcmliaXRlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTQ1LCAxMik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1c2Nhci1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE0NSwgMTIpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMzIlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjglO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiKDIyMywgMTYsIDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC51c3VhcmlvLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTQ1LCAxMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDF2aDtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uaWNrbmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTQ1LCAxMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDF2aDtcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMiU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyOCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogM3ZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuXHJcbn0iXX0= */"] });
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
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: [".hamburguesa[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11vh;\n  background-color: white;\n  width: 100%;\n  height: 90vh;\n  z-index: 100000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYWhhbWJ1cmd1ZXNhL2xhaGFtYnVyZ3Vlc2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYWhhbWJ1cmd1ZXNhL2xhaGFtYnVyZ3Vlc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFtYnVyZ3Vlc2F7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxufSJdfQ== */"] });
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




const _c0 = function () { return ["/playlist"]; };
// import Swiper styles
//import 'swiper/swiper-bundle.css';
class MainSeccionComponent {
    constructor() { }
    ngOnInit() {
        /*let swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });*/
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
    }
}
MainSeccionComponent.ɵfac = function MainSeccionComponent_Factory(t) { return new (t || MainSeccionComponent)(); };
MainSeccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSeccionComponent, selectors: [["app-main-seccion"]], decls: 29, vars: 20, consts: [[1, "col-sm-12"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-1.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-2.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-3.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-4.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-5.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-6.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-7.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-8.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-9.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-10.jpg)", 3, "routerLink"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-1.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-2.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-3.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-4.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-5.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-6.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-7.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-8.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-9.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-10.jpg)"]], template: function MainSeccionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["section[_ngcontent-%COMP%] {\n  background: #eee;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #000;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 80vh;\n}\nsection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  width: 90%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\nsection[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  width: 18%;\n  height: 22vh;\n}\n@media screen and (max-width: 500px) {\n  section[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n    width: 50%;\n    height: 22vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXNlY2Npb24vbWFpbi1zZWNjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQUNJO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ1I7QUFBUTtFQUxKO0lBT1EsMkJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1zZWNjaW9uL21haW4tc2VjY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBoNHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTglO1xyXG4gICAgICAgIGhlaWdodDogMjJ2aDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIydmg7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSeccionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-seccion',
                templateUrl: './main-seccion.component.html',
                styleUrls: ['./main-seccion.component.scss']
            }]
    }], function () { return []; }, null); })();


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


class PlaylistComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) { return new (t || PlaylistComponent)(); };
PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistComponent, selectors: [["app-playlist"]], decls: 56, vars: 0, consts: [[1, "back"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "arrow-left", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-arrow-left", "fa-w-14"], ["fill", "currentColor", "d", "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z", 1, ""], [1, "Playlist"], [1, "swiper-slide", 2, "background-image", "url(https://swiperjs.com/demos/images/nature-1.jpg)", "position", "absolute", "top", "18vh", "justify-content", "center", "left", "22vw"], [1, "iconPlay"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "play-circle", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-play-circle", "fa-w-16"], ["fill", "currentColor", "d", "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z", 1, ""], [1, "iconMG"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-heart", "fa-w-16"], ["fill", "currentColor", "d", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z", 1, ""], [1, "iconMenu"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "ellipsis-h", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-ellipsis-h", "fa-w-16"], ["fill", "currentColor", "d", "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z", 1, ""], [1, "table"], [1, "thead-dark"], ["scope", "col"], ["scope", "row"]], template: function PlaylistComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n  background: #eee;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: #000;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 80vh;\n}\nsection[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  float: left;\n  width: 7vh;\n  position: relative;\n  top: 3%;\n  left: 5%;\n}\nsection[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 7vh;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: 10vh;\n}\nsection[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  width: 15%;\n  height: 22vh;\n}\n@media screen and (max-width: 500px) {\n  section[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n    width: 39%;\n    height: 22vh;\n  }\n}\nsection[_ngcontent-%COMP%]   .iconPlay[_ngcontent-%COMP%] {\n  width: 5vh;\n  position: relative;\n  margin: auto;\n  top: 68%;\n  left: 72%;\n}\nsection[_ngcontent-%COMP%]   .iconPlay[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\nsection[_ngcontent-%COMP%]   .iconMG[_ngcontent-%COMP%] {\n  width: 8vh;\n  position: relative;\n  margin: auto;\n  top: 46%;\n  left: 102%;\n}\nsection[_ngcontent-%COMP%]   .iconMG[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\nsection[_ngcontent-%COMP%]   .iconMenu[_ngcontent-%COMP%] {\n  width: 8vh;\n  position: relative;\n  margin: auto;\n  top: 23%;\n  left: 130%;\n}\nsection[_ngcontent-%COMP%]   .iconMenu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 5vh;\n}\nsection[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 34vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFFWjtBQUFRO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFWjtBQURZO0VBTko7SUFRUSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFHZDtBQUNGO0FBRFE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFHWjtBQUZZO0VBQ0ksV0FBQTtBQUloQjtBQURRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBR1o7QUFEWTtFQUNJLFdBQUE7QUFHaEI7QUFBUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUVaO0FBQVk7RUFDSSxXQUFBO0FBRWhCO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgLmJhY2t7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB3aWR0aDo3dmg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDozJTtcclxuICAgICAgICBsZWZ0OjUlO1xyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgaGVpZ2h0Ojd2aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDoxMHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnZoO1xyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM5JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjJ2aDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uUGxheXtcclxuICAgICAgICAgICAgd2lkdGg6NXZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgdG9wOjY4JTtcclxuICAgICAgICAgICAgbGVmdDo3MiU7XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIC5pY29uTUd7XHJcbiAgICAgICAgICAgIHdpZHRoOjh2aDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHRvcDo0NiU7XHJcbiAgICAgICAgICAgIGxlZnQ6MTAyJTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjV2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLmljb25NZW51e1xyXG4gICAgICAgICAgICB3aWR0aDo4dmg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB0b3A6MjMlO1xyXG4gICAgICAgICAgICBsZWZ0OjEzMCU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozNHZoO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist',
                templateUrl: './playlist.component.html',
                styleUrls: ['./playlist.component.scss']
            }]
    }], function () { return []; }, null); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
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
    } }, styles: [".btnClose[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  color: white;\n  font-weight: bolder;\n  font-size: large;\n  margin-right: 4px;\n}\n\n.icono[_ngcontent-%COMP%] {\n  width: 2vw;\n  position: relative;\n  left: 1vw;\n}\n\n.icono[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n\n.pop-up[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: auto;\n}\n\n.boton[_ngcontent-%COMP%] {\n  padding: 2vh;\n}\n\n.fondoPopUp[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 100%;\n  background-color: #2da744;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 35vh;\n  background: #2da744;\n  color: white;\n  font-family: helvetica;\n  border: none;\n  font-size: 2vh;\n  height: 7vh;\n  line-height: 7vh;\n  bottom: 7vh;\n  position: relative;\n  margin: auto;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 50vh;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n}\n\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  flex-direction: row-reverse;\n  height: 150px;\n  position: relative;\n}\n\n.rating-0[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  margin-top: auto;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 76%;\n  transition: 0.3s;\n}\n\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n\n.rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:checked)    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n\n.emoji-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.emoji-wrapper[_ngcontent-%COMP%]:before, .emoji-wrapper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n\n.emoji-wrapper[_ngcontent-%COMP%]:before {\n  top: 0;\n  background: linear-gradient(to bottom, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n\n.emoji-wrapper[_ngcontent-%COMP%]:after {\n  bottom: 0;\n  background: linear-gradient(to top, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n\n.emoji[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s;\n}\n\n.emoji[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n\n#rating-1[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-100px);\n}\n\n#rating-2[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-200px);\n}\n\n#rating-3[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-300px);\n}\n\n#rating-4[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-400px);\n}\n\n#rating-5[_ngcontent-%COMP%]:checked    ~ .emoji-wrapper[_ngcontent-%COMP%]    > .emoji[_ngcontent-%COMP%] {\n  transform: translateY(-500px);\n}\n\n.feedback[_ngcontent-%COMP%] {\n  max-width: 360px;\n  background-color: #fff;\n  width: 100%;\n  padding: 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMvcXVhbGlmaWNhdGlvbi9xdWFsaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0FBREo7O0FBRU07RUFDRSxXQUFBO0FBQVI7O0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUU7RUFDRSxZQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTtFQUFJLHNCQUFBO0FBRU47O0FBQUE7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7O0VBRUUscWlCQUFBO0FBRUY7O0FBRUE7O0VBRUUscWlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsTUFBQTtFQUNBLHdGQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EscUZBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUE4Qyw2QkFBQTtBQUU5Qzs7QUFEQTtFQUE4Qyw2QkFBQTtBQUs5Qzs7QUFKQTtFQUE4Qyw2QkFBQTtBQVE5Qzs7QUFQQTtFQUE4Qyw2QkFBQTtBQVc5Qzs7QUFWQTtFQUE4Qyw2QkFBQTtBQWM5Qzs7QUFaQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFlRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wdXBzL3F1YWxpZmljYXRpb24vcXVhbGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuQ2xvc2V7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmljb25ve1xyXG4gICAgd2lkdGg6IDJ2dztcclxuICAgIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JlM2YyYjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbGVmdDoxdnc7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAydmg7XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIC5wb3AtdXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9ue1xyXG4gICAgcGFkZGluZzogMnZoO1xyXG4gIH1cclxuICAuZm9uZG9Qb3BVcHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmRhNzQ0O1xyXG4gIFxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDM1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmRhNzQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBsaW5lLWhlaWdodDogN3ZoO1xyXG4gICAgYm90dG9tOiA3dmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICB9XHJcbiAgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvc3VidGxlcGF0dGVybnMvcGF0dGVybnMvY29uY3JldGUtdGV4dHVyZS5wbmdcIik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4ucmF0aW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmF0aW5nLTAge1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG59XHJcblxyXG4ucmF0aW5nID4gaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYXRpbmcgPiBsYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjYuNzI5JyBoZWlnaHQ9JzEyNi43MyclM2UlM2NwYXRoIGZpbGw9JyUyM2UzZTNlMycgZD0nTTEyMS4yMTUgNDQuMjEybC0zNC44OTktMy4zYy0yLjItLjItNC4xMDEtMS42LTUtMy43bC0xMi41LTMwLjNjLTItNS05LjEwMS01LTExLjEwMSAwbC0xMi40IDMwLjNjLS44IDIuMS0yLjggMy41LTUgMy43bC0zNC45IDMuM2MtNS4yLjUtNy4zIDctMy40IDEwLjVsMjYuMyAyMy4xYzEuNyAxLjUgMi40IDMuNyAxLjkgNS45bC03LjkgMzIuMzk5Yy0xLjIgNS4xMDEgNC4zIDkuMyA4LjkgNi42MDFsMjkuMS0xNy4xMDFjMS45LTEuMSA0LjItMS4xIDYuMSAwbDI5LjEwMSAxNy4xMDFjNC42IDIuNjk5IDEwLjEtMS40IDguODk5LTYuNjAxbC03LjgtMzIuMzk5Yy0uNS0yLjIuMi00LjQgMS45LTUuOWwyNi4zLTIzLjFjMy44LTMuNSAxLjYtMTAtMy42LTEwLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNzYlO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB+IGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNmY2Q5M2EnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpub3QoOmNoZWNrZWQpIH4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmcgPiBpbnB1dDpub3QoOmNoZWNrZWQpIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyNi43MjknIGhlaWdodD0nMTI2LjczJyUzZSUzY3BhdGggZmlsbD0nJTIzZDhiMTFlJyBkPSdNMTIxLjIxNSA0NC4yMTJsLTM0Ljg5OS0zLjNjLTIuMi0uMi00LjEwMS0xLjYtNS0zLjdsLTEyLjUtMzAuM2MtMi01LTkuMTAxLTUtMTEuMTAxIDBsLTEyLjQgMzAuM2MtLjggMi4xLTIuOCAzLjUtNSAzLjdsLTM0LjkgMy4zYy01LjIuNS03LjMgNy0zLjQgMTAuNWwyNi4zIDIzLjFjMS43IDEuNSAyLjQgMy43IDEuOSA1LjlsLTcuOSAzMi4zOTljLTEuMiA1LjEwMSA0LjMgOS4zIDguOSA2LjYwMWwyOS4xLTE3LjEwMWMxLjktMS4xIDQuMi0xLjEgNi4xIDBsMjkuMTAxIDE3LjEwMWM0LjYgMi42OTkgMTAuMS0xLjQgOC44OTktNi42MDFsLTcuOC0zMi4zOTljLS41LTIuMi4yLTQuNCAxLjktNS45bDI2LjMtMjMuMWMzLjgtMy41IDEuNi0xMC0zLjYtMTAuNXonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5lbW9qaS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmVtb2ppLXdyYXBwZXI6YmVmb3JlLFxyXG4uZW1vamktd3JhcHBlcjphZnRlcntcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZW1vamktd3JhcHBlcjpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkgMzUlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5lbW9qaS13cmFwcGVyOmFmdGVye1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkgMzUlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5lbW9qaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uZW1vamkgPiBzdmcge1xyXG4gIG1hcmdpbjogMTVweCAwOyBcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbiNyYXRpbmctMTpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfVxyXG4jcmF0aW5nLTI6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7IH1cclxuI3JhdGluZy0zOmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpOyB9XHJcbiNyYXRpbmctNDpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwMHB4KTsgfVxyXG4jcmF0aW5nLTU6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7IH1cclxuXHJcbi5mZWVkYmFjayB7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QualificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qualification',
                templateUrl: './qualification.component.html',
                styleUrls: ['./qualification.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


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
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 36, vars: 0, consts: [[1, "icon"], ["href", "faqs"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "question-circle", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-question-circle", "fa-w-16"], ["fill", "currentColor", "d", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z", 1, ""], [1, "iconHome"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "home", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-home", "fa-w-18"], ["fill", "currentColor", "d", "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z", 1, ""], [2, "border", "2px solid black", "position", "relative", "margin-top", "12vh"], ["href", ""], [2, "border", "2px solid black"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mis playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Crear Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mis podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Canciones que me gustan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Escuchados recientemente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Recomendados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tendencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["aside[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 80vh;\n  background-color: burlywood;\n  border: 1px solid #010108;\n}\n\nnav[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 8vh;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 4vw;\n  float: left;\n  position: relative;\n  left: 1vw;\n}\n\n.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 4vh;\n}\n\n.iconHome[_ngcontent-%COMP%] {\n  width: 5vw;\n  float: left;\n  position: relative;\n  margin: auto;\n  text-align: center;\n}\n\n.iconHome[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: 6vh;\n  height: 5vh;\n  color: grey;\n}\n\nul[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2vh;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 2vh;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHSSxTQUFBO0VBRUEsWUFBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQUtBO0VBQ0UsVUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFJSTtFQUNFLFdBQUE7QUFGTjs7QUFLRTtFQUNFLFVBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFJSztFQUNHLGVBQUE7RUFDRCxXQUFBO0VBQ0EsV0FBQTtBQUZQOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXNpZGV7XHJcbiAgICAvL3Bvc2l0aW9uOmFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIC8vICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgLy9wYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kOy8vXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMSwgMSwgOCk7XHJcbn1cclxubmF2e1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6OHZoO1xyXG59XHJcbi5pY29uIHtcclxuICB3aWR0aDogNHZ3O1xyXG4gIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JlM2YyYjtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBsZWZ0OjF2dztcclxuICAgIHN2ZyB7XHJcbiAgICAgIGhlaWdodDogNHZoO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gIC5pY29uSG9tZSB7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG4gICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmUzZjJiO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW4tdG9wOjZ2aDtcclxuICAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICAgY29sb3I6Z3JleTtcclxuICAgICAgfSBcclxuICB9XHJcbiAgdWx7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206MnZoO1xyXG4gICAgbGl7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tdG9wOjJ2aDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICJdfQ== */"] });
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