import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';

import { AppLoadModule } from './shared/app-load/app-load.module';
import { AppRoutingModule } from './app-routing.module';
import { RentalModule } from "./rental/rental.module";

import { HttpService } from "./shared/http.service";
import { LoggerService } from "./shared/logger.service";
import { HeaderComponent } from './header/header.component';

import { RentalComponent } from './rental/rental.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/rentals', pathMatch: 'full' },
  { path: 'rentals', component: RentalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppLoadModule,
    RentalModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
   
  ],
  providers: [HttpService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
