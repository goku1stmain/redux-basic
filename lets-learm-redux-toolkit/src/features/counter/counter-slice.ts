// ducks patterns
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
// createslice is the main api function your going to define your redux logic 
// payloadaction is a typescript type that represents this in contents of one given action object

// intializing the interface
interface counterstate{
    value:number,
}
// intializing the intialstae as an object and passing type in interface form for the object which tell what kind of data type it shoudl take 
const intialState:counterstate={
    value:0,
}

// now we are going to define slice that containes our reduces logic 
// createslice takes in one parameter which is an object 

// redux toolkit uses an library called emer 
// emer tracks all our state updates and tracks all out mutations we try to do 
// once we are done it actually replace them and turns into correct imutable update
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        // increment 
        incremented(state){
            //its okay to do this because immer make it immutable 
            // under the hood
            state.value++;
        }
        // decrement 
        // reset
    }
})

// actionscreaters the idea it is an function that makes and return has an action object 
export const {incremented}=counterSlice.actions;
export default counterSlice.reducer;

// this above basic shape of redux slice 
// 1 use the create slice api define your state and one more reducers to apply updates 
// the export action creaters 
// export the reducers that handle all those cases 

