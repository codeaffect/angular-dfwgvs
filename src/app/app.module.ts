import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
                  MaterialModule, FlexLayoutModule
                ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
