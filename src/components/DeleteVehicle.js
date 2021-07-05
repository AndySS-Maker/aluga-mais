import { Component } from "react";
import axios from "axios";

// D do CRUD (DELETE): Deleta um registro específico

class DeleteVehicle extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
      .delete(`https://ih-crud-api.herokuapp.com/vehicles/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/vehicle-list");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return <div>Deleting...</div>;
  }
}

export default DeleteVehicle;
