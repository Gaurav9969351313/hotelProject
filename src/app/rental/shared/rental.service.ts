import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor() { }

  arrRentals: Rental[] = [
    { "id": "0","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$170 per Night &#183; Free Cancellation" },
    { "id": "1","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$170 per Night &#183; Free Cancellation" },
    { "id": "2","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$180 per Night &#183; Free Cancellation" },
    { "id": "3","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$190 per Night &#183; Free Cancellation" },
    { "id": "4","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$200 per Night &#183; Free Cancellation" },
    { "id": "5","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$210 per Night &#183; Free Cancellation" },
    { "id": "6","city":"","street":"","category":"","bedrooms":"","description":"","dailyRate":"","createdAt":"","subtitle": "Whole Apartment", "title": "Some Nice Apartment", "text": "$220 per Night &#183; Free Cancellation" }
    ];

    public getRentals():Observable<Rental[]> {

      const rentalObservable: Observable<Rental[]> = new Observable((observer:any)=>{
        setTimeout(() => {
          observer.next(this.arrRentals);
        }, 1000);

        setTimeout(() => {
          observer.error("I am a error");
        }, 2000);

        setTimeout(() => {
          observer.complete();
        }, 3000);
      })
        return rentalObservable;      
    }

    public getRentalById(id){
      const rentalDetailsByIDObs = new Observable((observer:any)=>{
        setTimeout(() => {
          var a = this.arrRentals[id];
          observer.next(a);
        }, 100);
        setTimeout(() => {
          observer.error("I am a error");
        }, 2000);

        setTimeout(() => {
          observer.complete();
        }, 3000);
      });

      return rentalDetailsByIDObs;
    }
}
