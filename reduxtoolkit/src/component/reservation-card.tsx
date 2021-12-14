import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservation-slice';
import {addCustomer} from "../features/customer-slice";
import {v4 as uuid} from "uuid";

interface ReservationTypes{
    name:string
    index:number
}
const ReservationCard=({name,index}:ReservationTypes)=>{
    const dispatch=useDispatch();
    return(
        <div 
        onClick={()=>
            dispatch(removeReservation(index)
            dispatch(addCustomer({
                id:"",
                name,
                food,
            }))
            )}
        className="reservation-card-container">{name}</div>
    )
}

export default ReservationCard;