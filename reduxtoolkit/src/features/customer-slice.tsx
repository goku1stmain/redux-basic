import { createSlice,PayloadAction } from "@reduxjs/toolkit";

//here we are going to store array of objects 
interface Customer{
        id:String,
        name:String,
        food:String[],
}
interface customerType{
    value:Customer[]
}
const initialState:customerType={
    value:[]
}
export const customerSlice=createSlice({
    name:"customers",
    initialState,
    reducers:{
        // set of method to change states in 
        addCustomer:(state,action:PayloadAction<Customer>)=>{
            state.value.push(action.payload)
            // console.log(action.payload)
        },
    }
})

export const {addCustomer}=customerSlice.actions
export default customerSlice.reducer;