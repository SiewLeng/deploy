import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppointmentTabComponentModule } from './home/appointment-tab/appointment-tab.module';
import { LeftMenuComponentComponentModule } from './modals/left-menu/left-menu.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppointmentTabComponentModule,
    LeftMenuComponentComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
