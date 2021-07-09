import { Component } from "react";
import axios from "axios";

class VehicleDetails extends Component {
    state = {
        _id: "",
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

      this.setState({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className=" ms-auto text-center m-5">
        <div className="pt-5 m-5">
          <img src={this.state.image_url} className="container" alt="vehicle" />
          </div>
          <p>
            <strong>Nome: </strong>
            {this.state.name}
          </p>
          <p>
            <strong>Marca: </strong>
            {this.state.brand}
          </p>
          <p>
            <strong>Tipo: </strong>
            {this.state.type}
          </p>
          <p>
            <strong>Ano: </strong>
            {this.state.year}
          </p>
          <p>
            <strong>Km: </strong>
            {this.state.km}
          </p>
        <div>
        <p>
          <strong>Veículo disponível? </strong>
          {this.state.avaliable ? "Sim" : "Não"}
        </p>
        </div>

      </div>
    );
  }
}

export default VehicleDetails;