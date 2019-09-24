import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import {NgPipesModule} from 'ngx-pipes';

import { MapsModule } from "../common/map/map.module";

import { RentalComponent } from "./rental.component";
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [{
  path: "rentals",
  component: RentalComponent,
  children: [
      { path: '', component: RentalListComponent },
      { path: ':id', component: RentalDetailComponent }
  ]
}]

@NgModule({
    declarations: [
      RentalComponent,
      RentalListComponent, 
      RentalListItemComponent, 
      RentalDetailComponent
    ],
    imports: [
        CommonModule,
        NgPipesModule,
        MapsModule,
        RouterModule.forChild(routes)
      ],
    providers: []
})

export class RentalModule { }