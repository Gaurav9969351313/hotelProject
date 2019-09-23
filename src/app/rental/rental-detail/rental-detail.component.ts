import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentRentalId:any;
  rentalDetails:any;

  constructor(private actRoute:ActivatedRoute,
              private rentalService:RentalService) { }

  ngOnInit() {
    try {
      this.actRoute.params.subscribe((params:any)=>{
       
        this.rentalService.getRentalById(params["id"]).subscribe((data:any)=>{
            this.rentalDetails = data;
            console.log(data);
        });
      })
    } catch (error) {
      console.error(error);
    }
  }


}
