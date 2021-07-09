import { Component } from "react";
import axios from "axios";

class DeleteVehicle extends Component {
  componentDidMount = () => {
    const _id = this.props.match.params._id;

    axios
      .delete(`https://ironrest.herokuapp.com/alugaMais/${_id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/vehicle-list");
        //retorno para a lista
      })
      .catch((error) => console.log(error));
  };

  render() {
    return <div>Deletando...</div>;
  }
}

export default DeleteVehicle;