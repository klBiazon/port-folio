import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule  } from "@angular/platform-browser";
import { Routes } from "@angular/router";
import { App }   from "./app";

// COMPONENTS
import { TodoCmp }   from "./todo/components/todo-cmp";
import { Main }   from "./main-page/components/main";

// ROUTING
import { todoRouting } from "./todo/components/todo-route";
import { mainRouting } from "./main-page/components/main-route";

// SERVICES
import { TodoService }   from "./todo/services/todo-service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: "full" },
  { path: '**', redirectTo: '/', pathMatch: "full" },
];

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      todoRouting,
      mainRouting,
      RouterModule.forRoot(appRoutes) // TO SET THE DEFAULT ROUTE
    ],
    declarations: [
      App,
      TodoCmp,
      Main
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
