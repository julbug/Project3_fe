import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function CreateService(props){
    const navigate = useNavigate();


    const [formState, setFormState] = useState({
        image: "",
        serviceType: "",
        additionalInfo: "",
        time: "",
        price: "",
    
    })

    const updateInput = (e, thingToUpdate)=>{
        console.log(e.target.value)
        setFormState({...formState, [thingToUpdate]: e.target.value})
        console.log(formState)
    }

    const updateFileInput = (e)=>{
        console.log(e.target.value)
        setFormState({...formState, image: e.target.files[0]})
        
    }

    const submitForm = () =>{
        console.log(formState)
        const newServiceObj = new FormData()
        newServiceObj.append("serviceType", formState.serviceType)
        newServiceObj.append("additionalInfo", formState.additionalInfo)
        newServiceObj.append("time", formState.time)
        newServiceObj.append("price", formState.price)
        newServiceObj.append("image", formState.image)
      
        axios.post("http://localhost:4200/services/create", newServiceObj)
        .then((response)=>{
            console.log(response);
            props.fetchServices();
            navigate("/services");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    console.log(formState)

    return(
        <div>
            <div>

                <label className="form-label">
                Image:
                </label>

                <input type="file"  name="image" accept="image/png, image/gif, image/jpeg" onChange={(e)=>{updateFileInput(e)}} />
            </div>

            <div>

                <label className="form-label">
                Service:
                </label>

                <input className="form-control"  type="text" value={formState.serviceType} onChange={(e)=>{updateInput(e,"serviceType")}} />
            </div>

            <div>

                <label className="form-label">
                Duration:
                </label>

                <input className="form-control"  type="text" value={formState.time} onChange={(e)=>{updateInput(e,"time")}} />
            </div>

            <div>
                <label className="form-label">
                Price:
                </label>

                <input className="form-control" type="text" value={formState.price} onChange={(e)=>{updateInput(e,"price")}} />
            </div>
            <br></br>

            <div>

                <label className="form-label">
                Details:
                </label>

                <input className="form-control" type="text" value={formState.additionalInfo} onChange={(e)=>{updateInput(e,"additionalInfo")}} />
            </div>
          
            <center><button className="beforeAfterBtn" onClick={submitForm}>Submit</button></center>
        </div>
    )

}