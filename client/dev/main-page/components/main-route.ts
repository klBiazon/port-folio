import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	Main
} from "../components/main";

const mainRoutes:Routes = [
	{
		path: "",
		component: Main,
		pathMatch: "full"
	}
]

export const mainRouting = RouterModule.forRoot(mainRoutes);
