import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect} from 'react';

import NavBar from "./components/NavBar";
import AllServices from './components/AllServices';
import CreateService from "./components/CreateService";
import ServiceDetails from "./components/ServiceDetails";
import AllAppointments from "./components/AllAppointments";
import CreateAppointment from "./components/CreateAppointment";
import AppointmentDetails from "./components/AppointmentDetails";
import Home from "./components/Home"
import Contact from "./components/Contact";

import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import SignupOrLogin from "./components/Login";
import { UserProvider } from "./contexts/UserContext";



function App(props) {
  
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = ()=>{
      axios.get("http://localhost:4200/appointments/")
      .then((response)=>{
          console.log(response.data);
          setAppointments(response.data);
      })
      .catch((err)=>{
          console.log(err);
      })
  }


  useEffect(()=>{
      fetchAppointments();
  }, [])

  const [services, setServices] = useState([]);

  const fetchServices = ()=>{
      axios.get("http://localhost:4200/services/")
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


  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      document.head.appendChild(stylesheet);
    }
  }, []);
 
  
  
    return (
      <div className="App">
      
      <UserProvider>
   
      <NavBar />

      <Routes>
      <Route path="/" element = {<Home />} />


             <Route path="/services" element = {<AllServices />} />

            <Route path="/services/create" element = {<CreateService fetchServices = {fetchServices} />} />

            <Route path="/services/:id" element = {<ServiceDetails />} />

            <Route path="/appointments" element = {<AllAppointments />} />

            <Route path="/appointments/create" element = {<CreateAppointment fetchAppointments={fetchAppointments} services={services}/>} />

            <Route path="/appointments/:id" element = {<AppointmentDetails />} />

            <Route path="/login" element = {<SignupOrLogin action="login" />} />
            <Route path="/signup" element = {<SignupOrLogin action="signup" />} />


            {/* PAGE ROUTES */}
            <Route path="/about" element = {<About />} />

            <Route path="/contact" element = {<Contact />} />

            <Route path="/gallery" element = {<Gallery />} />
            
            <Route path="/FAQ" element = {<FAQ />} />
              
      </Routes>

      </UserProvider>
      
      
  
      </div>
    );
  }
  
  export default App;
