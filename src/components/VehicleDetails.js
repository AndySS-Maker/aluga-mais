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
  };

  componentDidMount = async () => {
    try {
      const _id = this.props.match.params._id; 

      const response = await axios.get(
        `http://ironrest.herokuapp.com/alugaMais/${_id}`
      );

      this.setState({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  render()  {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>
          <strong>ID: </strong>
          {this.state._id}
        </p>
        <p>
          <strong>Brand: </strong>
          {this.state.brand}
        </p>
        <p>
          <strong>Type: </strong>
          {this.state.type}
        </p>
        <p>
          <strong>Is the vehicle avaliable? </strong>
          {this.state.avaliable ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}

export default VehicleDetails;
