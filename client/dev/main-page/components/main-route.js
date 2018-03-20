"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_1 = require("../components/main");
var mainRoutes = [
    {
        path: "",
        component: main_1.Main,
        pathMatch: "full"
    }
];
exports.mainRouting = router_1.RouterModule.forRoot(mainRoutes);
