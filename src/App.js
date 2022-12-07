import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect} from 'react';
import NavBar from "./components/NavBar";
import AllServices from './components/AllServices';
import CreateService from "./components/CreateService";
import AllAppointments from "./components/AllAppointments";
import CreateAppointment from "./components/CreateAppointment";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Gallery from "./pages/Gallery";

// import Login from "./components/Login";
// import { UserProvider } from "./contexts/UserContext";


function App() {

  const [theServices, setTheServices] = useState([]);
  const [theAppointments, setTheAppointments] = useState([]);
  
  
  const fetchServices = () => {
    //axios is a library that fetches info from any api
    axios.get('http://localhost:4200/services') //fetches info from this website
    .then((servicesFromDb) => { //then it takes said info that it grabbed
      console.log({servicesFromDb}) //print info onto screen
      setTheServices(servicesFromDb.data);
    })
    .catch((err) => {
      console.log(err)
    });
    }
    
    
    const fetchAppointments = () => {
    axios.get('http://localhost:4200/appointments')
    .then((appointmentsFromDb) => {
      console.log({appointmentsFromDb})
      setTheAppointments(appointmentsFromDb.data);
    })
    .catch((err) => {
      console.log(err)
    });
    }
  
  
  useEffect(() => {
    fetchAppointments();
  }, []);
  
  useEffect(() => {
    fetchServices();
  }, []);


  
  
    return (
      <div className="App">
      
      {/* <UserProvider> */}
      <div className="borderXwidth">
      <NavBar />
      </div>
      <h1>ArchDeco</h1>
      <Routes>
             <Route path="/services" element = {<AllServices theServices={theServices} fetchServices={fetchServices} />} />
            <Route path="/services/create" element = {<CreateService fetchServices = {fetchServices} />} />
            <Route path="/appointments" element = {<AllAppointments theAppointments={theAppointments} fetchAppointments={fetchAppointments} />} />
            <Route path="/appointments/create" element = {<CreateAppointment theAppointments={theAppointments} fetchAppointments={fetchAppointments} />} />
            <Route path="/home" element = {<Home />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/gallery" element = {<Gallery />} />
            <Route path="/FAQ" element = {<FAQ />} />
              
            {/* <Route path="/login" element = {<Login />} /> */}

      </Routes>
      {/* </UserProvider> */}
      
      
  
      </div>
    );
  }
  
  export default App;
