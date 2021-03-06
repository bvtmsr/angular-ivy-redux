import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { from } from 'rxjs';
import { callReducer } from './counter.reducer';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({count:callReducer}) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
