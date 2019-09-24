import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from "./map.component";
import { MapService } from "./map.service";
import { NgPipesModule, CamelizePipe } from "ngx-pipes";

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        CommonModule,
        NgPipesModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDdWSH9ztrtFkQK3KqKDzRZcoZw9AmHIsU'
        })
    ],
    providers: [MapService, CamelizePipe],
    exports: [MapComponent]
})

export class MapsModule { }