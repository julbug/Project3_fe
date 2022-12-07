import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function AllAppointments({theAppointments}) {

    // const [appointments, setAppointments] = useState([]);

    // const fetchAppointments = ()=>{
    //     axios.get("http://localhost:4200/appointments")
    //     .then((response)=>{
    //         console.log(response);
    //         setAppointments(response.data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }


    // useEffect(()=>{
    //     fetchAppointments();
    // }, [])


    const listOfAppointments = theAppointments.map((eachAppointment)=>{

        return(<div key={eachAppointment._id} className="appointment-list-item">
            <Link to={"/services/"+eachAppointment._id}>
            <h3>{eachAppointment.name}</h3>
            </Link>
            {/* <button onClick={()=>{DeleteService(eachService._id)}}>Delete This Service</button> */}
            </div>)
          

    })


return(
    <div className="list-services-container">
    <h2>Appointments</h2>
       {listOfAppointments}
       <p><Link to="/appointments/create">Add Appointment</Link></p>
    </div>
);
}