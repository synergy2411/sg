import { Action } from '@ngrx/store';

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";

export class IncrementCounter implements Action{
  readonly type = INCREMENT;
}
export class DecrementCounter implements Action{
  readonly type = DECREMENT;
}
export class AddCounter implements Action{
  readonly type = ADD_COUNTER;
  constructor(public payload : number){}
}
export class SubstractCounter implements Action{
  readonly type = SUBSTRACT_COUNTER;
  constructor(public payload : number){}
}

export type CounterActions =
  IncrementCounter | DecrementCounter |
  AddCounter | SubstractCounter;

