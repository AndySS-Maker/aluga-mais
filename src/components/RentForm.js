import { Component } from "react";
import axios from "axios";

import TextInput from '../TextInput';


class RentForm extends Component {
    state = {
      completeName: "",
      document: "",
      adress: "",
      dateIn: "",
      dateOut: "", // calendário
        //formulário enviando nada apenas para treino
        //ou formulário que aciona o checkbox "disponível" do card

    };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

 handleSubmit = async () => {
    const _id = this.props.match.params._id;
    
    const response = await axios.put( //put
      `https://ironrest.herokuapp.com/alugaMais/${_id}`,
      {avaliable: false});


      this.props.history.push("/vehicle-list");
      // redireciona para a lista após o feito
    

    console.log(response);

this.setState({
    completeName: "",
    document: "",
    adress: "",
    date: "",
    });
  };

render() {
    return (
      <div className="container pt-5 mb-5 mt-5">
        <h2 className="mb-3">Editar Veículo</h2>
        <TextInput
          label="Nome completo"
          type="text"
          name="completeName"
          value={this.state.completeName}
          onChange={this.handleChange}
        />
        <TextInput
          label="Documento de Identificação"
          type="text"
          name="document"
          value={this.state.document}
          onChange={this.handleChange}
        />
        <TextInput
          label="Endereço"
          type="text"
          name="adress"
          value={this.state.adress}
          onChange={this.handleChange}
        />
        <TextInput
          label="Data de locação"
          type="date"
          name="dateIn"
          value={this.state.dateIn}
          onChange={this.handleChange}
        />

        <TextInput
          label="Data de entrega"
          type="date"
          name="dateOut"
          value={this.state.dateOut}
          onChange={this.handleChange}
        />        

        <h4>Alugar este veículo?</h4>

        <button onClick={this.handleSubmit} className="mt-2 btn btn-primary">
          Concluir
        </button>
      </div>
    );
  }

}

export default RentForm;