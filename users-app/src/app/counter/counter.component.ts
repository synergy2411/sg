import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter : number;
  constructor(private store : Store<any>) { }

  ngOnInit() {
    this.store.subscribe(response => {
      console.log(response);
      this.counter = response['rootReducer'].counter;
    })
  }

  onIncrement(){
    // this.store.dispatch({type : "INCREMENT"});
    this.store.dispatch(new actions.IncrementCounter());
  }

  onDecrement(){
    // this.store.dispatch({type : "DECREMENT"});
    this.store.dispatch(new actions.DecrementCounter());
  }

  onAdd(num : number){
    this.store.dispatch(new actions.AddCounter(num))
  }
  onSubstract(num : number){
    this.store.dispatch(new actions.SubstractCounter(num))
  }
}
