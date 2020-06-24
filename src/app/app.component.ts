import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from './reducers/counter.reducer';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement } from './actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-practise';


  // counter:number = 0;
  // prev: number = undefined;
  // prevAction: string = undefined;

  // increment(){
  //   this.prev = this.counter;
  //   this.counter += 1;
  //   this.prevAction = 'increment';
   
  // }

  // decrement(){
  //   this.prev = this.counter;
  //   this.counter -= 1;
  //   this.prevAction = 'decrement';
  // }


  counter: Observable<CounterState>;

  constructor(private store: Store<{ counter: CounterState }>){
    this.counter = store.pipe(select('counter'))
  }

  increment(){
    this.store.dispatch(new Increment(10));
  }

  decrement(){
    this.store.dispatch(new Decrement(5));
  }
}
