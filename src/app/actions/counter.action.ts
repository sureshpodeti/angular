
import {Action} from '@ngrx/store';

export enum CounterActionTypes{
    increment = '[Counter Component] increment',
    decrement = '[Counter Component] decrement',
}


// INCREMENT ACTION
export class Increment implements Action{
    readonly type = CounterActionTypes.increment;

    constructor(public payload: any){}
}


//DECRMENT ACTION
export class Decrement implements Action{
    readonly type = CounterActionTypes.decrement;
    
    constructor(public payload: any){}
}


export type CounterAction = Increment | Decrement;