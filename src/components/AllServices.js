import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function AllServices({theServices}) {

    const [services, setServices] = useState([]);

    // const fetchServices = ()=>{
    //     axios.get("http://localhost:4200/services")
    //     .then((response)=>{
    //         console.log(response);
    //         setServices(response.data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }


    // useEffect(()=>{
    //     fetchServices();
    // }, [])


    const listOfServices = theServices.map((eachService)=>{

        return(<div key={eachService._id} className="service-list-item">
            <Link to={"/services/"+eachService._id}>
            <h3>{eachService.name}</h3>
            </Link>
            {/* <button onClick={()=>{DeleteService(eachService._id)}}>Delete This Service</button> */}
            </div>)
          

    })


return(
    <div className="list-services-container">
    <h2>Services</h2>
       {listOfServices}
       <p><Link to="/services/create">Add Service</Link></p>
    </div>
);
}
