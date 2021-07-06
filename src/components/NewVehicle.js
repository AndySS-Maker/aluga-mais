import { Component } from "react";
import axios from "axios";

import TextInput from '../TextInput';
import ChoiceInput from '../ChoiceInput';

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
      'http://ironrest.herokuapp.com/alugaMais',
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
          label="Imagem URL"
          type="text"
          name="image_url"
          value={this.state.image_url}
          onChange={this.handleChange}
        />
        <TextInput
          label="Nome"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Marca"
          type="text"
          name="brand"
          value={this.state.brand}
          onChange={this.handleChange}
        />
        <TextInput
          label="Tipo"
          type="text"
          name="type"
          value={this.state.type}
          onChange={this.handleChange}
        />
        <TextInput
          label="Ano"
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
        <ChoiceInput
          label="Disponível?"
          type="checkbox"
          name="avaliable"
          onChange={() => {
            this.setState({ avaliable: !this.state.avaliable });
          }}
        />
        <button onClick={this.handleSubmit} className="mt-5 btn btn-primary">
          Submit
        </button>
      </div>
    );
  }

}

export default NewVehicle;







 
    

  