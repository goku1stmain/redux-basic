// first thing to do his configure our store 
import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservation-slice";
export const store=configureStore({
    reducer:{
        // this will all the slices
        reservations:reservationsReducer,
    }
}) //take in a object 
// inside that we are going to have reducers 
// rootstate is the state inside the configure store 
// 
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;


// what happens is 
// you create store using configureStore which is imported from redux toolkit
// then it takes in a object and has an attribute reducer inside it which will have all the slices 
// then you will export this and to index.tsx and call provider 
// and wrap it around app component so all the stuff is can get access to the slice 


