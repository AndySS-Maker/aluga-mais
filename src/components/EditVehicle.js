import { Component } from "react";
import axios from "axios";

import TextInput from "../TextInput";
import ChoiceInput from "../ChoiceInput";

class EditVehicle extends Component {
    state = {
        image_url: "",
        name: "",
        brand: "",
        type: "",
        year: 0,      
        km: 0,
        avaliable: false,
    };
  

  componentDidMount = async () => {
    try {
      const _id = this.props.match.params._id; 

      const response = await axios.get(
        `https://ironrest.herokuapp.com/alugaMais/${_id}`
      );

        delete response.data._id
        // necessário tirar ID pq esse não pode atualizar

      this.setState({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const _id = this.props.match.params._id;

    event.preventDefault();

    axios
    .put(`https://ironrest.herokuapp.com/alugaMais/${_id}`, this.state)
    .then((response) => {

      this.props.history.push("/vehicle-list");
      // redireciona para a lista após o feito 
    })
    .catch((error) => {
      console.log(error);
    });
  };

render() {
  return (
      <div className="container pt-5 mb-5 mt-5">
          <h2 className="mb-3">Editar Veículo</h2>

          <form onSubmit={this.handleSubmit}>
              <TextInput
                  label="Imagem URL"
                  type="text"
                  name="image_url"
                  onChange={this.handleChange}
                  value={this.state.image_url}
                  required
              />
              <TextInput
                  label="Nome"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
              />
              <TextInput
                  label="Marca"
                  type="text"
                  name="brand"
                  onChange={this.handleChange}
                  value={this.state.brand}
                  required
              />
              <TextInput
                  label="Tipo de Veiculo"
                  type="text"
                  name="type"
                  onChange={this.handleChange}
                  value={this.state.type}
                  required
              />
              <TextInput
                  label="Ano"
                  type="number"
                  name="year"
                  onChange={this.handleChange}
                  value={this.state.year}
                  required
              />
              <TextInput
                  label="Km"
                  type="number"
                  name="km"
                  onChange={this.handleChange}
                  value={this.state.km}
                  required
              />
              <ChoiceInput                  
                  label="Veículo está disponivel?"
                  type="checkbox"
                  name="avaliable"
                  onChange={() => {
                  this.setState({ avaliable: !this.state.avaliable });
                  }}
                  checked={this.state.avaliable}
              />



              <div className="form-group">
                  <button type="submit" className="btn btn-primary mt-2">
                    Salvar
                  </button>
              </div>
          </form>
      </div>
    );
  };
};


export default EditVehicle;