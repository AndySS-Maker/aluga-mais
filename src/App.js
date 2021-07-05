import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Home from "./components/Home";
import NewVehicle from "./components/NewVehicle";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container mt-5">
      
      <Route exact path="/" component={Home} />

      
      <Route path="/new-vehicle" component={NewVehicle} />

      
      {/* <Route path="/edit-character/:id" component={EditCharacter} />

      
      <Route path="/character/:id" component={CharacterDetails} />

      
      <Route path="/delete-character/:id" component={DeleteCharacter} /> */}
    </div>
  </BrowserRouter>
  );
}

export default App;
