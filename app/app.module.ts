import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdFormFieldModule,
  MdCardModule,
  MdGridListModule,
  MatProgressBarModule
} from '@angular/material';
import { MdIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ShortenerService } from './shortener.service';

@NgModule({
  imports:      [ 
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdFormFieldModule, MdCardModule, ReactiveFormsModule, MdGridListModule, MdIconModule,
    MatProgressBarModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ShortenerService]
})
export class AppModule { }
