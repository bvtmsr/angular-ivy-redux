import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decremnet, reset } from './counter.actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular1 ' + VERSION.major;
  myNumber: number;

  constructor(public store: Store<any>) {
    console.log(store);
  }

  ngOnInit() {
    this.store.select('count').subscribe((item) => {
      console.log(item);
      this.myNumber = item;
    });
  }

  incre(): void {
    this.store.dispatch(increment());
  }
  decre(): void {
    this.store.dispatch(decremnet());
  }
  reset(): void {
    this.store.dispatch(reset());
  }
}
