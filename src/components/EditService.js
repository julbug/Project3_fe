import "../App.css";
import axios from "axios"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function EditService({service, stopEditing, fetchServices}){
    // console.log(service)

    const navigate = useNavigate();
    
    const endEdit = () =>{
        stopEditing()
    }


    const [formState, setFormState] = useState(service);
    console.log(formState)

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const submitForm = () =>{
        axios.post("http://localhost:4200/services/edit/"+service._id, {
            serviceType: formState.serviceType,
            additionalInfo: formState.additionalInfo,
            time: formState.time,
            price: formState.price,
        }).then((response)=>{
            console.log(response)
            navigate("/services");


        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div> 
           <div>
            <p><button onClick={endEdit}>X</button></p>

            <div>
            Service:
            <input value={formState.serviceType} onChange={(e)=>{updateInput(e, "serviceType")}} />
            </div>
            

            <div>
            Details:
            <input value={formState.additionalInfo} onChange={(e)=>{updateInput(e, "additionalInfo")}} />
            </div>
            
            
            <div>
            Duration:
                <input value={formState.time} onChange={(e)=>{updateInput(e, "time")}}/>
            </div>
            
            <div>
            Price:
                <input value={formState.price} onChange={(e)=>{updateInput(e, "price")}} />
            </div>


            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}