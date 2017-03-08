import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavgationComponent } from './navgation/navgation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavgationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
