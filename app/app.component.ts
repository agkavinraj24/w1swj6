import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ShortenerService } from './shortener.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  urlRegex: RegExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  urlInputControl = new FormControl('', [ Validators.pattern(this.urlRegex) ]);
  list: any = [];

  constructor (public shortener: ShortenerService) {

  }

  ngOnInit() {
    console.log('a')
    this.shortener.list().then(list => {
      this.list = list;
    });
  }

  add() {
    console.log(this.urlInputControl);
    this.shortener.add(this.urlInputControl.value).subscribe(data => {
      console.log(data);
      this.list.push({
        url: 'b',
        short_url: 'bb'
      })
    });
  }

  clear() {
    this.urlInputControl.setValue('');
  }

  copy(item) {
    console.log(item);
  }
}
