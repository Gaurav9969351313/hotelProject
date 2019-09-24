import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../shared/http.service';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentRentalId:any;
  rentalDetails:any;

  lat = 51.678418;
  lng = 7.809007;

  constructor(private actRoute:ActivatedRoute,
              private httpService: HttpService) { }

  ngOnInit() {
    try {
      this.actRoute.params.subscribe((params:any)=>{
       
        this.httpService.get('/rentals/' + params["id"]).subscribe((data:any)=>{
            this.rentalDetails = data;
        });
      })
    } catch (error) {
      console.error(error);
    }
  }


}
