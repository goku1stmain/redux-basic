import { configureStore } from "@reduxjs/toolkit";
// this is a wrapper around the redux store function 
import counterReducer from '../features/counter/counter-slice';

// createing our redux store 
// this also takes and option object has parameter 
//
export const store= configureStore({
    reducer:{
        counter:counterReducer
    },
})

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>
// so we are taking store dispatch function it is a function that takes certain types of function 
