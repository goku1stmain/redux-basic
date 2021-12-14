import { createSlice,PayloadAction } from "@reduxjs/toolkit";
// payloadaction is a typescript type that represents this in contents of one given action object

interface ReservationState { // your creating interface to represent the typescript string
    value:string[],
}
const initialState:ReservationState={
    value:[]
}
export const reservationSlice=createSlice({
    name:"reservations", // name is used in action types 
    initialState,
    reducers:{
        // which will bunch of methods to update our state
        // reducer will pass the state
        addReservation:(state,action:PayloadAction<string>)=>{
            state.value.push(action.payload)
            // console.log(action.payload)
        },
        removeReservation:(state,action:PayloadAction<number>)=>{
            state.value.splice(action.payload,1)
            console.log(action.payload)

        },
    }

})

export const {addReservation,removeReservation}=reservationSlice.actions
export default reservationSlice.reducer;

