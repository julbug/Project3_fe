import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateAppointment(props){
    const navigate = useNavigate();


    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        appointmentType: "",
        date: "",
        time: "",
        appointmentDetails: "",
    
    })

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        axios.post("http://localhost:4200/appointments/create", {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            phone: formState.phone,
            appointmentType: formState.appointmentType,
            date: formState.date,
            time: formState.time,
            appointmentDetails: formState.appointmentDetails,
        
        })
        .then((response)=>{
            console.log(response);
            props.fetchAppointments();
            navigate("/appointments");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <div>
                First Name:
                <input type="text" value={formState.firstName} onChange={(e)=>{updateInput(e,"firstName")}} />
            </div>
            <div>
                Last Name:
                <input type="text" value={formState.lastName} onChange={(e)=>{updateInput(e,"lastName")}} />
            </div>
            <div>
                Email:
                <input type="text" value={formState.email} onChange={(e)=>{updateInput(e,"email")}} />
            </div>
            <div>
                Phone:
                <input type="text" value={formState.phone} onChange={(e)=>{updateInput(e,"phone")}} />
            </div>
            <div>
                Appointment Type:
                <input type="text" value={formState.appointmentType} onChange={(e)=>{updateInput(e,"appointmentType")}} />
            </div>
            <div>
                Appointment Date:
                <input type="date" value={formState.date} onChange={(e)=>{updateInput(e,"date")}} />
            </div>
            <div>
                Appointment Time:
                <input type="text" value={formState.time} onChange={(e)=>{updateInput(e,"time")}} />
            </div>
            <div>
                Appointment Details:
                <input type="text" value={formState.appointmentDetails} onChange={(e)=>{updateInput(e,"appointmentDetails")}} />
            </div>
          
            <button onClick={submitForm}>submit</button>
        </div>
    )

}