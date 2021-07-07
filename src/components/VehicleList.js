import { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import VehicleCard from "./VehicleCard";
import Search from "./Search";


class VehicleList extends Component {
  state = {
    vehicles: [], // Nosso state inicial precisa ser uma array vazia, pois a API pode nos retornar vários personagens, que estarão dentro de uma array. Como usamos o map pra renderizar a lista, o map não roda em uma array vazia, logo evitamos erros de sintaxe.
    filtered: [], 
  };

  // Assim que o componente é montado na tela, fazemos a requisição HTTP pra buscar a lista de personagens
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://ironrest.herokuapp.com/alugaMais"
      );

      // console.log(response);

      this.setState({ vehicles: [...response.data], filtered: [...response.data] });
    } catch (error) {
      console.log(error);
    }
  };



  filterVehicle = (input) => {
    const filtered = this.state.vehicles.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  };

  render() {
    return (
      <div className="m-5">

        <Search filterVehicle={this.filterVehicle} />

        <div className="row row-cols-1 row-cols-md-3 g-4">

        {this.state.filtered.map((vehicle) => (
          <VehicleCard key={vehicle._id} {...vehicle} />
        ))}
        </div>
      </div>
      /* 
        <BeerCard beer={beer} />
        <BeerCard
            image_url={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
          /> */
    );
  }
}

export default VehicleList;