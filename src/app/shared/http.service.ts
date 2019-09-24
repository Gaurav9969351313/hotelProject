import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './GlobalConstants';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  
  httpGet(url: string) {
    return this.http.get(url);
  }

  httpPost(url, body) {
    return this.http.post(url, body);
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string) {
    return this.request(url, RequestMethod.Delete);
  }

  request(url: string, method: RequestMethod, body?: Object) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // var sessionData = JSON.parse(this.utilsService.getUserData("jSession"));
    // if(sessionData!=null) 
    //   var tokenToSend = sessionData["ResponseObject"]["token"];

    // if (method == RequestMethod.Get) {
    //   body = {};
    // }

    // if (sessionData!=null && sessionData!=undefined) {
    //   body["token"] =  tokenToSend;
    // }

    const requestOptions = new RequestOptions({
      url: GlobalConstants.serviceUrl + url,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this.http.request(request)
      .pipe(map((res: Response) => res!=null && res!=undefined ?  res.json(): {}));
  }
}
