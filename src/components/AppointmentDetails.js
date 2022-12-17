import "../App.css";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import EditAppointment from "./EditAppointment";
import { Link } from "react-router-dom";



export default function AppointmentDetails({fetchAppointments, theUser}){
    const {id} = useParams();
//EDIT
    const [editing, setEditing] = useState(null);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }
    const [theAppointment, setTheAppointment] = useState(null);

//FETCH APPT DATA
    const fetchAppointmentDetails = ()=>{
        axios.get("http://localhost:4200/appointments/"+id)
        .then((response)=>{
            console.log(response.data);
            setTheAppointment(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchAppointmentDetails();
    },[])

//DELETE APPT


    const deleteAppointment = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/appointments/delete", { id: theID })
			.then((response) => {
				console.log(response);
				fetchAppointments();
			})
			.catch((err) => {
				console.log(err);
			});
	};


    // console.log(theAppointment);

    if(!theAppointment){
        return ""
    }


    return(
    <div className='appointment-list-component'>

        {editing && <EditAppointment fetchAppointments={fetchAppointments} stopEditing={setEditing} appointment={theAppointment} />} 

        
            {!editing && <div><p><button onClick={edit}>edit</button></p>
            
                <h3>{theAppointment.firstName}</h3>
                <p>{theAppointment.lastName}</p>
                <p>{theAppointment.email}</p>
                <p>{theAppointment.phone}</p>
                <p>{theAppointment.appointmentType}</p>
                <p>{new Date(theAppointment.date).toLocaleDateString()}</p>
                <p>{theAppointment.time}</p>

            </div>}

           <Link to= {"/appointments"}><button onClick={()=>{deleteAppointment(theAppointment._id)}}>Delete This Appointment</button></Link>
    
    </div>
    )
}
