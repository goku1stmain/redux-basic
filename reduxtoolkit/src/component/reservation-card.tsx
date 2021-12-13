import React from 'react';

interface ReservationTypes{
    name:string
}
const ReservationCard=({name}:ReservationTypes)=>{
    return(
        <div className="reservation-card-container">{name}</div>
    )
}

export default ReservationCard;