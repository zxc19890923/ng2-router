import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {bootstap} from "../node_modules/bootstrap/dist/js/bootstrap.js";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

import {routing} from "./app.router";

import  {HomeComponent} from "./home.component";
import  {AboutComponent} from "./about.component";
import  {ProjectComponent} from "./project.component";
import  {ServiceComponent} from "./service.component";
import  {ContactComponent} from "./contact.component";

// 1. 组件
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectComponent,
        ServiceComponent,
        ContactComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {

}