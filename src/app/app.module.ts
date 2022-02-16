import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolComponent } from './lol/lol.component';
import { Lol1Component } from './lol1/lol1.component';
import { Lol2Component } from './lol2/lol2.component';

@NgModule({
  declarations: [
    AppComponent,
    LolComponent,
    Lol1Component,
    Lol2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
