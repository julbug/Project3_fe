import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateService(props){
    const navigate = useNavigate();


    const [formState, setFormState] = useState({
        // image: "",
        serviceType: "",
        additionalInfo: "",
        time: "",
        price: "",
    
    })

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        axios.post("http://localhost:4200/services/create", {
            // image: formState.image,
            serviceType: formState.serviceType,
            additionalInfo: formState.additionalInfo,
            time: formState.time,
            price: formState.price,
        
        })
        .then((response)=>{
            console.log(response);
            props.fetchServices();
            navigate("/services");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            {/* <div>
                Image:
                <input type="text" value={formState.image} onChange={(e)=>{updateInput(e,"image")}} />
            </div> */}
            <div>
                Service:
                <input type="text" value={formState.serviceType} onChange={(e)=>{updateInput(e,"serviceType")}} />
            </div>
            <div>
                Details:
                <input type="text" value={formState.additionalInfo} onChange={(e)=>{updateInput(e,"additionalInfo")}} />
            </div>
            <div>
                Duration:
                <input type="text" value={formState.time} onChange={(e)=>{updateInput(e,"time")}} />
            </div>
            <div>
                Price:
                <input type="text" value={formState.price} onChange={(e)=>{updateInput(e,"price")}} />
            </div>
          
            <button onClick={submitForm}>submit</button>
        </div>
    )

}