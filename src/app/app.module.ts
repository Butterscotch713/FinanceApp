import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Game1Component } from './game1/game1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Game1Component,
  ],
    imports: [
        BrowserModule,
        RouterLink,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
