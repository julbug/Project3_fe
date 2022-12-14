import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function AllAppointments() {

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
    <h2>Appointments</h2>

    <h5 className='profile'>
       {listOfAppointments}</h5>

       <center>
       <button className="beforeAfterBtn" >
       <Link className = "text-link" to="/appointments/create">Book an Appointment</Link>
       </button>
       </center>
    </div>
);
}