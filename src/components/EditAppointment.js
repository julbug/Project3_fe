import "../App.css";
import axios from "axios"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function EditAppointment({appointment, stopEditing, fetchAppointments}){
    // console.log(appointment)

    const navigate = useNavigate();

    const endEdit = () =>{
        stopEditing()
    }


    const [formState, setFormState] = useState(appointment);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const submitForm = () =>{
        axios.post("http://localhost:4200/appointments/edit/"+appointment._id, {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            phone: formState.phone,
            appointmentType: formState.appointmentType,
            date: formState.date,
            time: formState.time,
        }).then((response)=>{
            console.log(response)
            navigate("/appointments");


        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div> 
           <div>
            <p><button onClick={endEdit}>X</button></p>

            <div>
            First Name:
            <input value={formState.firstName} onChange={(e)=>{updateInput(e, "firstName")}} />
            </div>
            

            <div>
            Last Name:
            <input value={formState.lastName} onChange={(e)=>{updateInput(e, "lastName")}} />
            </div>
            
            
            <div>
            Email:
                <input value={formState.email} onChange={(e)=>{updateInput(e, "email")}}/>
            </div>
            
            <div>
            Phone Number:
                <input value={formState.phone} onChange={(e)=>{updateInput(e, "phone")}} />
            </div>

            <div>
            Appointment Type:
                <input value={formState.appointmentType} onChange={(e)=>{updateInput(e, "appointmentType")}} />
            </div>

            <div>
            Date:
                <input value={formState.date} onChange={(e)=>{updateInput(e, "date")}} />
            </div>

            <div>
            Time:
                <input value={formState.time} onChange={(e)=>{updateInput(e, "time")}} />
            </div>


            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}