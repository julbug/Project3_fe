import "../App.css";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import EditService from "./EditService";
import { Link } from "react-router-dom";


export default function ServiceDetails({fetchServices, theUser}){
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
    return(
    <div className='profile'>
    
        {editing && <EditService fetchServices={fetchServices} stopEditing={setEditing} service={theService} />} 

            {!editing && <div><p><button onClick={edit}>edit</button></p>
                <h3>{theService.serviceType}</h3>
                <p>{theService.additionalInfo}</p>
                <p>{theService.time}</p>
                <p>{theService.price}</p>

           </div>}
          

           <Link to= {"/services"}><button onClick={()=>{deleteService(theService._id)}}>Delete This Service</button></Link>

    </div>
    )
}
