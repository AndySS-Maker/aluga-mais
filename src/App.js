import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Home from "./components/Home";
import NewVehicle from "./components/NewVehicle";
import VehicleList from "./components/VehicleList";
import EditVehicle from "./components/EditVehicle";
<<<<<<< HEAD
//import VehicleDetails from "./components/VehicleDetails";
//import DeleteVehicle from "./components/DeleteVehicle";
=======
import VehicleDetails from "./components/VehicleDetails";
import DeleteVehicle from "./components/DeleteVehicle";
>>>>>>> f9f2e37e259520f20f350139784fba9651536492

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container mt-5">
      
      <Route exact path="/" component={Home} />

      <Route path="/new-vehicle" component={NewVehicle} />

      <Route path="/vehicle-list" component={VehicleList} />
      
<<<<<<< HEAD
      <Route path="/edit-vehicle/:id" component={EditVehicle} /> 
=======
      <Route path="/alugaMais/edit/:_id" component={EditVehicle} />
>>>>>>> f9f2e37e259520f20f350139784fba9651536492
      
      <Route path="/alugaMais/details/:_id" component={VehicleDetails} />
      
      <Route path="/alugaMais/delete/:_id" component={DeleteVehicle} />
    </div>
  </BrowserRouter>
  );
}

export default App;
