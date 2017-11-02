import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import {StaticDataSource} from "./model/static.datasource";
import {ProductRepository} from "./model/product.repository";

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StaticDataSource, ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
