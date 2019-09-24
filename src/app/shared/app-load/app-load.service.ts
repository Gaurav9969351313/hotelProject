import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { APP_SETTINGS } from '../settings';
import { GlobalConstants } from '../GlobalConstants';

@Injectable()
export class AppLoadService {

  constructor(private httpClient: HttpClient) { }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {

          // Code for checking app opened in mobile or in desktop or laptop

          // shims

          // check version and if version is not above specified show error

          // browser

          // user bucket

          // increase visitor count

          // get latitude and longitute of user

          // put all data to redis

          resolve();
        });
  }

  getSettings(): Promise<any> {
    console.log(`getSettings:: before http.get call`);
    
    const promise = this.httpClient.get('./assets/appconfig.json')
      .toPromise()
      .then(settings => {
        GlobalConstants.serviceUrl = settings["serviceUrl"];
        console.log(`APP_SETTINGS: `, GlobalConstants);
        return settings;
      });

    return promise;
  }
}
