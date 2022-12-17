import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect, useContext} from 'react';
import UserContext from "../contexts/UserContext";


export default function AllAppointments() {

    const { theUser } = useContext(UserContext)

    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = ()=>{
        axios.get("http://localhost:4200/appointments/")
        .then((response)=>{
            console.log(response.data);
            setAppointments(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchAppointments();
    }, [])


    const listOfAppointments = appointments.map((eachAppointment)=>{

        return(<div key={eachAppointment._id} className="appointment-list-item">
            <Link to={"/appointments/"+eachAppointment._id}>
            <h3>{eachAppointment.firstName}</h3>
            </Link>
            </div>)
          

    })

return(
    <div className="list-appointment-container">
    <br></br>
    <h2>Book Your Appointment Now!</h2>
    {theUser ? (
    <h5>{listOfAppointments}</h5>
    ) : null}
       <center><button className="beforeAfterBtn" >
       <Link className = "text-link" to="/appointments/create">Book an Appointment</Link>
       </button></center>
       <br></br>
       <p>PLEASE READ OUR <Link to ="/FAQ">TERMS AND CONDITIONS</Link> PRIOR TO BOOKING </p>
    </div>
);
}