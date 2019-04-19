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

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align {\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsIFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dash-header pageTitle=\"Biz Technosys\" imageUrl=\"dashboard-black\" helpType=\"homepage\"></dash-header>\n<mat-tab-group class=\"tab-group\">\n    <mat-tab label=\"AboutUs\">\n        <mat-card>\n            <mat-card-content>\n               <pre>\n                    Why Biztechnosys\n \n\n                    Biztechnosys is an established IT Firm with over 4 years in developing and optimizing Web apps and Databases especially in the Cloud and Microsoft Azure Areas.\n                    \n                    We successfully served more than 100 small and medium sized business customers. Our team of over 50 employees specialize in Umbraco, Azure, Database Optimization, Application Optimization, etc. Most of our employees have multiple certifications in their areas of expertise. So far we delivered over 250 projects spanning DB Optimization, App optimization, App Development, Umbracro Development and Azure related projects.\n                    \n                    Our core IT Business consultation services include.\n                    \n                      1) Designing and architecting your web and mobile apps\n                    \n                      2) Simplifying your business processes and improving the user experience\n                    \n                      3) Providing efficient solutions that satisfy your business requirement besides value added services.\n               </pre>\n            </mat-card-content>\n            \n        </mat-card>\n    </mat-tab>\n           \n</mat-tab-group>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/login/signup.component */ "./src/app/shared/login/signup.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _setup_jobcode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setup/jobcode.component */ "./src/app/setup/jobcode.component.ts");
/* harmony import */ var _setup_leavecode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setup/leavecode.component */ "./src/app/setup/leavecode.component.ts");
/* harmony import */ var _setup_salarycode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setup/salarycode.component */ "./src/app/setup/salarycode.component.ts");
/* harmony import */ var _manage_voucher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage/voucher.component */ "./src/app/manage/voucher.component.ts");
/* harmony import */ var _manage_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage/employee.component */ "./src/app/manage/employee.component.ts");
/* harmony import */ var _manage_salary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage/salary.component */ "./src/app/manage/salary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// setup pages



// manage pages



var routes = [
    { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
    { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"] },
    { path: 'login', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'jobcode', component: _setup_jobcode_component__WEBPACK_IMPORTED_MODULE_7__["JobCodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'leavecode', component: _setup_leavecode_component__WEBPACK_IMPORTED_MODULE_8__["LeaveCodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'salarycode', component: _setup_salarycode_component__WEBPACK_IMPORTED_MODULE_9__["SalaryCodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'voucher', component: _manage_voucher_component__WEBPACK_IMPORTED_MODULE_10__["VoucherComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'employee', component: _manage_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'salary/:id', component: _manage_salary_component__WEBPACK_IMPORTED_MODULE_12__["SalaryComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'salary', component: _manage_salary_component__WEBPACK_IMPORTED_MODULE_12__["SalaryComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    //{ path: 'jobcode-search', component: JobCodeSrchComponent, canActivate: [AuthGuard] },
    //{ path: 'jobcode-add', component: JobCodeAddComponent, canActivate: [AuthGuard] },
    //{ path: 'jobcode-edit/:id', component: JobCodeSrchComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n<footer></footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_elish_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/elish.material.module */ "./src/app/shared/elish.material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_header_dash_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/header/dash.header.component */ "./src/app/shared/header/dash.header.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _shared_helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/helpdesk/helpdesk.component */ "./src/app/shared/helpdesk/helpdesk.component.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/backend-service */ "./src/app/services/backend-service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/login/signup.component */ "./src/app/shared/login/signup.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _setup_jobcode_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setup/jobcode.component */ "./src/app/setup/jobcode.component.ts");
/* harmony import */ var _setup_leavecode_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./setup/leavecode.component */ "./src/app/setup/leavecode.component.ts");
/* harmony import */ var _setup_salarycode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./setup/salarycode.component */ "./src/app/setup/salarycode.component.ts");
/* harmony import */ var _manage_voucher_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manage/voucher.component */ "./src/app/manage/voucher.component.ts");
/* harmony import */ var _manage_employee_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./manage/employee.component */ "./src/app/manage/employee.component.ts");
/* harmony import */ var _manage_salary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manage/salary.component */ "./src/app/manage/salary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// setup pages



// manage pages



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _shared_header_dash_header_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHeaderComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"],
                _shared_helpdesk_helpdesk_component__WEBPACK_IMPORTED_MODULE_12__["HelpdeskComponent"],
                _shared_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
                _setup_jobcode_component__WEBPACK_IMPORTED_MODULE_18__["JobCodeComponent"],
                _setup_leavecode_component__WEBPACK_IMPORTED_MODULE_19__["LeaveCodeComponent"],
                _setup_salarycode_component__WEBPACK_IMPORTED_MODULE_20__["SalaryCodeComponent"],
                _manage_voucher_component__WEBPACK_IMPORTED_MODULE_21__["VoucherComponent"],
                _manage_employee_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeComponent"],
                _manage_salary_component__WEBPACK_IMPORTED_MODULE_23__["SalaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                _shared_elish_material_module__WEBPACK_IMPORTED_MODULE_2__["ElishCustomMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_13__["BackendService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/manage/employee.component.html":
/*!************************************************!*\
  !*** ./src/app/manage/employee.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Employee\" imageUrl=\"star\" helpType=\"employeepage\"></header>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(CODE.value == '' && DESCR.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Employee ID\" id=\"CODE\" name=\"CODE\" #CODE=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Employee First Name\" id=\"DESCR\" name=\"DESCR\" #DESCR=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Personal data (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Name and Personal Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n    <mat-form-field>\n        <input matInput placeholder=\"Employee ID\" name=\"CODE\" id=\"CODE\" ngModel required minlength=\"2\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Employee Secret Key\" name=\"SKEY\" id=\"SKEY\" ngModel required minlength=\"2\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"First name\" name=\"DESCR\" id=\"DESCR\" ngModel required minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" ngModel required minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" ngModel required>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Spouse's name\" name=\"SPOUSE_NAME\" id=\"SPOUSE_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Spouse Date of Birth\" type=\"date\" name=\"SDOB\" id=\"SDOB\" ngModel>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Address\n        </mat-panel-title>\n        <mat-panel-description>\n          Contact Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Qualifications\n        </mat-panel-title>\n        <mat-panel-description>\n          Performance Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" ngModel>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          References\n        </mat-panel-title>\n        <mat-panel-description>\n          References Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" ngModel minlength=\"4\">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          HR (*)\n        </mat-panel-title>\n        <mat-panel-description>\n          Compensation Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <mat-select placeholder=\"Job Code\" name=\"JOB_CODE\" id=\"JOB_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of jobCDs\" [value]=\"code._id\">\n              {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Salary Code\" name=\"SALARY_CODE\" id=\"SALARY_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of salCDs\" [value]=\"code._id\">\n            {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Leave Code\" name=\"LEAVE_CODE\" id=\"LEAVE_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of leaveCDs\" [value]=\"code._id\">\n            {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-expansion-panel>\n  </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Personal data (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Name and Personal Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Employee ID\" name=\"CODE\" id=\"CODE\" [ngModel]=\"data.CODE\" required minlength=\"2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n              <input matInput placeholder=\"Employee Secret Key\" name=\"SKEY\" id=\"SKEY\" [ngModel]=\"data.SKEY\" required minlength=\"2\">\n            </mat-form-field>\n            <br>\n          <mat-form-field>\n            <input matInput placeholder=\"First name\" name=\"DESCR\" id=\"DESCR\" [ngModel]=\"data.DESCR\" required minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" [ngModel]=\"data.MIDDLE_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" [ngModel]=\"data.LAST_NAME\" required minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" [ngModel]=\"data.DOB\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" [ngModel]=\"data.FATHER_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" [ngModel]=\"data.MOTHER_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Spouse's name\" name=\"SPOUSE_NAME\" id=\"SPOUSE_NAME\" [ngModel]=\"data.SPOUSE_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Spouse Date of Birth\" type=\"date\" name=\"SDOB\" id=\"SDOB\" [ngModel]=\"data.SDOB\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Address\n            </mat-panel-title>\n            <mat-panel-description>\n              Contact Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" [ngModel]=\"data.ADD_TYPE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" [ngModel]=\"data.ADD_LINE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" [ngModel]=\"data.ADD_LINE_2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" [ngModel]=\"data.PIN_CODE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" [ngModel]=\"data.STATE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" [ngModel]=\"data.COUNTRY\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" [ngModel]=\"data.ADD_TYPE_2\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" [ngModel]=\"data.ADD_LINE_12\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" [ngModel]=\"data.ADD_LINE_22\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" [ngModel]=\"data.PIN_CODE2\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" [ngModel]=\"data.STATE2\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" [ngModel]=\"data.COUNTRY2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" [ngModel]=\"data.MOBILE1\" phone minlength=\"10\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" [ngModel]=\"data.MOBILE2\" phone minlength=\"10\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" [ngModel]=\"data.EMAIL1\" phone minlength=\"10\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" [ngModel]=\"data.EMAIL2\" phone minlength=\"10\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Qualifications\n            </mat-panel-title>\n            <mat-panel-description>\n              Performance Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" [ngModel]=\"data.DEGREE\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" [ngModel]=\"data.COLLEGE\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" [ngModel]=\"data.ADD_LINE_C1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" [ngModel]=\"data.ADD_LINE_C2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" [ngModel]=\"data.PIN_CODE_C\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" [ngModel]=\"data.STATE_C\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" [ngModel]=\"data.COUNTRY_C\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              References\n            </mat-panel-title>\n            <mat-panel-description>\n              References Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" [ngModel]=\"data.REFERENCE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" [ngModel]=\"data.REFERENCE_1_ADD\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" [ngModel]=\"data.REFERENCE_2\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" [ngModel]=\"data.REFERENCE_2_ADD\" minlength=\"4\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              HR (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Compensation Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <mat-select placeholder=\"Job Code\" name=\"JOB_CODE\" id=\"JOB_CODE\" [ngModel]=\"data.JOB_CODE\" required>\n              <mat-option *ngFor=\"let code of jobCDs\" [value]=\"code._id\">\n                  {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Salary Code\" name=\"SALARY_CODE\" id=\"SALARY_CODE\" [ngModel]=\"data.SALARY_CODE\" required>\n              <mat-option *ngFor=\"let code of salCDs\" [value]=\"code._id\">\n                  {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Leave Code\" name=\"LEAVE_CODE\" id=\"LEAVE_CODE\" [ngModel]=\"data.LEAVE_CODE\" required>\n              <mat-option *ngFor=\"let code of leaveCDs\" [value]=\"code._id\">\n                {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"CODE\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Employee ID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.CODE}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"DESCR\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.DESCR}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Salary\">\n            <!-- <button mat-icon-button routerLink=\"/salary/{{row._id}}\">\n              <mat-icon color=\"primary\" svgIcon=\"salary\"></mat-icon>\n            </button> -->\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/manage/employee.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manage/employee.component.ts ***!
  \**********************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animations */ "./src/app/shared/router.animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['CODE', 'DESCR', '_id'];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.members);
        this.getJobData();
        this.getLeaveData();
        this.getSalData();
    };
    EmployeeComponent.prototype.toggle = function (filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    EmployeeComponent.prototype.getLeaveData = function () {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getLeaveCode().subscribe(function (res) {
            if (res["data"]["getLeaveCode_Q"].code !== "") {
                _this.leaveCDs = res["data"]["getLeaveCode_Q"];
                _this.error = false;
                _this.errorMessage = "";
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    EmployeeComponent.prototype.getSalData = function () {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getSalaryCode().subscribe(function (res) {
            if (res["data"]["getSalaryCode_Q"].code !== "") {
                _this.salCDs = res["data"]["getSalaryCode_Q"];
                _this.error = false;
                _this.errorMessage = "";
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    EmployeeComponent.prototype.getJobData = function () {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getJobCode().subscribe(function (res) {
            if (res["data"]["getJobCode_Q"].code !== "") {
                _this.jobCDs = res["data"]["getJobCode_Q"];
                _this.error = false;
                _this.errorMessage = "";
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    EmployeeComponent.prototype.getData = function (filterAllDocs, getOneDoc) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEmployee(filterAllDocs, getOneDoc).subscribe(function (res) {
            if (res["data"]["getEmployee_Q"].CODE !== "") {
                if (getOneDoc) {
                    _this.data = res["data"]["getEmployee_Q"][0];
                    _this.toggle('editMode');
                }
                else {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res["data"]["getEmployee_Q"]);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getEmployee_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    EmployeeComponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEmployee(formData).subscribe(function (res) {
            if (res["data"]["setEmployee_M"].CODE !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setEmployee_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    EmployeeComponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEmployeeDoc(formData).subscribe(function (res) {
            if (res["data"]["setEmployeeDoc_M"].CODE !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setEmployeeDoc_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    EmployeeComponent.prototype.getDoc = function (docId) {
        this.getData("", docId);
    };
    EmployeeComponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delEmployeeDoc(docId).subscribe(function (res) {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delEmployeeDoc_M"]) {
                    _this.toggle('searchMode');
                    _this.error = false;
                    _this.errorMessage = "";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["data"]["delEmployeeDoc_M"].message;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    //mat table paginator and filter functions
    EmployeeComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    EmployeeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EmployeeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EmployeeComponent.prototype, "sort", void 0);
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/manage/employee.component.html"),
            animations: [Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/manage/salary.component.html":
/*!**********************************************!*\
  !*** ./src/app/manage/salary.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Salary Voucher\" imageUrl=\"business\" helpType=\"salarypage\"></header>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Search Employee and Create Salary Voucher\">\n            <mat-icon color=\"primary\" routerLink=\"/employee\" svgIcon=\"salary\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Salary Voucher #\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Description\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Create Salary Voucher</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"emplid\" required>\n      <input type=\"hidden\" formControlName=\"emplskey\" required>\n      <input type=\"hidden\" formControlName=\"empldescr\" required>\n      <input type=\"hidden\" formControlName=\"empllastname\" required>\n      <input type=\"hidden\" formControlName=\"emplsalcode\" required>\n      <b>Employee Name: </b> {{ this.addDataForm.value.empldescr }} {{this.addDataForm.value.empllastname}} <b>Secret Key: </b> {{this.addDataForm.value.emplskey}}\n      <br/><br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddata\" required>\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Voucher #\" formControlName=\"code\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Description\" formControlName=\"descr\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('addDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n            </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>&nbsp;\n        <span matTooltip=\"Shwo Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"onPrint()\"><i class=\"material-icons\">print</i></mat-icon>\n          </span>\n        <!-- <button mat-menu-item (click)=\"onPrint()\"><i class=\"material-icons\">print</i></button> -->\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"emplid\" required>\n      <input type=\"hidden\" formControlName=\"emplskey\" required>\n      <input type=\"hidden\" formControlName=\"empldescr\" required>\n      <input type=\"hidden\" formControlName=\"empllastname\" required>\n      <input type=\"hidden\" formControlName=\"emplsalcode\" required>\n      <b>Employee Name: </b> {{ this.editDataForm.value.empldescr }} {{this.editDataForm.value.empllastname}} <b>Secret Key: </b> {{this.editDataForm.value.emplskey}} \n      <br/><br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddata\" required>\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Voucher #\" formControlName=\"code\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Description\" formControlName=\"descr\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n            </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Search Employee and Create Salary Voucher\">\n      <mat-icon color=\"primary\" routerLink=\"/employee\" svgIcon=\"salary\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Salary Voucher #</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"emplid\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>EmployeeID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.emplid}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"empldescr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.empldescr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"empllastname\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.empllastname}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"paiddata\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>PaidDate</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.paiddata}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/manage/salary.component.ts":
/*!********************************************!*\
  !*** ./src/app/manage/salary.component.ts ***!
  \********************************************/
/*! exports provided: SalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryComponent", function() { return SalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalaryComponent = /** @class */ (function () {
    function SalaryComponent(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Allowance', 'Deduction'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', 'emplid', 'empldescr', 'empllastname', 'paiddata', '_id'];
    }
    SalaryComponent.prototype.ngOnInit = function () {
        var id = this._router.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.toggleField = (!id) ? "searchMode" : "addMode";
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            line: this._fb.array([]),
            /**
            line: this._fb.array([this._fb.group({
                frequency: ['', Validators.required],
                ptype: ['', Validators.required],
                payval: ['', Validators.required],
                amount: ['', [Validators.pattern("^[0-9]*$")]]
            })]),
            */
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    };
    SalaryComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEmployee("", id).subscribe(function (res) {
            _this.addDataForm.controls["emplid"].patchValue(res["data"]["getEmployee_Q"][0]._id);
            _this.addDataForm.controls["emplskey"].patchValue(res["data"]["getEmployee_Q"][0].SKEY);
            _this.addDataForm.controls["empldescr"].patchValue(res["data"]["getEmployee_Q"][0].DESCR);
            _this.addDataForm.controls["empllastname"].patchValue(res["data"]["getEmployee_Q"][0].LAST_NAME);
            _this.addDataForm.controls["emplsalcode"].patchValue(res["data"]["getEmployee_Q"][0].SALARY_CODE);
            _this._backendService.getSalaryCode("", res["data"]["getEmployee_Q"][0].SALARY_CODE).subscribe(function (res) {
                if (res["data"]["getSalaryCode_Q"].code !== "") {
                    _this.data = res["data"]["getSalaryCode_Q"][0];
                    _this.addDataForm.patchValue(_this.data);
                    _this.addDataForm.controls["code"].patchValue("");
                    for (var i = 0; i < _this.data["line"].length; i++) {
                        _this.LINES('addDataForm').push(_this._fb.group(_this.data["line"][i]));
                    }
                    _this.calculateTotal(('addDataForm'));
                }
            });
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryComponent.prototype.LINES = function (formName) {
        return this[formName].get('line');
    };
    SalaryComponent.prototype.addLINES = function (formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    };
    SalaryComponent.prototype.deleteLINES = function (index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    };
    SalaryComponent.prototype.calculateTotal = function (formName) {
        this.total_amount = 0;
        for (var i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Allowance') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    };
    SalaryComponent.prototype.toggle = function (filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    SalaryComponent.prototype.getData = function (filterAllDocs, getOneDoc) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getSalaryVoucher(filterAllDocs, getOneDoc).subscribe(function (res) {
            if (res["data"]["getSalaryVoucher_Q"].code !== "") {
                if (getOneDoc) {
                    _this.data = res["data"]["getSalaryVoucher_Q"][0];
                    _this.editDataForm = _this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        line: _this._fb.array([]),
                        gamount: ''
                    });
                    _this.editDataForm.patchValue(_this.data);
                    for (var i = 0; i < _this.data["line"].length; i++) {
                        _this.LINES('editDataForm').push(_this._fb.group(_this.data["line"][i]));
                    }
                    _this.calculateTotal(('editDataForm'));
                    _this.toggle('editMode');
                }
                else {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res["data"]["getSalaryVoucher_Q"]);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getSalaryVoucher_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryComponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryVoucher(formData).subscribe(function (res) {
            if (res["data"]["setSalaryVoucher_M"].code != "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setSalaryVoucher_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryComponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryVoucherDoc(formData).subscribe(function (res) {
            if (res["data"]["setSalaryVoucherDoc_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setSalaryVoucherDoc_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryComponent.prototype.getDoc = function (docId) {
        this.getData("", docId);
    };
    SalaryComponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delSalaryVoucherDoc(docId).subscribe(function (res) {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delSalaryVoucherDoc_M"]) {
                    _this.toggle('searchMode');
                    _this.error = false;
                    _this.errorMessage = "";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["data"]["delSalaryVoucherDoc_M"].message;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    //mat table paginator and filter functions
    SalaryComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SalaryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    SalaryComponent.prototype.ngOnDestroy = function () {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    SalaryComponent.prototype.onPrint = function () {
        window.print();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SalaryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SalaryComponent.prototype, "sort", void 0);
    SalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'salary',
            template: __webpack_require__(/*! ./salary.component.html */ "./src/app/manage/salary.component.html")
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SalaryComponent);
    return SalaryComponent;
}());



/***/ }),

/***/ "./src/app/manage/voucher.component.html":
/*!***********************************************!*\
  !*** ./src/app/manage/voucher.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Voucher\" imageUrl=\"business\" helpType=\"voucherpage\"></header>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(CODE.value == '' && DESCR.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Voucher Id\" id=\"CODE\" name=\"CODE\" #CODE=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Voucher Descr\" id=\"DESCR\" name=\"DESCR\" #DESCR=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              ID (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Voucher Header Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher ID\" formControlName=\"CODE\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Descr\" formControlName=\"DESCR\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" formControlName=\"TYPE\" required>\n              <mat-option *ngFor=\"let code of typeCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" formControlName=\"STATUS\" required>\n              <mat-option *ngFor=\"let code of statusCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Vendor\n            </mat-panel-title>\n            <mat-panel-description>\n              Address/Invoice Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Invoice #\" formControlName=\"INVOICE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Vendor Name\" formControlName=\"VENDOR\">\n          </mat-form-field>\n          <div formArrayName=\"ADDRESS\">\n            <div *ngFor=\"let item of ADDRESSES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" formControlName=\"ADD_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" formControlName=\"ADD_LINE_1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" formControlName=\"ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" formControlName=\"PIN_CODE\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" formControlName=\"STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"COUNTRY\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteADDRESSES(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addADDRESSES('addDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"PHONE\">\n            <div *ngFor=\"let item of PHONES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone Type\" formControlName=\"PHONE_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone #\" formControlName=\"PHONE_NUMBER\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deletePHONES(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addPHONES('addDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"EMAILID\">\n            <div *ngFor=\"let item of EMAILIDS('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email Type\" formControlName=\"EMAIL_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email ID\" formControlName=\"EMAILID\" email>\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteEMAILS(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addEMAILS('addDataForm')\"></mat-icon>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Dates\n            </mat-panel-title>\n            <mat-panel-description>\n              Important Dates\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Entered Date\" type=\"date\" formControlName=\"EDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Received Date\" type=\"date\" formControlName=\"RDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Due Date\" type=\"date\" formControlName=\"DDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Paid Date\" type=\"date\" formControlName=\"PDATE\">\n          </mat-form-field>\n          <br>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Line (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Amout/Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div formArrayName=\"LINE\">\n            <div *ngFor=\"let item of LINES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Line #/Code\" formControlName=\"LINE_NUM\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Description\" formControlName=\"LINE_NAME\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"AMOUNT\" required pattern=\"^\\d*\\.?\\d+$\">\n              </mat-form-field>\n              <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n            </div>\n            <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"GAMOUNT\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"GAMOUNT_DISC_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.GAMOUNT_DISC_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Discount %\" formControlName=\"DISC_G_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discount Amount\" formControlName=\"DISC_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-divider></mat-divider>\n          <mat-radio-group formControlName=\"TAX_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.TAX_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tax %\" formControlName=\"TAX_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tax Amount\" formControlName=\"TAX_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"SHIP_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.SHIP_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Shipping %\" formControlName=\"SHIP_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Shipping Amount\" formControlName=\"SHIP_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Final Amount\" formControlName=\"FINAL_AMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Paid Amount\" formControlName=\"PAID_AMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Balance\" formControlName=\"BALANCE\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              ID (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Voucher Header Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher ID\" formControlName=\"CODE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Descr\" formControlName=\"DESCR\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" formControlName=\"TYPE\">\n              <mat-option *ngFor=\"let code of typeCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" formControlName=\"STATUS\">\n              <mat-option *ngFor=\"let code of statusCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Vendor\n            </mat-panel-title>\n            <mat-panel-description>\n              Address/Invoice Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Invoice #\" formControlName=\"INVOICE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Vendor Name\" formControlName=\"VENDOR\">\n          </mat-form-field>\n          <div formArrayName=\"ADDRESS\">\n            <div *ngFor=\"let item of editDataForm.get('ADDRESS').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" formControlName=\"ADD_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" formControlName=\"ADD_LINE_1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" formControlName=\"ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" formControlName=\"PIN_CODE\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" formControlName=\"STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"COUNTRY\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteADDRESSES(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addADDRESSES('editDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"PHONE\">\n            <div *ngFor=\"let item of editDataForm.get('PHONE').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone Type\" formControlName=\"PHONE_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone #\" formControlName=\"PHONE_NUMBER\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deletePHONES(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addPHONES('editDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"EMAILID\">\n            <div *ngFor=\"let item of editDataForm.get('EMAILID').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email Type\" formControlName=\"EMAIL_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email ID\" formControlName=\"EMAILID\" email>\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteEMAILS(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addEMAILS('editDataForm')\"></mat-icon>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Dates\n            </mat-panel-title>\n            <mat-panel-description>\n              Important Dates\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Entered Date\" type=\"date\" formControlName=\"EDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Received Date\" type=\"date\" formControlName=\"RDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Due Date\" type=\"date\" formControlName=\"DDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Paid Date\" type=\"date\" formControlName=\"PDATE\">\n          </mat-form-field>\n          <br>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Line (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Amout/Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div formArrayName=\"LINE\">\n            <div *ngFor=\"let item of editDataForm.get('LINE').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Line #/Code\" formControlName=\"LINE_NUM\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Description\" formControlName=\"LINE_NAME\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"AMOUNT\" required pattern=\"^\\d*\\.?\\d+$\">\n              </mat-form-field>\n              <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n            </div>\n            <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"GAMOUNT\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"GAMOUNT_DISC_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.GAMOUNT_DISC_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Discount %\" formControlName=\"DISC_G_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discount Amount\" formControlName=\"DISC_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-divider></mat-divider>\n          <mat-radio-group formControlName=\"TAX_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.TAX_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tax %\" formControlName=\"TAX_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tax Amount\" formControlName=\"TAX_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"SHIP_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.SHIP_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Shipping %\" formControlName=\"SHIP_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Shipping Amount\" formControlName=\"SHIP_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Final Amount\" formControlName=\"FINAL_AMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Paid Amount\" formControlName=\"PAID_AMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Balance\" formControlName=\"BALANCE\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n        \n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"CODE\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Voucher Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.CODE}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"DESCR\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.DESCR}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/manage/voucher.component.ts":
/*!*********************************************!*\
  !*** ./src/app/manage/voucher.component.ts ***!
  \*********************************************/
/*! exports provided: VoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherComponent", function() { return VoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoucherComponent = /** @class */ (function () {
    function VoucherComponent(_backendService, _fb) {
        this._backendService = _backendService;
        this._fb = _fb;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.statusCDs = ['OPEN', 'CLOSED', 'PAID', 'PENDING', 'HOLD', 'CANCELLED'];
        this.typeCDs = ['REGULAR', 'RECURRING', 'DIRECT INVOICE', 'EXPEDITE', 'OTHER', 'EXPENSE'];
        this.discCDs = ['%', 'Fixed'];
        this.total_amount = 0;
        this.displayedColumns = ['CODE', 'DESCR', '_id'];
    }
    VoucherComponent.prototype.ngOnInit = function () {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            CODE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DESCR: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            INVOICE: [''],
            VENDOR: [''],
            ADDRESS: this._fb.array([this._fb.group({
                    ADD_TYPE: '',
                    ADD_LINE_1: '',
                    ADD_LINE_2: '',
                    PIN_CODE: '',
                    STATE: '',
                    COUNTRY: ''
                })]),
            PHONE: this._fb.array([this._fb.group({
                    PHONE_TYPE: '',
                    PHONE_NUMBER: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]]
                })]),
            EMAILID: this._fb.array([this._fb.group({
                    EMAIL_TYPE: '',
                    EMAILID: ''
                })]),
            EDATE: '',
            RDATE: '',
            DDATE: '',
            PDATE: '',
            LINE: this._fb.array([this._fb.group({
                    LINE_NUM: '',
                    LINE_NAME: '',
                    AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]]
                })]),
            GAMOUNT: '',
            GAMOUNT_DISC_TYPE: '',
            DISC_G_PERCENT: '',
            DISC_GAMOUNT: '',
            TAX_TYPE: '',
            TAX_PERCENT: '',
            TAX_GAMOUNT: '',
            SHIP_TYPE: '',
            SHIP_PERCENT: '',
            SHIP_GAMOUNT: '',
            FINAL_AMOUNT: '',
            PAID_AMOUNT: '',
            BALANCE: ''
        });
        this.editDataForm = this._fb.group({
            CODE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DESCR: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            INVOICE: [''],
            VENDOR: [''],
            ADDRESS: this._fb.array([]),
            PHONE: this._fb.array([]),
            EMAILID: this._fb.array([]),
            EDATE: '',
            RDATE: '',
            DDATE: '',
            PDATE: '',
            LINE: this._fb.array([]),
            GAMOUNT: '',
            GAMOUNT_DISC_TYPE: '',
            DISC_G_PERCENT: '',
            DISC_GAMOUNT: '',
            TAX_TYPE: '',
            TAX_PERCENT: '',
            TAX_GAMOUNT: '',
            SHIP_TYPE: '',
            SHIP_PERCENT: '',
            SHIP_GAMOUNT: '',
            FINAL_AMOUNT: '',
            PAID_AMOUNT: '',
            BALANCE: ''
        });
    };
    VoucherComponent.prototype.LINES = function (formName) {
        return this[formName].get('LINE');
    };
    VoucherComponent.prototype.addLINES = function (formName) {
        this.LINES(formName).push(this._fb.group({
            LINE_NUM: '',
            LINE_NAME: '',
            AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.deleteLINES = function (index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.ADDRESSES = function (formName) {
        return this[formName].get('ADDRESS');
    };
    VoucherComponent.prototype.addADDRESSES = function (formName) {
        this.ADDRESSES(formName).push(this._fb.group({
            ADD_TYPE: '',
            ADD_LINE_1: '',
            ADD_LINE_2: '',
            PIN_CODE: '',
            STATE: '',
            COUNTRY: ''
        }));
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.deleteADDRESSES = function (index, formName) {
        this.ADDRESSES(formName).removeAt(index);
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.PHONES = function (formName) {
        return this[formName].get('PHONE');
    };
    VoucherComponent.prototype.addPHONES = function (formName) {
        this.PHONES(formName).push(this._fb.group({
            PHONE_TYPE: '',
            PHONE_NUMBER: '',
        }));
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.deletePHONES = function (index, formName) {
        this.PHONES(formName).removeAt(index);
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.EMAILIDS = function (formName) {
        return this[formName].get('EMAILID');
    };
    VoucherComponent.prototype.addEMAILS = function (formName) {
        this.EMAILIDS(formName).push(this._fb.group({
            EMAIL_TYPE: '',
            EMAILID: '',
        }));
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.deleteEMAILS = function (index, formName) {
        this.EMAILIDS(formName).removeAt(index);
        this.calculateTotal(formName);
    };
    VoucherComponent.prototype.calculateTotal = function (formName) {
        this.total_amount = 0;
        for (var i = 0; i <= this[formName].value.LINE.length; i++) {
            if (this[formName].value.LINE[i]) {
                this.total_amount += +this[formName].value.LINE[i].AMOUNT;
            }
        }
        this[formName].controls['GAMOUNT'].setValue(this.total_amount.toFixed(2));
        if (this[formName].controls.GAMOUNT_DISC_TYPE.value == 1 && this[formName].controls.DISC_G_PERCENT.value != '') {
            this[formName].controls['DISC_GAMOUNT'].setValue((this.total_amount * this[formName].controls.DISC_G_PERCENT.value / 100).toFixed(2));
        }
        if (this[formName].controls.TAX_TYPE.value == 1 && this[formName].controls.TAX_PERCENT.value != '') {
            this[formName].controls['TAX_GAMOUNT'].setValue(((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value) * this[formName].controls.TAX_PERCENT.value / 100).toFixed(2));
        }
        if (this[formName].controls.SHIP_TYPE.value == 1 && this[formName].controls.SHIP_PERCENT.value != '') {
            this[formName].controls['SHIP_GAMOUNT'].setValue(((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value) * this[formName].controls.SHIP_PERCENT.value / 100).toFixed(2));
        }
        this[formName].controls['FINAL_AMOUNT'].setValue((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value - this[formName].controls['TAX_GAMOUNT'].value - this[formName].controls['SHIP_GAMOUNT'].value).toFixed(2));
        this[formName].controls['BALANCE'].setValue((this[formName].controls['FINAL_AMOUNT'].value - this[formName].controls['PAID_AMOUNT'].value).toFixed(2));
    };
    VoucherComponent.prototype.toggle = function (filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    VoucherComponent.prototype.getData = function (filterAllDocs, getOneDoc) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getVoucher(filterAllDocs, getOneDoc).subscribe(function (res) {
            if (res["data"]["getVoucher_Q"].CODE !== "") {
                if (getOneDoc) {
                    _this.data = res["data"]["getVoucher_Q"][0];
                    _this.editDataForm = _this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        CODE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        DESCR: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        INVOICE: [''],
                        VENDOR: [''],
                        ADDRESS: _this._fb.array([]),
                        PHONE: _this._fb.array([]),
                        EMAILID: _this._fb.array([]),
                        EDATE: '',
                        RDATE: '',
                        DDATE: '',
                        PDATE: '',
                        LINE: _this._fb.array([]),
                        GAMOUNT: '',
                        GAMOUNT_DISC_TYPE: '',
                        DISC_G_PERCENT: '',
                        DISC_GAMOUNT: '',
                        TAX_TYPE: '',
                        TAX_PERCENT: '',
                        TAX_GAMOUNT: '',
                        SHIP_TYPE: '',
                        SHIP_PERCENT: '',
                        SHIP_GAMOUNT: '',
                        FINAL_AMOUNT: '',
                        PAID_AMOUNT: '',
                        BALANCE: ''
                    });
                    _this.editDataForm.patchValue(_this.data);
                    for (var i = 0; i < _this.data["ADDRESS"].length; i++) {
                        _this.ADDRESSES('editDataForm').push(_this._fb.group(_this.data["ADDRESS"][i]));
                    }
                    for (var i = 0; i < _this.data["PHONE"].length; i++) {
                        _this.PHONES('editDataForm').push(_this._fb.group(_this.data["PHONE"][i]));
                    }
                    for (var i = 0; i < _this.data["EMAILID"].length; i++) {
                        _this.EMAILIDS('editDataForm').push(_this._fb.group(_this.data["EMAILID"][i]));
                    }
                    for (var i = 0; i < _this.data["LINE"].length; i++) {
                        _this.LINES('editDataForm').push(_this._fb.group(_this.data["LINE"][i]));
                    }
                    _this.calculateTotal(('editDataForm'));
                    _this.toggle('editMode');
                }
                else {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res["data"]["getVoucher_Q"]);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getVoucher_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    VoucherComponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setVoucher(formData).subscribe(function (res) {
            if (res["data"]["setVoucher_M"].CODE !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setVoucher_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    VoucherComponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setVoucherDoc(formData).subscribe(function (res) {
            if (res["data"]["setVoucherDoc_M"].CODE !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setVoucherDoc_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    VoucherComponent.prototype.getDoc = function (docId) {
        this.getData("", docId);
    };
    VoucherComponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delVoucherDoc(docId).subscribe(function (res) {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delVoucherDoc_M"]) {
                    _this.toggle('searchMode');
                    _this.error = false;
                    _this.errorMessage = "";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["data"]["delVoucherDoc_M"].message;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    //mat table paginator and filter functions
    VoucherComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    VoucherComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    VoucherComponent.prototype.ngOnDestroy = function () {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], VoucherComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], VoucherComponent.prototype, "sort", void 0);
    VoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'voucher',
            template: __webpack_require__(/*! ./voucher.component.html */ "./src/app/manage/voucher.component.html")
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/backend-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend-service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendService = /** @class */ (function () {
    function BackendService(_http) {
        this._http = _http;
        this._graphQLURL = "https://ancient-meadow-48976.herokuapp.com/alivetracking";
    }
    BackendService.prototype.getConfig = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].social;
    };
    // function to send emails using a PHP API //
    BackendService.prototype.sendEmail = function (messageData) {
        var httpOptions_e = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' })
        };
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emailAPI, messageData, httpOptions_e);
    };
    // User-login-signup functions //
    BackendService.prototype.getUser = function () {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "query getUser { getUser_Q { name email message } }"
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.loginUser = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !input ? { email: "", password: "" } : input;
        var graphqlQuery = {
            "query": "query loginUser($email: String!,$password: String!) { loginUser_Q(email: $email, password: $password) { token message } }",
            "variables": {
                "email": formData.email,
                "password": formData.password
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.createUser = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !input ? { name: "", email: "", password: "" } : input;
        var graphqlQuery = {
            "query": "mutation addUser($name: String!,$email: String!,$password: String!) { addUser_M(name:$name, email: $email, password: $password) { email message } }",
            "variables": {
                "name": formData.name,
                "email": formData.email,
                "password": formData.password
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.updateUser = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation updateUser($name: String!,$email: String!,$password: String!) { updateUser_M(name:$name, email: $email, password: $password) { email message } }",
            "variables": {
                "name": input.name,
                "email": input.email,
                "password": input.password
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    // jobcode setup page functions
    BackendService.prototype.getJobCode = function (filterAllDocs, getOneDoc) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        var graphqlQuery = {
            "query": "query getJobCode($_id: String!,$code: String!,$descr: String!) { getJobCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr job_role job_duty job_descr comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setJobCode = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setJobCode($code: String!,$descr: String!,$job_role: String!,$job_duty: String!,$job_descr: String!,$comments: String!) { setJobCode_M(code:$code,descr:$descr,job_role:$job_role,job_duty:$job_duty,job_descr:$job_descr,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "job_role": input.job_role,
                "job_duty": input.job_duty,
                "job_descr": input.job_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setJobCodeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setJobCodeDoc($_id:String,$code: String!,$descr: String!,$job_role: String!,$job_duty: String!,$job_descr: String!,$comments: String!) { setJobCodeDoc_M(_id:$_id,code:$code,descr:$descr,job_role:$job_role,job_duty:$job_duty,job_descr:$job_descr,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "job_role": input.job_role,
                "job_duty": input.job_duty,
                "job_descr": input.job_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.delJobCodeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation delJobCodeDoc($_id:String) { delJobCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    // leavecode setup page functions
    BackendService.prototype.getLeaveCode = function (filterAllDocs, getOneDoc) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        var graphqlQuery = {
            "query": "query getLeaveCode($_id: String!,$code: String!,$descr: String!) { getLeaveCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setLeaveCode = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setLeaveCode($code: String!,$descr: String!) { setLeaveCode_M(code:$code,descr:$descr) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setLeaveCodeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setLeaveCodeDoc($_id:String,$code: String!,$descr: String!) { setLeaveCodeDoc_M(_id:$_id,code:$code,descr:$descr) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.delLeaveCodeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation delLeaveCodeDoc($_id:String) { delLeaveCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    // salarycode setup page functions
    BackendService.prototype.getSalaryCode = function (filterAllDocs, getOneDoc) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        var graphqlQuery = {
            "query": "query getSalaryCode($_id: String!,$code: String!,$descr: String!) { getSalaryCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr bsalary, line { frequency ptype payval amount }, gamount, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setSalaryCode = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setSalaryCode($code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryCode_M(code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setSalaryCodeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setSalaryCodeDoc($_id:String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryCodeDoc_M(_id:$_id,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.delSalaryCodeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation delSalaryCodeDoc($_id:String) { delSalaryCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    // voucher page functions
    BackendService.prototype.getVoucher = function (filterAllDocs, getOneDoc) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !filterAllDocs ? { _id: "", CODE: "", DESCR: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.CODE = filterAllDocs && filterAllDocs.CODE ? filterAllDocs.CODE : "";
        formData.DESCR = filterAllDocs && filterAllDocs.DESCR ? filterAllDocs.DESCR : "";
        var graphqlQuery = {
            "query": "query getVoucher($_id: String!,$CODE: String!,$DESCR: String!) { getVoucher_Q(_id: $_id, CODE: $CODE, DESCR: $DESCR) { _id CODE DESCR TYPE STATUS INVOICE VENDOR ADDRESS { ADD_TYPE ADD_LINE_1 ADD_LINE_2 PIN_CODE STATE COUNTRY } PHONE { PHONE_TYPE PHONE_NUMBER } EMAILID { EMAIL_TYPE EMAILID } EDATE RDATE DDATE PDATE LINE { LINE_NUM LINE_NAME AMOUNT } GAMOUNT GAMOUNT_DISC_TYPE DISC_G_PERCENT DISC_GAMOUNT TAX_TYPE TAX_PERCENT TAX_GAMOUNT SHIP_TYPE SHIP_PERCENT SHIP_GAMOUNT FINAL_AMOUNT PAID_AMOUNT BALANCE message } }",
            "variables": {
                "_id": formData._id,
                "CODE": formData.CODE,
                "DESCR": formData.DESCR
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setVoucher = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setVoucher($CODE: String,$DESCR: String,$TYPE: String,$STATUS: String,$INVOICE: String,$VENDOR: String,$ADDRESS:[ADDRESS],$PHONE:[PHONE],$EMAILID:[EMAILID],$EDATE: String,$RDATE: String,$DDATE: String,$PDATE: String, $LINE:[LINE], $GAMOUNT: String, $GAMOUNT_DISC_TYPE: String, $DISC_G_PERCENT: String, $DISC_GAMOUNT: String, $TAX_TYPE: String, $TAX_PERCENT: String, $TAX_GAMOUNT: String, $SHIP_TYPE: String, $SHIP_PERCENT: String, $SHIP_GAMOUNT: String, $FINAL_AMOUNT: String, $PAID_AMOUNT: String, $BALANCE: String ) { setVoucher_M(CODE:$CODE,DESCR:$DESCR,TYPE:$TYPE,STATUS:$STATUS,INVOICE:$INVOICE,VENDOR:$VENDOR,ADDRESS:$ADDRESS,PHONE:$PHONE,EMAILID:$EMAILID,EDATE:$EDATE,RDATE:$RDATE,DDATE:$DDATE,PDATE:$PDATE,LINE:$LINE, GAMOUNT:$GAMOUNT, GAMOUNT_DISC_TYPE:$GAMOUNT_DISC_TYPE, DISC_G_PERCENT:$DISC_G_PERCENT, DISC_GAMOUNT:$DISC_GAMOUNT, TAX_TYPE:$TAX_TYPE, TAX_PERCENT:$TAX_PERCENT, TAX_GAMOUNT:$TAX_GAMOUNT, SHIP_TYPE:$SHIP_TYPE, SHIP_PERCENT:$SHIP_PERCENT, SHIP_GAMOUNT:$SHIP_GAMOUNT, FINAL_AMOUNT:$FINAL_AMOUNT, PAID_AMOUNT:$PAID_AMOUNT, BALANCE:$BALANCE) { CODE message } }",
            "variables": {
                "CODE": input.CODE,
                "DESCR": input.DESCR,
                "TYPE": input.TYPE,
                "STATUS": input.STATUS,
                "INVOICE": input.INVOICE,
                "VENDOR": input.VENDOR,
                "ADDRESS": input.ADDRESS,
                "PHONE": input.PHONE,
                "EMAILID": input.EMAILID,
                "EDATE": input.EDATE,
                "RDATE": input.RDATE,
                "DDATE": input.DDATE,
                "PDATE": input.PDATE,
                "LINE": input.LINE,
                "GAMOUNT": input.GAMOUNT,
                "GAMOUNT_DISC_TYPE": input.GAMOUNT_DISC_TYPE,
                "DISC_G_PERCENT": input.DISC_G_PERCENT,
                "DISC_GAMOUNT": input.DISC_GAMOUNT,
                "TAX_TYPE": input.TAX_TYPE,
                "TAX_PERCENT": input.TAX_PERCENT,
                "TAX_GAMOUNT": input.TAX_GAMOUNT,
                "SHIP_TYPE": input.SHIP_TYPE,
                "SHIP_PERCENT": input.SHIP_PERCENT,
                "SHIP_GAMOUNT": input.SHIP_GAMOUNT,
                "FINAL_AMOUNT": input.FINAL_AMOUNT,
                "PAID_AMOUNT": input.PAID_AMOUNT,
                "BALANCE": input.BALANCE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setVoucherDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setVoucherDoc($_id:String,$CODE: String,$DESCR: String,$TYPE: String,$STATUS: String,$INVOICE: String,$VENDOR: String,$ADDRESS:[ADDRESS],$PHONE:[PHONE],$EMAILID:[EMAILID],$EDATE: String,$RDATE: String,$DDATE: String,$PDATE: String, $LINE:[LINE], $GAMOUNT: String, $GAMOUNT_DISC_TYPE: String, $DISC_G_PERCENT: String, $DISC_GAMOUNT: String, $TAX_TYPE: String, $TAX_PERCENT: String, $TAX_GAMOUNT: String, $SHIP_TYPE: String, $SHIP_PERCENT: String, $SHIP_GAMOUNT: String, $FINAL_AMOUNT: String, $PAID_AMOUNT: String, $BALANCE: String ) { setVoucherDoc_M(_id:$_id,CODE:$CODE,DESCR:$DESCR,TYPE:$TYPE,STATUS:$STATUS,INVOICE:$INVOICE,VENDOR:$VENDOR,ADDRESS:$ADDRESS,PHONE:$PHONE,EMAILID:$EMAILID,EDATE:$EDATE,RDATE:$RDATE,DDATE:$DDATE,PDATE:$PDATE,LINE:$LINE, GAMOUNT:$GAMOUNT, GAMOUNT_DISC_TYPE:$GAMOUNT_DISC_TYPE, DISC_G_PERCENT:$DISC_G_PERCENT, DISC_GAMOUNT:$DISC_GAMOUNT, TAX_TYPE:$TAX_TYPE, TAX_PERCENT:$TAX_PERCENT, TAX_GAMOUNT:$TAX_GAMOUNT, SHIP_TYPE:$SHIP_TYPE, SHIP_PERCENT:$SHIP_PERCENT, SHIP_GAMOUNT:$SHIP_GAMOUNT, FINAL_AMOUNT:$FINAL_AMOUNT, PAID_AMOUNT:$PAID_AMOUNT, BALANCE:$BALANCE) { CODE message } }",
            "variables": {
                "_id": input._id,
                "CODE": input.CODE,
                "DESCR": input.DESCR,
                "TYPE": input.TYPE,
                "STATUS": input.STATUS,
                "INVOICE": input.INVOICE,
                "VENDOR": input.VENDOR,
                "ADDRESS": input.ADDRESS,
                "PHONE": input.PHONE,
                "EMAILID": input.EMAILID,
                "EDATE": input.EDATE,
                "RDATE": input.RDATE,
                "DDATE": input.DDATE,
                "PDATE": input.PDATE,
                "LINE": input.LINE,
                "GAMOUNT": input.GAMOUNT,
                "GAMOUNT_DISC_TYPE": input.GAMOUNT_DISC_TYPE,
                "DISC_G_PERCENT": input.DISC_G_PERCENT,
                "DISC_GAMOUNT": input.DISC_GAMOUNT,
                "TAX_TYPE": input.TAX_TYPE,
                "TAX_PERCENT": input.TAX_PERCENT,
                "TAX_GAMOUNT": input.TAX_GAMOUNT,
                "SHIP_TYPE": input.SHIP_TYPE,
                "SHIP_PERCENT": input.SHIP_PERCENT,
                "SHIP_GAMOUNT": input.SHIP_GAMOUNT,
                "FINAL_AMOUNT": input.FINAL_AMOUNT,
                "PAID_AMOUNT": input.PAID_AMOUNT,
                "BALANCE": input.BALANCE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.delVoucherDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation delVoucherDoc($_id:String) { delVoucherDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    // employee manage page functions
    BackendService.prototype.getEmployee = function (filterAllDocs, getOneDoc) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !filterAllDocs ? { _id: "", CODE: "", DESCR: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.CODE = filterAllDocs && filterAllDocs.CODE ? filterAllDocs.CODE : "";
        formData.DESCR = filterAllDocs && filterAllDocs.DESCR ? filterAllDocs.DESCR : "";
        var graphqlQuery = {
            "query": "query getEmployee($_id: String!,$CODE: String!,$DESCR: String!) { getEmployee_Q(_id: $_id, CODE: $CODE, DESCR: $DESCR) { _id CODE SKEY DESCR MIDDLE_NAME LAST_NAME DOB FATHER_NAME MOTHER_NAME SPOUSE_NAME SDOB ADD_TYPE_1 ADD_LINE_1 ADD_LINE_2 PIN_CODE STATE COUNTRY ADD_TYPE_2 ADD_LINE_12 ADD_LINE_22 PIN_CODE2 STATE2 COUNTRY2 MOBILE1 MOBILE2 EMAIL1 EMAIL2 DEGREE COLLEGE ADD_LINE_C1 ADD_LINE_C2 PIN_CODE_C STATE_C COUNTRY_C REFERENCE_1 REFERENCE_1_ADD REFERENCE_2 REFERENCE_2_ADD JOB_CODE SALARY_CODE LEAVE_CODE message } }",
            "variables": {
                "_id": formData._id,
                "CODE": formData.CODE,
                "DESCR": formData.DESCR
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setEmployee = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setEmployee($CODE: String,$SKEY: String,$DESCR: String,$MIDDLE_NAME: String,$LAST_NAME: String,$DOB: String,$FATHER_NAME: String,$MOTHER_NAME: String,$SPOUSE_NAME: String,$SDOB: String,$ADD_TYPE_1: String,$ADD_LINE_1: String,$ADD_LINE_2: String,$PIN_CODE: String,$STATE: String,$COUNTRY: String,$ADD_TYPE_2: String,$ADD_LINE_12: String,$ADD_LINE_22: String,$PIN_CODE2: String,$STATE2: String,$COUNTRY2: String,$MOBILE1: String,$MOBILE2: String,$EMAIL1: String,$EMAIL2: String,$DEGREE: String,$COLLEGE: String,$ADD_LINE_C1: String,$ADD_LINE_C2: String,$PIN_CODE_C: String,$STATE_C: String,$COUNTRY_C: String,$REFERENCE_1: String,$REFERENCE_1_ADD: String,$REFERENCE_2: String,$REFERENCE_2_ADD: String,$JOB_CODE: String,$SALARY_CODE: String,$LEAVE_CODE: String) { setEmployee_M(CODE: $CODE,SKEY: $SKEY,DESCR: $DESCR,MIDDLE_NAME: $MIDDLE_NAME,LAST_NAME: $LAST_NAME,DOB: $DOB,FATHER_NAME: $FATHER_NAME,MOTHER_NAME: $MOTHER_NAME,SPOUSE_NAME: $SPOUSE_NAME,SDOB: $SDOB,ADD_TYPE_1: $ADD_TYPE_1,ADD_LINE_1: $ADD_LINE_1,ADD_LINE_2: $ADD_LINE_2,PIN_CODE: $PIN_CODE,STATE: $STATE,COUNTRY: $COUNTRY,ADD_TYPE_2: $ADD_TYPE_2,ADD_LINE_12: $ADD_LINE_12,ADD_LINE_22: $ADD_LINE_22,PIN_CODE2: $PIN_CODE2,STATE2: $STATE2,COUNTRY2:$COUNTRY2,MOBILE1: $MOBILE1,MOBILE2: $MOBILE2,EMAIL1: $EMAIL1,EMAIL2: $EMAIL2,DEGREE: $DEGREE,COLLEGE: $COLLEGE,ADD_LINE_C1: $ADD_LINE_C1,ADD_LINE_C2: $ADD_LINE_C2,PIN_CODE_C: $PIN_CODE_C,STATE_C: $STATE_C,COUNTRY_C: $COUNTRY_C,REFERENCE_1: $REFERENCE_1,REFERENCE_1_ADD: $REFERENCE_1_ADD,REFERENCE_2: $REFERENCE_2,REFERENCE_2_ADD: $REFERENCE_2_ADD,JOB_CODE: $JOB_CODE,SALARY_CODE: $SALARY_CODE,LEAVE_CODE: $LEAVE_CODE) { CODE message } }",
            "variables": {
                "CODE": input.CODE,
                "SKEY": input.SKEY,
                "DESCR": input.DESCR,
                "MIDDLE_NAME": input.MIDDLE_NAME,
                "LAST_NAME": input.LAST_NAME,
                "DOB": input.DOB,
                "FATHER_NAME": input.FATHER_NAME,
                "MOTHER_NAME": input.MOTHER_NAME,
                "SPOUSE_NAME": input.SPOUSE_NAME,
                "SDOB": input.SDOB,
                "ADD_TYPE_1": input.ADD_TYPE_1,
                "ADD_LINE_1": input.ADD_LINE_1,
                "ADD_LINE_2": input.ADD_LINE_2,
                "PIN_CODE": input.PIN_CODE,
                "STATE": input.STATE,
                "COUNTRY": input.COUNTRY,
                "ADD_TYPE_2": input.ADD_TYPE_2,
                "ADD_LINE_12": input.ADD_LINE_12,
                "ADD_LINE_22": input.ADD_LINE_22,
                "PIN_CODE2": input.PIN_CODE2,
                "STATE2": input.STATE2,
                "COUNTRY2": input.COUNTRY2,
                "MOBILE1": input.MOBILE1,
                "MOBILE2": input.MOBILE2,
                "EMAIL1": input.EMAIL1,
                "EMAIL2": input.EMAIL2,
                "DEGREE": input.DEGREE,
                "COLLEGE": input.COLLEGE,
                "ADD_LINE_C1": input.ADD_LINE_C1code,
                "ADD_LINE_C2": input.ADD_LINE_C2,
                "PIN_CODE_C": input.PIN_CODE_C,
                "STATE_C": input.STATE_C,
                "COUNTRY_C": input.COUNTRY_C,
                "REFERENCE_1": input.REFERENCE_1,
                "REFERENCE_1_ADD": input.REFERENCE_1_ADD,
                "REFERENCE_2": input.REFERENCE_2,
                "REFERENCE_2_ADD": input.REFERENCE_2_ADD,
                "JOB_CODE": input.JOB_CODE,
                "SALARY_CODE": input.SALARY_CODE,
                "LEAVE_CODE": input.LEAVE_CODE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setEmployeeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setEmployeeDoc($_id:String,$CODE: String,$SKEY: String,$DESCR: String,$MIDDLE_NAME: String,$LAST_NAME: String,$DOB: String,$FATHER_NAME: String,$MOTHER_NAME: String,$SPOUSE_NAME: String,$SDOB: String,$ADD_TYPE_1: String,$ADD_LINE_1: String,$ADD_LINE_2: String,$PIN_CODE: String,$STATE: String,$COUNTRY: String,$ADD_TYPE_2: String,$ADD_LINE_12: String,$ADD_LINE_22: String,$PIN_CODE2: String,$STATE2: String,$COUNTRY2: String,$MOBILE1: String,$MOBILE2: String,$EMAIL1: String,$EMAIL2: String,$DEGREE: String,$COLLEGE: String,$ADD_LINE_C1: String,$ADD_LINE_C2: String,$PIN_CODE_C: String,$STATE_C: String,$COUNTRY_C: String,$REFERENCE_1: String,$REFERENCE_1_ADD: String,$REFERENCE_2: String,$REFERENCE_2_ADD: String,$JOB_CODE: String,$SALARY_CODE: String,$LEAVE_CODE: String) { setEmployeeDoc_M(_id:$_id,CODE: $CODE,SKEY: $SKEY,DESCR: $DESCR,MIDDLE_NAME: $MIDDLE_NAME,LAST_NAME: $LAST_NAME,DOB: $DOB,FATHER_NAME: $FATHER_NAME,MOTHER_NAME: $MOTHER_NAME,SPOUSE_NAME: $SPOUSE_NAME,SDOB: $SDOB,ADD_TYPE_1: $ADD_TYPE_1,ADD_LINE_1: $ADD_LINE_1,ADD_LINE_2: $ADD_LINE_2,PIN_CODE: $PIN_CODE,STATE: $STATE,COUNTRY: $COUNTRY,ADD_TYPE_2: $ADD_TYPE_2,ADD_LINE_12: $ADD_LINE_12,ADD_LINE_22: $ADD_LINE_22,PIN_CODE2: $PIN_CODE2,STATE2: $STATE2,COUNTRY2:$COUNTRY2,MOBILE1: $MOBILE1,MOBILE2: $MOBILE2,EMAIL1: $EMAIL1,EMAIL2: $EMAIL2,DEGREE: $DEGREE,COLLEGE: $COLLEGE,ADD_LINE_C1: $ADD_LINE_C1,ADD_LINE_C2: $ADD_LINE_C2,PIN_CODE_C: $PIN_CODE_C,STATE_C: $STATE_C,COUNTRY_C: $COUNTRY_C,REFERENCE_1: $REFERENCE_1,REFERENCE_1_ADD: $REFERENCE_1_ADD,REFERENCE_2: $REFERENCE_2,REFERENCE_2_ADD: $REFERENCE_2_ADD,JOB_CODE: $JOB_CODE,SALARY_CODE: $SALARY_CODE,LEAVE_CODE: $LEAVE_CODE) { CODE message } }",
            "variables": {
                "_id": input._id,
                "CODE": input.CODE,
                "SKEY": input.SKEY,
                "DESCR": input.DESCR,
                "MIDDLE_NAME": input.MIDDLE_NAME,
                "LAST_NAME": input.LAST_NAME,
                "DOB": input.DOB,
                "FATHER_NAME": input.FATHER_NAME,
                "MOTHER_NAME": input.MOTHER_NAME,
                "SPOUSE_NAME": input.SPOUSE_NAME,
                "SDOB": input.SDOB,
                "ADD_TYPE_1": input.ADD_TYPE_1,
                "ADD_LINE_1": input.ADD_LINE_1,
                "ADD_LINE_2": input.ADD_LINE_2,
                "PIN_CODE": input.PIN_CODE,
                "STATE": input.STATE,
                "COUNTRY": input.COUNTRY,
                "ADD_TYPE_2": input.ADD_TYPE_2,
                "ADD_LINE_12": input.ADD_LINE_12,
                "ADD_LINE_22": input.ADD_LINE_22,
                "PIN_CODE2": input.PIN_CODE2,
                "STATE2": input.STATE2,
                "COUNTRY2": input.COUNTRY2,
                "MOBILE1": input.MOBILE1,
                "MOBILE2": input.MOBILE2,
                "EMAIL1": input.EMAIL1,
                "EMAIL2": input.EMAIL2,
                "DEGREE": input.DEGREE,
                "COLLEGE": input.COLLEGE,
                "ADD_LINE_C1": input.ADD_LINE_C1code,
                "ADD_LINE_C2": input.ADD_LINE_C2,
                "PIN_CODE_C": input.PIN_CODE_C,
                "STATE_C": input.STATE_C,
                "COUNTRY_C": input.COUNTRY_C,
                "REFERENCE_1": input.REFERENCE_1,
                "REFERENCE_1_ADD": input.REFERENCE_1_ADD,
                "REFERENCE_2": input.REFERENCE_2,
                "REFERENCE_2_ADD": input.REFERENCE_2_ADD,
                "JOB_CODE": input.JOB_CODE,
                "SALARY_CODE": input.SALARY_CODE,
                "LEAVE_CODE": input.LEAVE_CODE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.delEmployeeDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation delEmployeeDoc($_id:String) { delEmployeeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    // salary voucher page functions
    BackendService.prototype.getSalaryVoucher = function (filterAllDocs, getOneDoc) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        var graphqlQuery = {
            "query": "query getSalaryVoucher($_id: String!,$code: String!,$descr: String!) { getSalaryVoucher_Q(_id: $_id, code: $code, descr: $descr) { _id emplid emplskey empldescr empllastname emplsalcode paiddata code descr bsalary line { frequency ptype payval amount } gamount, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setSalaryVoucher = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setSalaryVoucher($emplid:String,$emplskey:String,$empldescr: String,$empllastname: String,$emplsalcode: String,$paiddata: String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucher_M(emplid:$emplid,emplskey:$emplskey,empldescr: $empldescr,empllastname: $empllastname,emplsalcode: $emplsalcode,paiddata: $paiddata,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "emplid": input.emplid,
                "emplskey": input.emplskey,
                "empldescr": input.empldescr,
                "empllastname": input.empllastname,
                "emplsalcode": input.emplsalcode,
                "paiddata": input.paiddata,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.setSalaryVoucherDoc = function (input) {
        //"query": "mutation setSalaryVoucherDoc($_id:String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucherDoc_M(_id:$_id,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation setSalaryVoucherDoc($_id:String,$emplid:String,$emplskey:String,$empldescr: String,$empllastname: String,$emplsalcode: String,$paiddata: String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucherDoc_M(_id:$_id,emplid:$emplid,emplskey:$emplskey,empldescr: $empldescr,empllastname: $empllastname,emplsalcode: $emplsalcode,paiddata: $paiddata,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "_id": input._id,
                "emplid": input.emplid,
                "emplskey": input.emplskey,
                "empldescr": input.empldescr,
                "empllastname": input.empllastname,
                "emplsalcode": input.emplsalcode,
                "paiddata": input.paiddata,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService.prototype.delSalaryVoucherDoc = function (input) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        var graphqlQuery = {
            "query": "mutation delSalaryVoucherDoc($_id:String) { delSalaryVoucherDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    };
    BackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Settings\" imageUrl=\"account_circle\" helpType=\"settingspage\"></header>\n<mat-card [@fallIn]='state' *ngIf=\"!savedChanges else showSavedChangesCard\">\n  <form #formData='ngForm'>\n    <mat-card-content>\n      <mat-card-title>\n        <span class=\"small-headline\">Update Settings</span>\n      </mat-card-title>\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Your Authentication is invalid, please logout and log in again. Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"button\" (click)=\"onSubmit(formData.value);\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Update</button>\n        <button type=\"button\" (click)=\"getUser()\" mat-raised-button color=\"primary\">Refresh</button>\n        <button type=\"button\" [routerLink]=\"['/login']\" mat-raised-button color=\"primary\">Logout</button>\n      </mat-card-actions>\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"name\" name=\"name\" #name=\"ngModel\" [ngModel]=\"this.data?.name\" ngModel required minlength=\"5\" maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <mat-error *ngIf=\"name.errors['required']\">Name is Required.</mat-error>\n        <mat-error *ngIf=\"name.errors['minlength']\">Name can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"name.errors['maxlength']\">Name can't be more than 30 characters.</mat-error>\n      </span>\n      <br />\n      <mat-form-field class=\"example-form\">\n        <input matInput readonly placeholder=\"email\" name=\"email\" #email=\"ngModel\" [ngModel]=\"this.data?.email\" required email>\n      </mat-form-field>\n      <br />\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Please enter a valid email.</mat-error>\n      <mat-form-field class=\"example-form\">\n        <input matInput type=\"password\" placeholder=\"Choose app password\" name=\"password\" #password=\"ngModel\" ngModel required minlength=\"5\"\n          maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <mat-error *ngIf=\"password.errors['required']\">Password is Required.</mat-error>\n        <mat-error *ngIf=\"password.errors['minlength']\">Password can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"password.errors['maxlength']\">Password can't be more than 30 characters.</mat-error>\n      </span>\n    </mat-card-content>\n  </form>\n</mat-card>\n<ng-template #showSavedChangesCard>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-error>\n    Your data is updated. Please log back in with your email and password.\n  </mat-error>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-card-actions align=\"start\">\n    <button type=\"button\" (click)=\"savedChanges=false;routeLoginPage();\" mat-raised-button color=\"primary\">Close</button>\n  </mat-card-actions>\n</ng-template>\n<footer></footer>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/router.animations */ "./src/app/shared/router.animations.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('token')) {
            this.getUser();
        }
    };
    SettingsComponent.prototype.getUser = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this.error = true;
            this.errorMessage = "Please wait for some time to re-load your data from Server.";
        }
        else {
            this.error = false;
            this.errorMessage = "";
        }
        this.dataLoading = true;
        this.querySubscription = this._backendService.getUser().subscribe(function (res) {
            //console.log(res);
            if (res["data"]["getUser_Q"].email !== "") {
                _this.data = res["data"]["getUser_Q"];
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getUser_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SettingsComponent.prototype.routeLoginPage = function () {
        window.localStorage.removeItem("token");
        this.savedChanges = false;
        this.router.navigate(['/login']);
    };
    SettingsComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.updateUser(formData).subscribe(function (res) {
            if (res["data"]["updateUser_M"].email !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["updateUser_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            animations: [Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/setup/jobcode.component.html":
/*!**********************************************!*\
  !*** ./src/app/setup/jobcode.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Job Code\" imageUrl=\"business\" helpType=\"jobpage\"></header>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Job Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Job Title\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Job Code\" name=\"code\" id=\"code\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg SALMGR1</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Job Title\" name=\"descr\" id=\"descr\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg Sales Manager -I</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Role\" name=\"job_role\" id=\"job_role\" ngModel></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Duties\" name=\"job_duty\" id=\"job_duty\" ngModel></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Description\" name=\"job_descr\" id=\"job_descr\" ngModel></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Job Code\" name=\"code\" id=\"code\" [ngModel]=\"data.code\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg SALMGR1</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Job Title\" name=\"descr\" id=\"descr\" [ngModel]=\"data.descr\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg Sales Manager -I</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Role\" name=\"job_role\" id=\"job_role\" [ngModel]=\"data.job_role\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Duties\" name=\"job_duty\" id=\"job_duty\" [ngModel]=\"data.job_duty\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Description\" name=\"job_descr\" id=\"job_descr\" [ngModel]=\"data.job_descr\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"data.comments\"></textarea>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Job Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/setup/jobcode.component.ts":
/*!********************************************!*\
  !*** ./src/app/setup/jobcode.component.ts ***!
  \********************************************/
/*! exports provided: JobCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCodeComponent", function() { return JobCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animations */ "./src/app/shared/router.animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobCodeComponent = /** @class */ (function () {
    function JobCodeComponent(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    JobCodeComponent.prototype.ngOnInit = function () {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.members);
    };
    JobCodeComponent.prototype.toggle = function (filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    JobCodeComponent.prototype.getData = function (filterAllDocs, getOneDoc) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getJobCode(filterAllDocs, getOneDoc).subscribe(function (res) {
            if (res["data"]["getJobCode_Q"].code !== "") {
                if (getOneDoc) {
                    _this.data = res["data"]["getJobCode_Q"][0];
                    _this.toggle('editMode');
                }
                else {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res["data"]["getJobCode_Q"]);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getJobCode_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    JobCodeComponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setJobCode(formData).subscribe(function (res) {
            if (res["data"]["setJobCode_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setJobCode_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    JobCodeComponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setJobCodeDoc(formData).subscribe(function (res) {
            if (res["data"]["setJobCodeDoc_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setJobCodeDoc_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    JobCodeComponent.prototype.getDoc = function (docId) {
        this.getData("", docId);
    };
    JobCodeComponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delJobCodeDoc(docId).subscribe(function (res) {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delJobCodeDoc_M"]) {
                    _this.toggle('searchMode');
                    _this.error = false;
                    _this.errorMessage = "";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["data"]["delJobCodeDoc_M"].message;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    /**
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this._backendService.deleteData(docId, 'job');
            this.toggle('searchMode');
        }
    }
    updateData(docId,formData) {
        if (confirm("Are you sure want to update this record ?")) {
            return this._backendService.setData(formData,'job',docId).then(
                (success) => this.savedDataFlag = true
            );
        }
    }
    **/
    //mat table paginator and filter functions
    JobCodeComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    JobCodeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    JobCodeComponent.prototype.ngOnDestroy = function () {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], JobCodeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], JobCodeComponent.prototype, "sort", void 0);
    JobCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jobcode',
            template: __webpack_require__(/*! ./jobcode.component.html */ "./src/app/setup/jobcode.component.html"),
            animations: [Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], JobCodeComponent);
    return JobCodeComponent;
}());



/***/ }),

/***/ "./src/app/setup/leavecode.component.html":
/*!************************************************!*\
  !*** ./src/app/setup/leavecode.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Leave Code\" imageUrl=\"business\" helpType=\"leavepage\"></header>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Leave Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Leave Days\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Leave Code\" name=\"code\" id=\"code\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg QT (Quarterly)</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Leaves allowed per year\" name=\"descr\" id=\"descr\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg 12 (leave days allowed/year)</mat-hint>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Leave Code\" name=\"code\" id=\"code\" [ngModel]=\"data.code\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg QT (Quarterly)</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Leaves allowed per year\" name=\"descr\" id=\"descr\" [ngModel]=\"data.descr\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg 12 (leave days allowed/year)</mat-hint>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Leave Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Leave Days</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/setup/leavecode.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setup/leavecode.component.ts ***!
  \**********************************************/
/*! exports provided: LeaveCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveCodeComponent", function() { return LeaveCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animations */ "./src/app/shared/router.animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaveCodeComponent = /** @class */ (function () {
    function LeaveCodeComponent(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    LeaveCodeComponent.prototype.ngOnInit = function () {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.members);
    };
    LeaveCodeComponent.prototype.toggle = function (filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    LeaveCodeComponent.prototype.getData = function (filterAllDocs, getOneDoc) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getLeaveCode(filterAllDocs, getOneDoc).subscribe(function (res) {
            if (res["data"]["getLeaveCode_Q"].code !== "") {
                if (getOneDoc) {
                    _this.data = res["data"]["getLeaveCode_Q"][0];
                    _this.toggle('editMode');
                }
                else {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res["data"]["getLeaveCode_Q"]);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getLeaveCode_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    LeaveCodeComponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setLeaveCode(formData).subscribe(function (res) {
            if (res["data"]["setLeaveCode_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setLeaveCode_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    LeaveCodeComponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setLeaveCodeDoc(formData).subscribe(function (res) {
            if (res["data"]["setLeaveCodeDoc_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setLeaveCodeDoc_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    LeaveCodeComponent.prototype.getDoc = function (docId) {
        this.getData("", docId);
    };
    LeaveCodeComponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delLeaveCodeDoc(docId).subscribe(function (res) {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delLeaveCodeDoc_M"]) {
                    _this.toggle('searchMode');
                    _this.error = false;
                    _this.errorMessage = "";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["data"]["delLeaveCodeDoc_M"].message;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    //mat table paginator and filter functions
    LeaveCodeComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    LeaveCodeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    LeaveCodeComponent.prototype.ngOnDestroy = function () {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LeaveCodeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LeaveCodeComponent.prototype, "sort", void 0);
    LeaveCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'leavecode',
            template: __webpack_require__(/*! ./leavecode.component.html */ "./src/app/setup/leavecode.component.html"),
            animations: [Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animations__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], LeaveCodeComponent);
    return LeaveCodeComponent;
}());



/***/ }),

/***/ "./src/app/setup/salarycode.component.html":
/*!*************************************************!*\
  !*** ./src/app/setup/salarycode.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Salary Code\" imageUrl=\"business\" helpType=\"salarypage\"></header>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Salary Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Salary Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code\" formControlName=\"code\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code Descr\" formControlName=\"descr\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('addDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n            </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code\" formControlName=\"code\">\n        <mat-hint align=\"end\">eg SALMGR_1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code Descr\" formControlName=\"descr\">\n        <mat-hint align=\"end\">eg Sales Manager Grade 1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n            </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n        \n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Salary Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/setup/salarycode.component.ts":
/*!***********************************************!*\
  !*** ./src/app/setup/salarycode.component.ts ***!
  \***********************************************/
/*! exports provided: SalaryCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCodeComponent", function() { return SalaryCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-service */ "./src/app/services/backend-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalaryCodeComponent = /** @class */ (function () {
    function SalaryCodeComponent(_backendService, _fb) {
        this._backendService = _backendService;
        this._fb = _fb;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Allowance', 'Deduction'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    SalaryCodeComponent.prototype.ngOnInit = function () {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            line: this._fb.array([this._fb.group({
                    frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]]
                })]),
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    };
    SalaryCodeComponent.prototype.LINES = function (formName) {
        return this[formName].get('line');
    };
    SalaryCodeComponent.prototype.addLINES = function (formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    };
    SalaryCodeComponent.prototype.deleteLINES = function (index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    };
    SalaryCodeComponent.prototype.calculateTotal = function (formName) {
        this.total_amount = 0;
        for (var i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Allowance') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    };
    SalaryCodeComponent.prototype.toggle = function (filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    };
    SalaryCodeComponent.prototype.getData = function (filterAllDocs, getOneDoc) {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getSalaryCode(filterAllDocs, getOneDoc).subscribe(function (res) {
            if (res["data"]["getSalaryCode_Q"].code !== "") {
                if (getOneDoc) {
                    _this.data = res["data"]["getSalaryCode_Q"][0];
                    _this.editDataForm = _this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        line: _this._fb.array([]),
                        gamount: ''
                    });
                    _this.editDataForm.patchValue(_this.data);
                    for (var i = 0; i < _this.data["line"].length; i++) {
                        _this.LINES('editDataForm').push(_this._fb.group(_this.data["line"][i]));
                    }
                    _this.calculateTotal(('editDataForm'));
                    _this.toggle('editMode');
                }
                else {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res["data"]["getSalaryCode_Q"]);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["getSalaryCode_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryCodeComponent.prototype.setData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryCode(formData).subscribe(function (res) {
            if (res["data"]["setSalaryCode_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setSalaryCode_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryCodeComponent.prototype.updateData = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryCodeDoc(formData).subscribe(function (res) {
            if (res["data"]["setSalaryCodeDoc_M"].code !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["setSalaryCodeDoc_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SalaryCodeComponent.prototype.getDoc = function (docId) {
        this.getData("", docId);
    };
    SalaryCodeComponent.prototype.deleteDoc = function (docId) {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delSalaryCodeDoc(docId).subscribe(function (res) {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delSalaryCodeDoc_M"]) {
                    _this.toggle('searchMode');
                    _this.error = false;
                    _this.errorMessage = "";
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["data"]["delSalaryCodeDoc_M"].message;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    //mat table paginator and filter functions
    SalaryCodeComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SalaryCodeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    SalaryCodeComponent.prototype.ngOnDestroy = function () {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SalaryCodeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SalaryCodeComponent.prototype, "sort", void 0);
    SalaryCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'salarycode',
            template: __webpack_require__(/*! ./salarycode.component.html */ "./src/app/setup/salarycode.component.html")
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SalaryCodeComponent);
    return SalaryCodeComponent;
}());



/***/ }),

/***/ "./src/app/shared/elish.material.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/elish.material.module.ts ***!
  \*************************************************/
/*! exports provided: ElishCustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElishCustomMaterialModule", function() { return ElishCustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';




var ElishCustomMaterialModule = /** @class */ (function () {
    function ElishCustomMaterialModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon('dashboard-black', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon('account_circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon('track_changes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon('place', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon('vpn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon('new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('cached', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon('employee', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon('employer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon('radio_on', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon('radio_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon('salary', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon('drop_down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
    ElishCustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
            ],
            declarations: []
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ElishCustomMaterialModule);
    return ElishCustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"label-text-grey\">Copyright 2019. <a href=\"#\" target=\"_blank\">Biz Technosys Pvt Ltd</a></p>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/dash.header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/header/dash.header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <!---\n    <button mat-mini-fab color=\"warn\">\n        <mat-icon svgIcon=\"menu\"></mat-icon>\n      </button>\n  <button mat-mini-fab color=\"warn\" [matMenuTriggerFor]=\"rootMenu\">\n    <mat-icon svgIcon=\"menu\"></mat-icon>\n  </button>-->\n  <mat-menu #rootMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/aboutus\"><mat-icon svgIcon=\"dashboard-black\" color=\"primary\"></mat-icon>Home</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"emplMenu\"><mat-icon svgIcon=\"star\" color=\"primary\"></mat-icon>Manage</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"setupMenu\"><mat-icon svgIcon=\"business\" color=\"primary\"></mat-icon>Setup</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"contactMenu\"><mat-icon svgIcon=\"phone\" color=\"primary\"></mat-icon>Contact</button>\n  </mat-menu>\n  <mat-menu #emplMenu=\"matMenu\">\n      <button mat-menu-item routerLink=\"/employee\">Employee</button>\n      <button mat-menu-item routerLink=\"/salary\">Salary Vouchers</button>\n      <button mat-menu-item routerLink=\"/voucher\">Vouchers</button>\n      <button mat-menu-item routerLink=\"/expenses\">Expenses</button>\n  </mat-menu>\n  <mat-menu #setupMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/jobcode\">Job Code</button>\n    <button mat-menu-item routerLink=\"/salarycode\">Salary Code</button>\n    <button mat-menu-item routerLink=\"/leavecode\">Leave Code</button>\n  </mat-menu>\n  <mat-menu #contactMenu=\"matMenu\">\n    <a href=\"{{ configData.fblink }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with FaceBook\" svgIcon=\"facebook\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.linkedin }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with LinkedIn\" svgIcon=\"linkedin\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.github }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with GitHub\" svgIcon=\"github\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.emailid }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"email\" svgIcon=\"email\"></mat-icon>\n      </button>\n    </a>\n  </mat-menu>\n  <mat-icon class=\"example-icon\" svgIcon=\"{{ imageUrl }}\"></mat-icon>\n  <span matTooltip=\"About us\">{{ pageTitle }}</span><span class=\"example-spacer\"></span>\n  <span matTooltip=\"Update Settings\"><button mat-icon-button routerLink=\"/settings\"><mat-icon svgIcon=\"account_circle\"></mat-icon></button></span>\n  <span matTooltip=\"eMail\"><button mat-icon-button (click)=\"formShowing=!formShowing\"><mat-icon svgIcon=\"email\"></mat-icon></button></span>\n  <!--<span matTooltip=\"Security Policy\" [matMenuTriggerFor]=\"helpSecMenu\"><button mat-icon-button><mat-icon svgIcon=\"security\"></mat-icon></button></span>-->\n  <span matTooltip=\"Help\" [matMenuTriggerFor]=\"helpMenu\"><button mat-icon-button><mat-icon svgIcon=\"help\"></mat-icon></button></span>\n</mat-toolbar>\n<mat-menu #helpSecMenu=\"matMenu\">\n  <helpdesk helpType=\"security\"></helpdesk>\n</mat-menu>\n<mat-menu #helpMenu=\"matMenu\">\n    <helpdesk helpType=\"{{ helpType }}\"></helpdesk>\n</mat-menu>\n<mat-card class=\"form\" *ngIf=\"formShowing\">\n  <form #emailForm=\"ngForm\" class=\"example-form\">\n    <mat-card-title>Contact Us</mat-card-title>\n    <mat-card-content *ngIf=\"!emailSent else showEmailSentCard\">\n        <mat-error *ngIf=\"brokenNetwork\">Network connection error.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Name\" id=\"name\" name=\"name\" #name=\"ngModel\" ngModel required\n          minlength=\"3\" maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n      <mat-error *ngIf=\"name.errors['required']\">Name is required.</mat-error>\n      <mat-error *ngIf=\"name.errors['minlength']\">Name should be minimum 3 Characters.</mat-error>\n      <mat-error *ngIf=\"name.errors['maxlength']\">Name should be maximum 30 Characters.</mat-error>\n      </span>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone\" name=\"phone\" #phone=\"ngModel\" ngModel required minlength=\"10\" maxlength=\"10\"\n          pattern=\"[0-9]+\">\n      </mat-form-field>\n      <mat-error *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">10 Digits valid phone number (digits) is required.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"eMail\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">A Valid email is required.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Message\" name=\"message\" #message=\"ngModel\" ngModel required minlength=\"10\"\n          maxlength=\"200\">\n        </textarea>\n      </mat-form-field>\n      <mat-hint align=\"end\">{{message.value?.length}} / 200</mat-hint>\n      <mat-error *ngIf=\"message.invalid && (message.dirty || message.touched)\">Message is required.</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" (click)=\"onSubmit(emailForm.value);this.emailForm.reset();\" mat-raised-button [disabled]=\"!emailForm.valid\"\n          color=\"primary\">Post</button>\n      </mat-card-actions>\n    </mat-card-content>\n    <ng-template #showEmailSentCard>\n      <mat-card-title>\n        <font color=\"red\">eMail is sent.</font>\n      </mat-card-title>\n      <mat-card-actions align=\"start\">\n        <button type=\"button\" (click)=\"this.emailForm.reset();emailSent=false;formShowing=!formShowing;\" mat-raised-button color=\"primary\">Close</button>\n      </mat-card-actions>\n    </ng-template>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/header/dash.header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/header/dash.header.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent(_backendService) {
        this._backendService = _backendService;
        this.emailSent = false;
        this.formShowing = false;
        this.dataLoading = false;
        this.brokenNetwork = false;
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
        this.configData = this._backendService.getConfig();
    };
    DashboardHeaderComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.dataLoading = true;
        //console.log(formData);
        this._backendService.sendEmail(formData).subscribe(function (res) {
            //console.log(res);
        }, function (error) {
            //console.log(error);
            console.log("API didn't respond.");
            _this.brokenNetwork = true;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
            _this.emailSent = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DashboardHeaderComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DashboardHeaderComponent.prototype, "pageTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DashboardHeaderComponent.prototype, "helpType", void 0);
    DashboardHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-header',
            template: __webpack_require__(/*! ./dash.header.component.html */ "./src/app/shared/header/dash.header.component.html")
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-mini-fab color=\"warn\" [matMenuTriggerFor]=\"rootMenu\">\n    <mat-icon svgIcon=\"menu\"></mat-icon>\n  </button>\n  <mat-menu #rootMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/aboutus\"><mat-icon svgIcon=\"dashboard-black\" color=\"primary\"></mat-icon>Home</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"emplMenu\"><mat-icon svgIcon=\"star\" color=\"primary\"></mat-icon>Manage</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"setupMenu\"><mat-icon svgIcon=\"business\" color=\"primary\"></mat-icon>Setup</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"contactMenu\"><mat-icon svgIcon=\"phone\" color=\"primary\"></mat-icon>Contact</button>\n  </mat-menu>\n  <mat-menu #emplMenu=\"matMenu\">\n      <button mat-menu-item routerLink=\"/employee\">Employee</button>\n      <button mat-menu-item routerLink=\"/salary1\">Salary Vouchers</button>\n      <!-- <button mat-menu-item routerLink=\"/voucher\">Vouchers</button>\n      <button mat-menu-item routerLink=\"/expenses\">Expenses</button> -->\n  </mat-menu>\n  <mat-menu #setupMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/jobcode\">Job Code</button>\n    <button mat-menu-item routerLink=\"/salarycode\">Salary Code</button>\n    <button mat-menu-item routerLink=\"/leavecode\">Leave Code</button>\n  </mat-menu>\n  <mat-menu #contactMenu=\"matMenu\">\n    <a href=\"{{ configData.fblink }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with FaceBook\" svgIcon=\"facebook\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.linkedin }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with LinkedIn\" svgIcon=\"linkedin\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.github }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with GitHub\" svgIcon=\"github\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.emailid }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"email\" svgIcon=\"email\"></mat-icon>\n      </button>\n    </a>\n  </mat-menu>\n  <mat-icon class=\"example-icon\" svgIcon=\"{{ imageUrl }}\"></mat-icon>\n  <span matTooltip=\"About us\">{{ pageTitle }}</span><span class=\"example-spacer\"></span>\n  <span matTooltip=\"Update Settings\"><button mat-icon-button routerLink=\"/settings\"><mat-icon svgIcon=\"account_circle\"></mat-icon></button></span>\n  <span matTooltip=\"eMail\"><button mat-icon-button (click)=\"formShowing=!formShowing\"><mat-icon svgIcon=\"email\"></mat-icon></button></span>\n  <!--<span matTooltip=\"Security Policy\" [matMenuTriggerFor]=\"helpSecMenu\"><button mat-icon-button><mat-icon svgIcon=\"security\"></mat-icon></button></span>-->\n  <span matTooltip=\"Help\" [matMenuTriggerFor]=\"helpMenu\"><button mat-icon-button><mat-icon svgIcon=\"help\"></mat-icon></button></span>\n</mat-toolbar>\n<mat-menu #helpSecMenu=\"matMenu\">\n  <helpdesk helpType=\"security\"></helpdesk>\n</mat-menu>\n<mat-menu #helpMenu=\"matMenu\">\n    <helpdesk helpType=\"{{ helpType }}\"></helpdesk>\n</mat-menu>\n<mat-card class=\"form\" *ngIf=\"formShowing\">\n  <form #emailForm=\"ngForm\" class=\"example-form\">\n    <mat-card-title>Contact Us</mat-card-title>\n    <mat-card-content *ngIf=\"!emailSent else showEmailSentCard\">\n        <mat-error *ngIf=\"brokenNetwork\">Network connection error.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Name\" id=\"name\" name=\"name\" #name=\"ngModel\" ngModel required\n          minlength=\"3\" maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n      <mat-error *ngIf=\"name.errors['required']\">Name is required.</mat-error>\n      <mat-error *ngIf=\"name.errors['minlength']\">Name should be minimum 3 Characters.</mat-error>\n      <mat-error *ngIf=\"name.errors['maxlength']\">Name should be maximum 30 Characters.</mat-error>\n      </span>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone\" name=\"phone\" #phone=\"ngModel\" ngModel required minlength=\"10\" maxlength=\"10\"\n          pattern=\"[0-9]+\">\n      </mat-form-field>\n      <mat-error *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">10 Digits valid phone number (digits) is required.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"eMail\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">A Valid email is required.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Message\" name=\"message\" #message=\"ngModel\" ngModel required minlength=\"10\"\n          maxlength=\"200\">\n        </textarea>\n      </mat-form-field>\n      <mat-hint align=\"end\">{{message.value?.length}} / 200</mat-hint>\n      <mat-error *ngIf=\"message.invalid && (message.dirty || message.touched)\">Message is required.</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" (click)=\"onSubmit(emailForm.value);this.emailForm.reset();\" mat-raised-button [disabled]=\"!emailForm.valid\"\n          color=\"primary\">Post</button>\n      </mat-card-actions>\n    </mat-card-content>\n    <ng-template #showEmailSentCard>\n      <mat-card-title>\n        <font color=\"red\">eMail is sent.</font>\n      </mat-card-title>\n      <mat-card-actions align=\"start\">\n        <button type=\"button\" (click)=\"this.emailForm.reset();emailSent=false;formShowing=!formShowing;\" mat-raised-button color=\"primary\">Close</button>\n      </mat-card-actions>\n    </ng-template>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_backendService) {
        this._backendService = _backendService;
        this.emailSent = false;
        this.formShowing = false;
        this.dataLoading = false;
        this.brokenNetwork = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.configData = this._backendService.getConfig();
    };
    HeaderComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.dataLoading = true;
        //console.log(formData);
        this._backendService.sendEmail(formData).subscribe(function (res) {
            //console.log(res);
        }, function (error) {
            //console.log(error);
            console.log("API didn't respond.");
            _this.brokenNetwork = true;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
            _this.emailSent = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "pageTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "helpType", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/helpdesk/helpdesk.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/helpdesk/helpdesk.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWxwZGVzay9oZWxwZGVzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/helpdesk/helpdesk.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/helpdesk/helpdesk.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"helpType=='homepage'\" class=\"primary\">\n        <mat-icon svgIcon=\"help\"></mat-icon>\n        <b>Help:</b> Login Methods\n        <br>\n        <br> Biz Technosys App provide three different methods to sign in.\n        <br>\n        <br> You can use existing Google/Facebook login or using your email with any password.\n        <br>app password is NOT same as your email password.\n        <br>\n        <br> Please send email to contact@elishconsulting.com for any support.\n</div>\n<div *ngIf=\"helpType=='leavepage'\" class=\"primary\">\n        <mat-icon svgIcon=\"help\"></mat-icon>\n        <b>Help:</b> Setup Leave Code\n        <br>\n        <br> Setup different Leave Codes for different Employee Types.\n        <br> Later, on Employee manage page, you can attach each leave type setup here to Employee.\n</div>\n<div *ngIf=\"helpType=='employeepage'\" class=\"primary\">\n                <mat-icon svgIcon=\"help\"></mat-icon>\n                <b>Help:</b> Manage Employee\n                <br>\n                <br> Please fill in all required details for an Employee.\n                <br><br>\n                Please give employee a unique employee ID and a \"SECRET Key\" shared only with your employee.\n                <br><br>\n                Employee will be able to use this app to see his Salary and other Vouchers using this SECRET KEY only.\n        </div>\n<div *ngIf=\"helpType=='jobpage'\" class=\"primary\">\n        <mat-icon svgIcon=\"help\"></mat-icon>\n        <b>Help:</b> Setup Job Code\n        <br>\n        <br> Setup different Job Codes for different Employee Types.\n        <br> Later, on Employee manage page, you can attach each Job type setup here to Employee.\n</div>\n<div *ngIf=\"helpType=='salarypage'\" class=\"primary\">\n                <mat-icon svgIcon=\"help\"></mat-icon>\n                <b>Help:</b> Setup Salary Code\n                <br>\n                <br> Setup different Salary Codes for different Employee Types.\n                <br> Later, on Employee manage page, you can attach each Salary type setup here to Employee.\n                <br><br>\n                please see, Employee salary will be calculated based on this salary code attached to his/her profile.\n        </div>\n<div *ngIf=\"helpType=='settingspage'\">\n        <mat-vertical-stepper #stepper=\"matVerticalStepper\">\n                <mat-step label=\"Step 1\">\n                        Please signup or use your Google/Facebook account to login.\n                </mat-step>\n                <mat-step label=\"Step 2\">\n                        You will need a company code to access your provider data.\n                        <br> For trail accounts, please use\n                        <font color=\"red\">guest</font> as company\n                        <mat-icon svgIcon=\"vpn\"></mat-icon> code.\n                </mat-step>\n                <mat-step label=\"Step 3\">\n                        <font color=\"red\"> If you are an admin or company/provider</font>\n                        <br> Click below to signup for a\n                        <mat-icon svgIcon=\"new\"></mat-icon>\n                        <mat-icon svgIcon=\"vpn\"></mat-icon>.\n                        <br> Using A provider (Pro) Account, you can upload\n                        <mat-icon svgIcon=\"cloud\">\"</mat-icon> your own Content for your Organizaiton.\n                </mat-step>\n                <mat-step label=\"Step 4\">\n                        <font color=\"red\">\n                                <br>IMPORTANT\n                                <br> There is only ONE FREE Admin key per Company. That means, only one Admin can see \"ALL\" data\n                                and all other users will see \"only their own data they created\".</font>\n                        <br>\n                        <br> If you need more admin keys, please send an email to info@elishconsulting.com\n                </mat-step>\n        </mat-vertical-stepper>\n</div>\n<div *ngIf=\"helpType=='settings'\">\n        <mat-vertical-stepper #stepper=\"matVerticalStepper\">\n                <mat-step label=\"Step 1\">\n                        You are signed in now, please update your\n                        <mat-icon svgIcon=\"account_circle\"></mat-icon> preferences.\n                </mat-step>\n                <mat-step label=\"Step 2\">\n                        You will need a company code to access your provider data.\n                        <br> For trail accounts, please use\n                        <font color=\"red\">guest</font> as company\n                        <mat-icon svgIcon=\"vpn\"></mat-icon> code.\n                </mat-step>\n                <mat-step label=\"Step 3\">\n                        <font color=\"red\"> If you are an admin or company/provider</font>\n                        <br> Click below to signup for a\n                        <mat-icon svgIcon=\"new\"></mat-icon>\n                        <mat-icon svgIcon=\"vpn\"></mat-icon>.\n                        <br> Using A provider (Pro) Account, you can upload\n                        <mat-icon svgIcon=\"cloud\">\"</mat-icon> your own Content for your Organizaiton.\n                </mat-step>\n                <mat-step label=\"Step 4\">\n                        <font color=\"red\">\n                                <br>IMPORTANT\n                                <br> There is only ONE FREE Admin key per Company. That means, only one Admin can see \"ALL\" data\n                                and all other users will see \"only their own data they created\".</font>\n                        <br>\n                        <br> If you need more admin keys, please send an email to info@elishconsulting.com\n                </mat-step>\n        </mat-vertical-stepper>\n</div>\n<div *ngIf=\"helpType=='security'\" class=\"primary\">\n        <mat-icon svgIcon=\"security\"></mat-icon>\n        <b>Help:</b> Security Rules\n        <br>\n        <br> ElishOne ERP Data implements very strict security data policy.\n        <br> At any give point of time, ElishOne ERP Data owner is alway the person who orginally signed up for Pro key.\n        <br><br>\n        Whenever, Pro Account owner changes the key, all other user access will immediatly be removed.\n        <br><br>\n        At any given time, Pro Account Owner can ask us to delete his organization data by simple emailing us at info@elishconsulting.com\n        <br><br>\n        <mat-vertical-stepper #stepper=\"matVerticalStepper\">\n                        <mat-step>\n                            <ng-template matStepLabel></ng-template>\n                            <label class=\"middle-headline\">Step 1: </label>Login with Google, Facebook or your email ID.\n                        </mat-step>\n                        <mat-step>\n                            <ng-template matStepLabel></ng-template>\n                                <label class=\"middle-headline\">Step 2: </label> create a new a unique Company Name\n                                <mat-icon svgIcon=\"business\"></mat-icon> and a secret key.\n                                <mat-icon svgIcon=\"new\"></mat-icon> Pro\n                                <mat-icon svgIcon=\"vpn\"></mat-icon>\n                        </mat-step>\n                        <mat-step>\n                            <p class=\"bodytext\">\n                                <label class=\"middle-headline\">Step 3: </label>share this orgname and key with your employees.\n                            </p>\n                            <span class=\"label-error\">\n                                * share your\n                                < orgname and Secret key > with any person, and person will have access to all your data.\n                                <br><br> ** Only you can change your secret key (simple browse to settings<mat-icon svgIcon=\"account_circle\"></mat-icon> page and write same orgname\n                                    with a new key).\n                                    <br><br> *** Changing secret key will remove access to all your existing users who are using your\n                                    orgname and secret key.\n                                    <br><br> **** If you change orgname, you will create a new org and will lose all data from last organization.\n                            </span>\n                        </mat-step>\n                        <mat-step>\n                            <p class=\"bodytext\">\n                                <label class=\"middle-headline\">Step 4: </label>Happy Tracking !!!\n                                <mat-icon svgIcon=\"place\"></mat-icon>\n                                <br/>\n                                <img src=\"assets/img/tracker_2.png\" width=\"424\" height=\"126\">\n                            </p>\n                        </mat-step>\n                    </mat-vertical-stepper>\n</div>"

/***/ }),

/***/ "./src/app/shared/helpdesk/helpdesk.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/helpdesk/helpdesk.component.ts ***!
  \*******************************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpdeskComponent = /** @class */ (function () {
    function HelpdeskComponent() {
        this.showHelp = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpdeskComponent.prototype, "helpType", void 0);
    HelpdeskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'helpdesk',
            template: __webpack_require__(/*! ./helpdesk.component.html */ "./src/app/shared/helpdesk/helpdesk.component.html"),
            styles: [__webpack_require__(/*! ./helpdesk.component.css */ "./src/app/shared/helpdesk/helpdesk.component.css")]
        })
    ], HelpdeskComponent);
    return HelpdeskComponent;
}());



/***/ }),

/***/ "./src/app/shared/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Home\" imageUrl=\"home\" helpType=\"homepage\"></header>\n<mat-card [@fallIn]='state'>\n  <mat-card-header>\n    <mat-card-title>\n      <mat-icon svgIcon=\"dashboard-black\"></mat-icon>Biz Technosys Pvt lmt\n    </mat-card-title>\n    <mat-card-subtitle>HRMS App</mat-card-subtitle>\n  </mat-card-header>\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n  <mat-card-content *ngIf=\"!this.user else showLoggedIn\">\n    <mat-divider></mat-divider>\n    <mat-error *ngIf=\"error\" [@fallIn]='state'>Login credentials are not verified. Error: {{ errorMessage }}</mat-error>\n    <form #formData=\"ngForm\" (ngSubmit)=\"login(formData.value)\" class=\"example-form\">\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Log in</button>\n      </mat-card-actions>\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"email\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <br>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Please enter a valid email.</mat-error>\n      <mat-form-field class=\"example-form\">\n        <input matInput type=\"password\" placeholder=\"app password\" name=\"password\" #password=\"ngModel\" ngModel required minlength=\"5\"\n          maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <mat-error *ngIf=\"password.errors['required']\">Password is Required.</mat-error>\n        <mat-error *ngIf=\"password.errors['minlength']\">Password can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"password.errors['maxlength']\">Password can't be more than 30 characters.</mat-error>\n      </span>\n    </form>\n    <mat-card-actions>\n      <mat-divider></mat-divider>\n      <button mat-button routerLink=\"/signup\">\n        No account? <strong>Create one with your email here</strong>\n      </button>\n    </mat-card-actions>\n  </mat-card-content>\n  <mat-card-content *ngIf=\"socialAuth\">\n    <mat-chip-list class=\"mat-chip-list-stacked\" style=\"margin-left: 170px;\">\n      <mat-chip color=\"primary\" selected=\"true\" (click)=\"login('FB')\">\n        Login With Facebook\n      </mat-chip>\n      <mat-chip color=\"warn\" selected=\"true\" (click)=\"login('GOOGLE')\">\n        Login With Google\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n  <ng-template #showLoggedIn>\n    <button type=\"button\" routerLink=\"/settings\" mat-raised-button color=\"primary\">Click here to access your Account</button>\n    <br/><br/><br/><br/>\n    <button type=\"button\" (click)=\"logout()\" mat-raised-button color=\"primary\">Logout</button>\n  </ng-template>\n</mat-card>"

/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/shared/router.animations.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _backendService) {
        this._router = _router;
        this._backendService = _backendService;
        this.state = '';
        this.socialAuth = false; // show Google and FB Sign in only when social auth is enabled
        this.error = false;
        this.errorMessage = '';
        this.dataLoading = false;
        this.user = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socialAuthEnabled) {
            this.socialAuth = true; // show Google and FB Sign in only when social auth is enabled
        }
        if (localStorage.getItem("token")) {
            this.user = true;
        }
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.loginUser(formData).subscribe(function (res) {
            if (res["data"]["loginUser_Q"].token !== "") {
                window.localStorage.setItem("token", res["data"]["loginUser_Q"].token);
                _this.user = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["loginUser_Q"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        window.localStorage.removeItem("token");
        this.user = false;
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/login/login.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/login/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/shared/login/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header pageTitle=\"Sign Up\" imageUrl=\"new\" helpType=\"homepage\"></header>\n<mat-card [@fallIn]='state' *ngIf=\"!savedChanges else showSavedChangesCard\">\n  <form #formData='ngForm'> \n    <mat-card-content>\n      <mat-card-title>\n        <span class=\"small-headline\">Create Account</span>\n        <span class=\"small-spacer\"></span>\n        <a [routerLink]=\"['/login']\" color=\"primary\">\n          <mat-icon svgIcon=\"backspace\"></mat-icon>\n        </a>\n      </mat-card-title>\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"button\" (click)=\"onSubmit(formData.value);\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Sign up</button>\n      </mat-card-actions>\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"name\" name=\"name\" #name=\"ngModel\" ngModel required minlength=\"5\" maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <mat-error *ngIf=\"name.errors['required']\">Name is Required.</mat-error>\n        <mat-error *ngIf=\"name.errors['minlength']\">Name can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"name.errors['maxlength']\">Name can't be more than 30 characters.</mat-error>\n      </span>\n      <br />\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"email\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <br />\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Please enter a valid email.</mat-error>\n      <mat-form-field class=\"example-form\">\n        <input matInput type=\"password\" placeholder=\"Choose app password\" name=\"password\" #password=\"ngModel\" ngModel required minlength=\"5\"\n          maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <mat-error *ngIf=\"password.errors['required']\">Password is Required.</mat-error>\n        <mat-error *ngIf=\"password.errors['minlength']\">Password can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"password.errors['maxlength']\">Password can't be more than 30 characters.</mat-error>\n      </span>\n    </mat-card-content>\n  </form>\n</mat-card>\n<ng-template #showSavedChangesCard>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-error>\n    A New userId is created. Plese login back with your emailid and password.\n  </mat-error>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-card-actions align=\"start\">\n    <button type=\"button\" (click)=\"savedChanges=false;routeLoginPage();\" mat-raised-button color=\"primary\">Close</button>\n  </mat-card-actions>\n</ng-template>\n<footer></footer>"

/***/ }),

/***/ "./src/app/shared/login/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/login/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/shared/router.animations.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend-service */ "./src/app/services/backend-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.state = '';
        this.idtaken = false;
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
    }
    SignupComponent.prototype.routeLoginPage = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.createUser(formData).subscribe(function (res) {
            if (res["data"]["addUser_M"].email !== "") {
                _this.savedChanges = true;
                _this.error = false;
                _this.errorMessage = "";
            }
            else {
                _this.error = true;
                _this.errorMessage = res["data"]["addUser_M"].message;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/shared/login/signup.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/shared/router.animations.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/router.animations.ts ***!
  \*********************************************/
/*! exports provided: moveIn, fallIn, moveInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInLeft", function() { return moveInLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}


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
var environment = {
    production: false,
    emailAPI: 'http://XXXXXX.com/contact-form.php',
    database: 'graphql',
    social: {
        fblink: 'https://www.facebook.com/elishconsulting',
        linkedin: 'YYYYYYYY',
        github: 'https://github.com/AmitXShukla',
        emailid: 'info@elishconsulting.com'
    },
    socialAuthEnabled: false,
    graphql: 'https://ancient-meadow-48976.herokuapp.com/graphql'
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Rajesh Saha\Node\MeanStack\Employee-Payroll\Client\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map