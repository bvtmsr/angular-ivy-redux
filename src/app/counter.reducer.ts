import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { increment, decremnet, reset } from './counter.actions';

const initialState = 0;
//reducer function

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decremnet, (state) => {
    return state - 1;
  }),
  on(reset, (state) => {
    return 0;
  })
);

export function callReducer(state, action) {
  return _counterReducer(state, action);
}
