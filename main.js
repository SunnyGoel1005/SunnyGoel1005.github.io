(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_editor_news_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-editor/news-editor.component */ "./src/app/news-editor/news-editor.component.ts");
/* harmony import */ var _precaution_precaution_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precaution/precaution.component */ "./src/app/precaution/precaution.component.ts");








var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: 'addNews', component: _news_editor_news_editor_component__WEBPACK_IMPORTED_MODULE_6__["NewsEditorComponent"] },
    { path: 'precautions', component: _precaution_precaution_component__WEBPACK_IMPORTED_MODULE_7__["PrecautionComponent"] },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet>\n  <app-navbar></app-navbar>\n</router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CovidTracking';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _news_editor_news_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news-editor/news-editor.component */ "./src/app/news-editor/news-editor.component.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _precaution_precaution_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./precaution/precaution.component */ "./src/app/precaution/precaution.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"],
                _news_editor_news_editor_component__WEBPACK_IMPORTED_MODULE_13__["NewsEditorComponent"],
                _precaution_precaution_component__WEBPACK_IMPORTED_MODULE_15__["PrecautionComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"] }, _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashBoardService"], _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_news_service__WEBPACK_IMPORTED_MODULE_14__["NewsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      .number-table {\r\n          font-size: 20px;\r\n          font-weight: bold\r\n      }\r\n  \r\n      .number-table-main {\r\n          font-size: 24px;\r\n          font-weight: bold\r\n      }\r\n  \r\n      .align-center{\r\n        text-align : center;\r\n      }\r\n  \r\n      .maincounter-number{\r\n        font-size: 50px;\r\n      }\r\n  \r\n      .source { }\r\n  \r\n      .style2 {\r\n          color: #FF0000\r\n      }\r\n  \r\n      .style4 {\r\n          color: #FF0000;\r\n          font-weight: bold;\r\n      }\r\n  \r\n      .style6 {\r\n          font-size: 12px;\r\n          color: #bbb;\r\n          font-weight: bold;\r\n      }\r\n  \r\n      .source1 {\r\n          font-size: 12px;\r\n          color: #bbb;\r\n      }\r\n  \r\n      .source1 {\r\n          font-size: 12px;\r\n          color: #bbb;\r\n      }\r\n  \r\n      .source11 {\r\n          font-size: 12px;\r\n          color: #bbb;\r\n      }\r\n  \r\n      .source111 {\r\n         \r\n      }\r\n  \r\n      .source1111 {\r\n          font-size: 12px;\r\n          color: #bbb;\r\n      }\r\n  \r\n      * {\r\n        box-sizing: border-box;\r\n      }\r\n  \r\n      body {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n      }\r\n  \r\n      /* Float four columns side by side */\r\n  \r\n      .column {\r\n        float: left;\r\n        width: 25%;\r\n        padding: 0 10px;\r\n      }\r\n  \r\n      /* Remove extra left and right margins, due to padding */\r\n  \r\n      .row {margin: 0 -5px; padding-top: 20px;}\r\n  \r\n      /* Clear floats after the columns */\r\n  \r\n      .row:after {\r\n        content: \"\";\r\n        display: table;\r\n        clear: both;\r\n      }\r\n  \r\n      /* Responsive columns */\r\n  \r\n      @media screen and (max-width: 600px) {\r\n        .column {\r\n          width: 100%;\r\n          display: block;\r\n          margin-bottom: 20px;\r\n        }\r\n      }\r\n  \r\n      /* Style the counter cards */\r\n  \r\n      .card {\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n        padding: 16px;\r\n       \r\n      }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtVQUNJLGVBQWU7VUFDZjtNQUNKOztNQUVBO1VBQ0ksZUFBZTtVQUNmO01BQ0o7O01BQ0E7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxlQUFlO01BQ2pCOztNQUVBLFVBQVU7O01BRVY7VUFDSTtNQUNKOztNQUVBO1VBQ0ksY0FBYztVQUNkLGlCQUFpQjtNQUNyQjs7TUFFQTtVQUNJLGVBQWU7VUFDZixXQUFXO1VBQ1gsaUJBQWlCO01BQ3JCOztNQUVBO1VBQ0ksZUFBZTtVQUNmLFdBQVc7TUFDZjs7TUFFQTtVQUNJLGVBQWU7VUFDZixXQUFXO01BQ2Y7O01BRUE7VUFDSSxlQUFlO1VBQ2YsV0FBVztNQUNmOztNQUFLOztNQUVMOztNQUFFO1VBQ0UsZUFBZTtVQUNmLFdBQVc7TUFDZjs7TUFJRjtRQUNJLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLHlDQUF5QztNQUMzQzs7TUFFQSxvQ0FBb0M7O01BQ3BDO1FBQ0UsV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlO01BQ2pCOztNQUVBLHdEQUF3RDs7TUFDeEQsTUFBTSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7O01BRXhDLG1DQUFtQzs7TUFDbkM7UUFDRSxXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7TUFDYjs7TUFFQSx1QkFBdUI7O01BQ3ZCO1FBQ0U7VUFDRSxXQUFXO1VBQ1gsY0FBYztVQUNkLG1CQUFtQjtRQUNyQjtNQUNGOztNQUVBLDRCQUE0Qjs7TUFDNUI7UUFDRSwwQ0FBMEM7UUFDMUMsYUFBYTs7TUFFZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgICAubnVtYmVyLXRhYmxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm51bWJlci10YWJsZS1tYWluIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICAgIH1cclxuICAgICAgLmFsaWduLWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbmNvdW50ZXItbnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc291cmNlIHsgfVxyXG4gIFxyXG4gICAgICAuc3R5bGUyIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkYwMDAwXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnN0eWxlNCB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zdHlsZTYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNiYmI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc291cmNlMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc291cmNlMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc291cmNlMTEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNiYmI7XHJcbiAgICAgIH0gICAgLnNvdXJjZTExMSB7XHJcbiAgICAgICAgIFxyXG4gICAgICB9IC5zb3VyY2UxMTExIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgICAgXHJcbiAgICAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogRmxvYXQgZm91ciBjb2x1bW5zIHNpZGUgYnkgc2lkZSAqL1xyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogUmVtb3ZlIGV4dHJhIGxlZnQgYW5kIHJpZ2h0IG1hcmdpbnMsIGR1ZSB0byBwYWRkaW5nICovXHJcbiAgICAgIC5yb3cge21hcmdpbjogMCAtNXB4OyBwYWRkaW5nLXRvcDogMjBweDt9XHJcbiAgICAgIFxyXG4gICAgICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAgICAgLnJvdzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogUmVzcG9uc2l2ZSBjb2x1bW5zICovXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFN0eWxlIHRoZSBjb3VudGVyIGNhcmRzICovXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"padding-top: 30px\" >\n  <div class=\"row\">\n    <div class=\"col col-md-4\" >\n        <div class=\"card mb-3\" style=\"height: 200px\">\n            <i class='fab fa-searchengin align-center' style='font-size:48px;color:darkblue'></i>\n          <div class=\"align-center  \"><h1>Total Cases</h1></div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title align-center\" style=\"color:#aaa\">{{totalCases}}</h3>\n          </div>\n        </div>\n    </div>\n    <div class=\"col col-md-4\">\n        <div class=\"card mb-3\" style=\"height: 200px\">\n          <i class='fas fa-heartbeat align-center' style='font-size:48px;color:red'></i>\n          <div class=\"align-center\"><h1>Deaths</h1></div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title align-center\" style=\"color:red \">{{deaths}}</h3>\n          </div>\n        </div>\n    </div>\n    <div class=\"col col-md-4\">\n        <div class=\"card  mb-3\" style=\"height: 200px\" >\n            <i class=\"fas fa-hand-holding-heart  align-center\" style=\"font-size:48px;color:#8ACA2B \"></i>\n          <div class=\"align-center\"><h1>Recovered</h1></div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title align-center\" style=\"color:#8ACA2B \">{{recovered}}</h3>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n   \n  <div class=\"container\" style=\"padding-top: 50px\">\n  <table mdbTable hover=\"true\" class=\"table table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th *ngFor=\"let head of stateHeadElements\" scope=\"col\" style=\"text-align: center\">{{head}}</th>\n      </tr>\n    </thead>\n    <tbody mdbTableCol *ngFor=\"let state of stateData\" >\n      <tr  data-toggle=\"collapse\" [attr.data-target]=\"'#' + state.statecode\" style=\"cursor: pointer\">\n        <th scope=\"row\" class=\"table-primary\" style=\"width: 10px;text-align: center\">{{state.state}}</th>\n        <td style=\"width: 10px;text-align: center\">{{state.active}}</td>\n        <td style=\"width: 10px;text-align: center\">{{state.confirmed}}</td>\n        <td style=\"width: 10px;text-align: center\">{{state.deaths}}</td>\n        <td style=\"width: 10px;text-align: center\">{{state.recovered}}</td>\n      </tr>\n      <tr >\n        <td colspan=\"6\" class=\"hiddenRow\" >\n          <div class=\"accordion-body collapse\" id=\"{{state.statecode}}\">\n              <table style=\"width: 98%\" class=\"rounded border border-dark\">\n                  <thead class=\"thead-dark\">\n                    <tr>\n                      <th *ngFor=\"let head of stateHeadElements\" scope=\"col\" style=\"text-align: center\">{{head}}</th>\n                    </tr>\n                  </thead>\n                  <tbody >\n                  \n                    <tr  *ngFor=\"let district of state.districtData\">\n                      <th scope=\"row\" class=\"table-info bg-light\" style=\"width: 10px;text-align: center\">{{district.name}}</th>\n                      <td style=\"width: 10px;text-align: center\">{{district.info.active}}</td>\n                      <td style=\"width: 10px;text-align: center\">{{district.info.confirmed}}</td>\n                      <td style=\"width: 10px;text-align: center\">{{district.info.deceased}}</td>\n                      <td style=\"width: 10px;text-align: center\">{{district.info.recovered}}</td>\n                    </tr>\n                   \n\n                  </tbody>\n                </table>\n          </div>\n        </td>\n      </tr>\n      \n    </tbody>\n  </table>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.stateHeadElements = ['State', 'Active Cases', 'Confirmed Cases', 'Deaths', 'Recovered'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCovidData();
        this.getDistrictData();
    };
    DashboardComponent.prototype.getCovidData = function () {
        var _this = this;
        this.dashboardService.getStatisticData()
            .subscribe(function (data) {
            _this.covidStatsData = data;
            _this.setData();
        });
    };
    DashboardComponent.prototype.setData = function () {
        var latestCasesdata = this.covidStatsData.cases_time_series[this.covidStatsData.cases_time_series.length - 1];
        this.totalCases = latestCasesdata.totalconfirmed;
        this.deaths = latestCasesdata.totaldeceased;
        this.recovered = latestCasesdata.totalrecovered;
        this.stateData = this.covidStatsData.statewise.splice(1, this.covidStatsData.statewise.length - 1);
        this.stateData.push(this.covidStatsData.statewise[0]);
    };
    DashboardComponent.prototype.getDistrictData = function () {
        var _this = this;
        this.dashboardService.getDistrictData()
            .subscribe(function (data) {
            var _loop_1 = function (state) {
                var districts = [];
                if (!(data[state.state] === undefined) && !(data[state.state].districtData === undefined)) {
                    Object.keys(data[state.state].districtData).map(function (key) {
                        districts.push({ name: [key], info: data[state.state].districtData[key] });
                        return districts;
                    });
                }
                state.districtData = districts;
            };
            for (var _i = 0, _a = _this.stateData; _i < _a.length; _i++) {
                var state = _a[_i];
                _loop_1(state);
            }
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashBoardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n  <div class=\"container page text-center border border-light p-5\">\n      <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n          <h1 class=\"text-xs-center\">Sign In</h1>\n          <p class=\"text-xs-center\">\n          <ul class=\"error-messages\">\n              <!-- <li v-for=\"error in errors\" :key=\"error\">{{error.message}}</li> -->\n          </ul>\n\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"wrongPassowordError\">\n               Username or Password is incorrect!!\n           </div>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <fieldset class=\"form-group\">\n                  <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"username\" formControlName=\"username\"> \n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                  </div>\n              </fieldset>\n              <fieldset class=\"form-group\">\n                  <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"password\" formControlName='password'>\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  </div>\n                </fieldset>\n              <button class=\"btn btn-info btn-block my-4\" type=\"submit\" [disabled]=\"loading\">Sign in</button>\n          </form>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, authService) {
        this.loginService = loginService;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loginService.getUsers().subscribe(function (usersList) {
            var isValidUser = _this.loginService.isValidUser(new _model_User__WEBPACK_IMPORTED_MODULE_4__["User"](_this.loginForm.value.username, _this.loginForm.value.password), usersList);
            if (isValidUser) {
                _this.authService.setLoggedInStatus('isAdminLoggedIn', 'true');
                _this.router.navigate(['news']);
            }
            else {
                _this.wrongPassowordErrorMessage();
            }
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.wrongPassowordErrorMessage = function () {
        var _this = this;
        this.wrongPassowordError = true;
        window.scroll(0, 0);
        setTimeout(function () {
            _this.wrongPassowordError = false;
        }, 3000);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/News.ts":
/*!*******************************!*\
  !*** ./src/app/model/News.ts ***!
  \*******************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
var News = /** @class */ (function () {
    function News(title, description, summary, message) {
        this.title = title;
        this.description = description;
        this.summary = summary;
        this.message = message;
    }
    return News;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <div class=\"label-counter text-white\" id=\"page-top\" style=\"background-color:rgb(85, 121, 238)\">\n      <div style=\"align-self: center\">\n       <h1 style=\"text-align: center; font-size: 70px ;font-family: Impact, Charcoal, sans-serif; text-shadow: 1px 1px 0 black, \n       2px 2px 0 black; margin: 0px\">  Coronavirus  &nbsp;&nbsp;<i class=\"fas fa-viruses\" style='font-size: 70px;color:red; font-stretch: ultra-expanded;'></i></h1>\n       <p style=\"text-align: center; font-size: 30px; text-shadow: 1px 1px 0 black, \n       2px 2px 0 black;\">Pandemic  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; </p>\n       </div>\n      </div>\n    <nav class=\"navbar navbar-expand-lg text-white\" style=\"background-color: crimson; \">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\" >\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link text-white\" routerLink=\"/dashboard\">DashBoard <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link text-white\" routerLink=\"/news\">Latest News</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link text-white\" routerLink=\"/precautions\">Precautions</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\n              <a class=\"nav-link text-white\" routerLink=\"/login\" >Login</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n              <a class=\"nav-link text-white\" (click)=\"logout()\" style=\"cursor: pointer\">Logout</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n              <a class=\"nav-link text-white\" routerLink=\"/addNews\">Add News</a>\n          </li>\n        </ul>\n      </div>\n    </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdminLoggedIn();
        this.authService.fireIsLoggedIn.subscribe(function (data) { return _this.isLoggedIn = data; });
    };
    NavbarComponent.prototype.isAdminLoggedIn = function () {
        this.isLoggedIn = this.authService.getLoggedInStatus('isAdminLoggedIn');
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.setLoggedInStatus('isAdminLoggedIn', 'false');
        this.isAdminLoggedIn();
        this.router.navigate(['login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news-editor/news-editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/news-editor/news-editor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZWRpdG9yL25ld3MtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/news-editor/news-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/news-editor/news-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form contact -->\n\n<div class=\"container page text-center border border-light  p-5\">\n  <div class=\"row \">\n    <div class=\"col-md-9 offset-md-2 col-xs-12\">\n      <div class=\"alert alert-success\" *ngIf = \"addNewsSuccess\" id=\"addNewsMessage\">\n        <strong>Success!</strong> News Added Successfully.\n      </div>\n      <form [formGroup]=\"newsForm\" (ngSubmit)=\"onSubmit()\" class=\"text-center border border-light p-5\">\n\n          <p class=\"h2 mb-4\">Add News</p>\n          <input type=\"text\" class=\"form-control mt-4 form-control-lg\" placeholder=\"Title\" formControlName=\"title\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\n          <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.title.errors.required\">Title is required</div>\n          </div>\n\n          <input type=\"text\" class=\"form-control mt-4 form-control-lg\" placeholder=\"Description\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\n          <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.description.errors.required\">Description is required</div>\n          </div>\n\n          <div class=\"form-group\">\n              <textarea class=\"form-control rounded-0 mt-4 form-control-lg\" rows=\"2\" placeholder=\"Summary\" formControlName=\"summary\"></textarea>\n          </div>\n          <div class=\"form-group\">\n              <textarea class=\"form-control rounded-0 form-control-lg\" rows=\"3\" placeholder=\"Message\" formControlName=\"message\" [ngClass]=\"{ 'is-invalid': submitted && f.message.errors }\"></textarea>\n              <div *ngIf=\"submitted && f.message.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.message.errors.required\">Message is required</div>\n              </div>\n          </div>\n         \n          <button class=\"btn btn-info btn-block form-control-lg\" [disabled]=\"loading\">Add</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news-editor/news-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/news-editor/news-editor.component.ts ***!
  \******************************************************/
/*! exports provided: NewsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEditorComponent", function() { return NewsEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _model_News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/News */ "./src/app/model/News.ts");





var NewsEditorComponent = /** @class */ (function () {
    function NewsEditorComponent(newsService) {
        this.newsService = newsService;
        this.addNewsSuccess = false;
        this.submitted = false;
    }
    NewsEditorComponent.prototype.ngOnInit = function () {
        this.newsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    Object.defineProperty(NewsEditorComponent.prototype, "f", {
        get: function () { return this.newsForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewsEditorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.newsForm.invalid) {
            return;
        }
        this.newsService.getNews().subscribe(function (newsList) {
            _this.newsService.addNews(new _model_News__WEBPACK_IMPORTED_MODULE_4__["News"](_this.newsForm.value.title, _this.newsForm.value.description, _this.newsForm.value.summary, _this.newsForm.value.message), newsList)
                .subscribe(function (a) {
                _this.newsForm.reset();
                _this.submitted = false;
                _this.showNewsSuccessMessage();
            });
        });
    };
    NewsEditorComponent.prototype.showNewsSuccessMessage = function () {
        var _this = this;
        this.addNewsSuccess = true;
        window.scroll(0, 0);
        setTimeout(function () {
            _this.addNewsSuccess = false;
        }, 3000);
    };
    NewsEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-editor',
            template: __webpack_require__(/*! ./news-editor.component.html */ "./src/app/news-editor/news-editor.component.html"),
            styles: [__webpack_require__(/*! ./news-editor.component.css */ "./src/app/news-editor/news-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], NewsEditorComponent);
    return NewsEditorComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container page text-center border border-light p-5\">\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12 order-lg-2 order-xl-1\">\n      <div class=\"card\">\n          <div class=\"card-body\">\n              <h2 class=\"header-title mt-2 bg-light text-black \">Latest News</h2>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-centered table-nowrap table-hover mb-0\">\n                      <tbody>\n                          <tr *ngFor=\"let news of newsList\">\n                              <td>\n                                  <h3 class=\"font-14 my-1 font-weight-norma p-3 mb-2 bg-info text-white\">{{news.title}}</h3>\n                                  <h5 class=\"text-muted font-13\">{{news.description}}</h5>\n                                  <p class=\"bg-light\">{{news.message}}</p>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService.getNews().subscribe(function (newsList) {
            _this.newsList = newsList;
        });
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/precaution/precaution.component.css":
/*!*****************************************************!*\
  !*** ./src/app/precaution/precaution.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    * {\r\n      box-sizing: border-box;\r\n    }\r\n    \r\n    body {\r\n      font-family: Arial, Helvetica, sans-serif;\r\n    }\r\n    \r\n    /* Float four columns side by side */\r\n    \r\n    .column {\r\n      float: left;\r\n      width: 25%;\r\n      padding: 0 10px;\r\n    }\r\n    \r\n    /* Remove extra left and right margins, due to padding */\r\n    \r\n    .row {margin: 0 -5px; padding-top: 20px;}\r\n    \r\n    /* Clear floats after the columns */\r\n    \r\n    .row:after {\r\n      content: \"\";\r\n      display: table;\r\n      clear: both;\r\n    }\r\n    \r\n    /* Responsive columns */\r\n    \r\n    @media screen and (max-width: 600px) {\r\n      .column {\r\n        width: 100%;\r\n        display: block;\r\n        margin-bottom: 20px;\r\n      }\r\n    }\r\n    \r\n    /* Style the counter cards */\r\n    \r\n    .card {\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n      padding: 16px;\r\n      background-color: #f1f1f1;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlY2F1dGlvbi9wcmVjYXV0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UseUNBQXlDO0lBQzNDOztJQUVBLG9DQUFvQzs7SUFDcEM7TUFDRSxXQUFXO01BQ1gsVUFBVTtNQUNWLGVBQWU7SUFDakI7O0lBRUEsd0RBQXdEOztJQUN4RCxNQUFNLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQzs7SUFFeEMsbUNBQW1DOztJQUNuQztNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2QsV0FBVztJQUNiOztJQUVBLHVCQUF1Qjs7SUFDdkI7TUFDRTtRQUNFLFdBQVc7UUFDWCxjQUFjO1FBQ2QsbUJBQW1CO01BQ3JCO0lBQ0Y7O0lBRUEsNEJBQTRCOztJQUM1QjtNQUNFLDBDQUEwQztNQUMxQyxhQUFhO01BQ2IseUJBQXlCO0lBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJlY2F1dGlvbi9wcmVjYXV0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgICoge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBib2R5IHtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIEZsb2F0IGZvdXIgY29sdW1ucyBzaWRlIGJ5IHNpZGUgKi9cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBSZW1vdmUgZXh0cmEgbGVmdCBhbmQgcmlnaHQgbWFyZ2lucywgZHVlIHRvIHBhZGRpbmcgKi9cclxuICAgIC5yb3cge21hcmdpbjogMCAtNXB4OyBwYWRkaW5nLXRvcDogMjBweDt9XHJcbiAgICBcclxuICAgIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gICAgLnJvdzphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogUmVzcG9uc2l2ZSBjb2x1bW5zICovXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAuY29sdW1uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFN0eWxlIHRoZSBjb3VudGVyIGNhcmRzICovXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/precaution/precaution.component.html":
/*!******************************************************!*\
  !*** ./src/app/precaution/precaution.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n  <div class=\"row\" *ngFor=\"let precaution of precautionList\">\n    <div class=\"col col-md-4\">\n    \n    <div class=\"card img-fluid bg-warning\" style=\"width:500px\">\n      <img class=\"card-img-top\" src=\"{{precaution.imageUrl}}\" alt=\"Card image\" height=\"250px\" >\n      <div class=\"card-img-overlay\"> \n    \n    </div>\n            </div>\n        </div>\n        <div class=\"col col-md-8\">\n            <div class=\"card bg-gradient-success\" style=\"height:285px\">\n              <h4 class=\"card-title card-title h3 mb-2 text-left\">{{precaution.heading}}</h4>\n                \n              <ul *ngFor=\"let con of precaution.content\">\n                <li>{{con}}</li>\n              </ul>\n            </div>\n           \n        </div>\n    </div>\n    \n</div>\n  \n  "

/***/ }),

/***/ "./src/app/precaution/precaution.component.ts":
/*!****************************************************!*\
  !*** ./src/app/precaution/precaution.component.ts ***!
  \****************************************************/
/*! exports provided: PrecautionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecautionComponent", function() { return PrecautionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");



var PrecautionComponent = /** @class */ (function () {
    function PrecautionComponent(newsService) {
        this.newsService = newsService;
    }
    PrecautionComponent.prototype.ngOnInit = function () {
        this.getPrecautions();
    };
    PrecautionComponent.prototype.getPrecautions = function () {
        var _this = this;
        this.newsService.getPrecautions().subscribe(function (precautionList) { return _this.precautionList = precautionList; });
    };
    PrecautionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-precaution',
            template: __webpack_require__(/*! ./precaution.component.html */ "./src/app/precaution/precaution.component.html"),
            styles: [__webpack_require__(/*! ./precaution.component.css */ "./src/app/precaution/precaution.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], PrecautionComponent);
    return PrecautionComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.fireIsLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthService.prototype.setLoggedInStatus = function (key, value) {
        this.fireIsLoggedIn.emit(value);
        sessionStorage.setItem(key, value);
    };
    AuthService.prototype.getLoggedInStatus = function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AuthService.prototype, "fireIsLoggedIn", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardService", function() { return DashBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DashBoardService = /** @class */ (function () {
    function DashBoardService(http) {
        this.http = http;
        this.statsUrl = 'https://api.covid19india.org/data.json';
        this.districtDataUrl = 'https://api.covid19india.org/state_district_wise.json';
    }
    DashBoardService.prototype.getStatisticData = function () {
        return this.http.get(this.statsUrl);
    };
    DashBoardService.prototype.getDistrictData = function () {
        return this.http.get(this.districtDataUrl);
    };
    DashBoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashBoardService);
    return DashBoardService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = 'https://my-covid-ap.herokuapp.com';
        this.usersUrl = '/users'; // URL to web api
    }
    LoginService.prototype.ngOnInit = function () {
    };
    LoginService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + this.usersUrl);
    };
    LoginService.prototype.isValidUser = function (loggedInUser, userList) {
        var isValid = false;
        userList.forEach(function (user) {
            if (user.username == loggedInUser.username && user.password == loggedInUser.password) {
                isValid = true;
            }
        });
        return isValid;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.baseUrl = 'https://my-covid-ap.herokuapp.com';
        this.newsUrl = '/news';
        this.precautionUrl = '/precautions';
    }
    NewsService.prototype.ngOnInit = function () {
    };
    NewsService.prototype.getNews = function () {
        return this.http.get(this.baseUrl + this.newsUrl);
    };
    NewsService.prototype.addNews = function (news, newsList) {
        news.id = this.newsIdGenerator(newsList.length);
        return this.http.post(this.baseUrl + this.newsUrl, news, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Method': 'POST'
            })
        });
    };
    NewsService.prototype.newsIdGenerator = function (id) {
        return id + 1;
    };
    NewsService.prototype.getPrecautions = function () {
        return this.http.get(this.baseUrl + this.precautionUrl);
    };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NAGP\Angular\CovidTracking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map