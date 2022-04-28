import {createAction} from '@ngrx/store';

export const increment= createAction("inc");
export const decremnet = createAction("decr");
export const reset = createAction("rset");