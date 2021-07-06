import { Component } from "react";
import axios from "axios";

import TextInput from './TextInput';

class NewVehicle extends Component {
    state = {
      image_url: "",
      name: "",
      brand: "",
      type: "",
      year: 0,      
      km: 0,
      avaliable: false,
    };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

 handleSubmit = async () => {
    const response = await axios.post(
      'http://ironrest.herokuapp.com/alugaMais/new',
      this.state
    );

    console.log(response);

this.setState({
      image_url: "",
      name: "",
      brand: "",
      type: "",
      year: 0,      
      km: 0,
      avaliable: false,
    });
  };

render() {
    return (
      <div className="container">
        <TextInput
          label="Image_url"
          type="text"
          name="image_url"
          value={this.state.image_url}
          onChange={this.handleChange}
        />
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Brand"
          type="text"
          name="brand"
          value={this.state.brand}
          onChange={this.handleChange}
        />
        <TextInput
          label="Type"
          type="text"
          name="type"
          value={this.state.type}
          onChange={this.handleChange}
        />
        <TextInput
          label="Year"
          type="number"
          name="year"
          value={this.state.year}
          onChange={this.handleChange}
        />
        <TextInput
          label="Km"
          type="number"
          name="km"
          value={this.state.km}
          onChange={this.handleChange}
        />
        <TextInput
          label="Avaliable"
          type="boolean"
          name="avaliable"
          value={this.state.avaliable}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} className="mt-5 btn btn-primary">
          Submit
        </button>
      </div>
    );
  }

}

export default NewVehicle;







 
    

  