import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect, useContext} from 'react';
import UserContext from "../contexts/UserContext";


export default function AllServices() {

    const { theUser } = useContext(UserContext)

    const [services, setServices] = useState([]);

    const fetchServices = ()=>{
        axios.get("https://archdeco.onrender.com/services/")
        .then((response)=>{
            console.log(response.data);
            setServices(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchServices();
    }, [])

    console.log(services)
    const listOfServices = services.map((eachService)=>{

        return(<div key={eachService._id} className="faq-page">
            <Link to={"/services/"+eachService._id}>
            <h4>{eachService.serviceType}</h4>
            </Link>
            </div>)

    })

    
    return (
        <div className="list-services-container">
            <br></br>
            <h2 className= "title">Services</h2>
            <h5>{listOfServices}</h5>
            {theUser ? (
                <center><button className="beforeAfterBtn" >
                    <Link className = "text-link" to="/services/create">Add Service</Link></button></center>
            ) : null}
        </div>
    );
}


