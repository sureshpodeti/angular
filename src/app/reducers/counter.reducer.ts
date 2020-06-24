import { InitialState } from '@ngrx/store/src/models';
import { CounterAction, CounterActionTypes } from '../actions/counter.action';


// STORE
export interface CounterState{
    counter: number
    prev: number
    prevType: string 
}

let initialState: CounterState = {
    counter: 0,
    prev: undefined,
    prevType: undefined
}



//REDUCER
export function CounterReducer(state = initialState, action: CounterAction){
    switch(action.type){
        case CounterActionTypes.increment: {
            return {
                counter: state.counter + action.payload,
                prev: state.counter,
                prevType: 'increment'
            }
        }

        case CounterActionTypes.decrement: {
            return {
                counter: state.counter - action.payload,
                prev: state.counter,
                prevType: 'decrement'
            }
        }

        default: {
            return state;
        }
    }

}