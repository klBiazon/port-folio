"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_1 = require("./app");
// COMPONENTS
var todo_cmp_1 = require("./todo/components/todo-cmp");
var main_1 = require("./main-page/components/main");
// ROUTING
var todo_route_1 = require("./todo/components/todo-route");
var main_route_1 = require("./main-page/components/main-route");
// SERVICES
var todo_service_1 = require("./todo/services/todo-service");
var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: "full" },
    { path: '**', redirectTo: '/', pathMatch: "full" },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                todo_route_1.todoRouting,
                main_route_1.mainRouting,
                router_1.RouterModule.forRoot(appRoutes) // TO SET THE DEFAULT ROUTE
            ],
            declarations: [
                app_1.App,
                todo_cmp_1.TodoCmp,
                main_1.Main
            ],
            providers: [
                todo_service_1.TodoService,
            ],
            bootstrap: [
                app_1.App,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
