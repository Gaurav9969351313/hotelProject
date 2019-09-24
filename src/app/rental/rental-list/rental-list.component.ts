import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  arrRentals: Rental[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    return this.httpService.get('/rentals').subscribe((data) => {
      console.log(data);
      this.arrRentals = data;
    },
      (err) => {

      },
      () => {

      });
  }
}
