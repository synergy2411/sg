import { Action } from '@ngrx/store';
import * as actions from './counter.actions';

const initialState = {
  counter: 0
}
export function counterReducer(
  state: { counter: number } = initialState,
  action: actions.CounterActions) {

    switch(action.type){
      case actions.INCREMENT:
        return {...state, counter: state.counter + 1}
      case actions.DECREMENT:
        return {...state, counter: state.counter - 1}
      case actions.ADD_COUNTER:
        return {...state, counter: state.counter + action.payload }
      case actions.SUBSTRACT_COUNTER:
        return { ...state , counter : state.counter - action.payload}
      default:
         return state;
    }
}
