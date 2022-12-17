import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";



export default function CreateAppointment(props){
    const navigate = useNavigate();

    const serviceList = props.services.map((eachService)=>{
        return <option value ={eachService.name}>{eachService.serviceType}</option>
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
        setFormState({...formState, [thingToUpdate]: e.target.value, terms: e.target.checked})
    }

    const submitForm = () =>{
        if(formState.terms === true){
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
            alert("Thank you! Your appointment has been submitted, we will be in touch shortly.");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    };

    return(
        <div className ="CrtApt">
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
                <select className="form-control" value={formState.appointmentType} onChange={(e)=>{updateInput(e,"appointmentType",e.target.options[e.target.selectedIndex].text)}} >
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

            <div>
            <input type="checkbox" name="terms" required onChange={(e)=>{updateInput(e,"terms")}} />
            <label>I have read and agree to the <Link to ="/FAQ">TERMS AND CONDITIONS</Link></label>
            </div>

            <br></br>

            <center><button className="beforeAfterBtn" onClick={submitForm} disabled={!formState.terms}>submit</button></center>

            <br></br>

        </div>
    )

}
