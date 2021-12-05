import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShortenerService {
  urls: object = {};

  constructor(public http: HttpClient) { }

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res([
          {
            url: 'ab',
            short_url: 'a'
          },
          {
            url: 'ab',
            short_url: 'a'
          },
          {
            url: 'ab'
          }
        ]);
      }, 500);
    });
  }

  add(url: string) : Observable {
    return this.http.post('https://www.googleapis.com/urlshortener/v1/url', {
      longUrl: url,
      key: 'AIzaSyCcJ_d9CCqP3nRlh742vwTLM41sHRG1lpQ'
    });
  }

}