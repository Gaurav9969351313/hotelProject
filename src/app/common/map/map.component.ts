import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MapService } from './map.service';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  @Input() lat :any;
  @Input() lng:any;

  @Input() location: string;

  public isPositionFound: boolean = false;
  public isMapLoaded: boolean = false;

  // public lat: number = 0;
  // public lng: number = 0;

  @ViewChild(AgmMap)
  set mapReady(directive: AgmMap) {
    directive.mapReady.subscribe((data) => {
      if (this.location) {
        this.getPosition(this.location);
      }
    })
  };

  constructor(public mapService: MapService) {}

  ngOnInit(): void {
   
  }

  private getPosition(location: string) {
    this.isMapLoaded = false;

    this.mapService.getLatLng(this.location).then(
       (position: any) => {
         this.lat = position.lat;
         this.lng = position.lng;
         this.isPositionFound = true;
         this.isMapLoaded = true;
      }).catch((err) => {
        this.isPositionFound = false;
        this.isMapLoaded = true;
      });
    }
}
