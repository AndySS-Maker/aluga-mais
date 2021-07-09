import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./components/Home";
import NewVehicle from "./components/NewVehicle";
import VehicleList from "./components/VehicleList";
import EditVehicle from "./components/EditVehicle";
import VehicleDetails from "./components/VehicleDetails";
import DeleteVehicle from "./components/DeleteVehicle";
import RentForm from "./components/RentForm";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <br/>
    <div>
      
      <Route exact path="/" component={Home} />

      <Route path="/new-vehicle" component={NewVehicle} />

      <Route path="/vehicle-list" component={VehicleList} />
      
      <Route path="/alugaMais/edit/:_id" component={EditVehicle} />
      
      <Route path="/alugaMais/details/:_id" component={VehicleDetails} />
      
      <Route path="/alugaMais/delete/:_id" component={DeleteVehicle} />

      <Route path="/alugaMais/rent/:_id" component={RentForm} />

    </div>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;