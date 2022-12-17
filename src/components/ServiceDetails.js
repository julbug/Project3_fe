import "../App.css";
import {useParams} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import EditService from "./EditService";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";



export default function ServiceDetails({fetchServices}){

    const { theUser } = useContext(UserContext)
    
console.log(theUser)
    const {id} = useParams();
//EDIT
    const [editing, setEditing] = useState(null);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }
    const [theService, setTheService] = useState(null);
    
   //FETCH SERVICE DATA
    const fetchServiceDetails = ()=>{
        axios.get("http://localhost:4200/services/"+id)
        .then((response)=>{
            console.log(response.data);
            setTheService(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchServiceDetails();
    },[])

    //DELETE SERVICE

    const deleteService = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/services/delete", { id: theID })
			.then((response) => {
				console.log(response);
				fetchServices();
			})
			.catch((err) => {
				console.log(err);
			});
	};

    console.log(theService);

    if(!theService){
        return ""
    }

  console.log(theUser)
      return(
        
        <div className='appointment-list-component'>
    
            {editing && <EditService fetchServices={fetchServices} stopEditing={setEditing} service={theService} />} 
             
            {theUser ? (
            <div className="serviceDetsCont"> 
                <div className="serviceDets">
                <h3>{theService.serviceType}</h3>
                <ul>{theService.time}</ul>
                <ul>{theService.price}</ul>
                <ul>{theService.additionalInfo}</ul>
                </div>
                <div>
                <img className="imgDets" src ={theService.image}/>
                </div>

                <p>
                    <button onClick={edit}>edit</button>
                </p>
                
            </div>
        ) : (
            <div className="serviceDetsCont">
            <div className="serviceDets">
                <h3>{theService.serviceType}</h3>
                <ul>{theService.time}</ul>
                <ul>{theService.price}</ul>
                <ul>{theService.additionalInfo}</ul>
                </div>
                <div>
                <img className="imgDets" src ={theService.image}/>
                </div>
                <div className="verticalLine"></div>
            </div>
        )}
        <br></br>
        
    {theUser ? (
        <Link to= {"/services"}><button onClick={()=>{deleteService(theService._id)}}>Delete This Service</button></Link>
     ) : null}
    
     </div>

        )
}
