import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateAppointment(props){
    const navigate = useNavigate();

console.log(props)

    const serviceList = props.services.map((eachService)=>{
        return <option value ={eachService._id}>{eachService.serviceType}</option>
    })
console.log(serviceList);

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        appointmentType: "",
        date: "",
        time: "",

    
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
                <label className="form-label">
                First Name:
                </label>
                <input className="form-control" type="text" value={formState.firstName} onChange={(e)=>{updateInput(e,"firstName")}} />
            </div>

            <div>
                <label className="form-label">
                Last Name:
                </label>
                <input className="form-control"  type="text" value={formState.lastName} onChange={(e)=>{updateInput(e,"lastName")}} />
            </div>

            <div>
                <label className="form-label">
                Email:
                </label>
                <input className="form-control" type="text" value={formState.email} onChange={(e)=>{updateInput(e,"email")}} />
            </div>

            <div>
            <label className="form-label">
                Phone:
                </label>
                <input className="form-control" type="text" value={formState.phone} onChange={(e)=>{updateInput(e,"phone")}} />
            </div>

            <div>
            <label className="form-label">
                Appointment Type:
                </label>
                <select className="form-control" value={formState.appointmentType} onChange={(e)=>{updateInput(e,"appointmentType")}} >
                {serviceList}
                </select>
            </div>

            <div>
            <label className="form-label">
                Appointment Date:
                </label>
                <input className="form-control" type="date" value={formState.date} onChange={(e)=>{updateInput(e,"date")}} />
            </div>

            <div>
            <label className="form-label">
                Appointment Time:
                </label>
                <input className="form-control" type="text" value={formState.time} onChange={(e)=>{updateInput(e,"time")}} />
            </div>
          <br></br>
            <center><button className="beforeAfterBtn" onClick={submitForm}>submit</button></center>
        </div>
    )

}