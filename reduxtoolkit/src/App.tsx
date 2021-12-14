
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./component/reservation-card";
import { addReservation } from "./features/reservation-slice";
import CustomerCard from "./component/customer";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("")
  const [customerNameInput,setCustomerNameInput]=useState("")
  const reservations = useSelector((state: RootState) => {
    return (state.reservations.value)
  })
  const customers = useSelector((state: RootState) => {
    return (state.customers.value)
  })

const dispatch=useDispatch();
  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("")
  }
    return (
      <div className="App">
        <div className="container">
          <div className="reservation-container">
            <div>
              <h5 className="reservation-header">Reservations</h5>
              <div className="reservation-cards-container">
                {reservations.map((name,index) => (
                  <ReservationCard name={name} index={index} />
                ))}
              </div>
            </div>
            <div className="reservation-input-container">
              
              <input value={reservationNameInput} onChange={e => (setReservationNameInput(e.target.value))} />
              <button onClick={handleAddReservation}>Add</button>
            </div>
          </div>
          <div className="customer-food-container">
                  {customers.map(customers=>{
                    return <CustomerCard/>
                  })}
          </div>
        </div>
      </div>
    );
  }

  export default App;