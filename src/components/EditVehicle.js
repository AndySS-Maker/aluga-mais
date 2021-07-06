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
  };

  // Em formulários de edição, sempre precisamos primeiramente carregar os dados que já existem para dar ao usuário a possibiliadde de alterá-los. Por isso fazemos uma requisição GET e populamos o state.
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const id = this.props.match.params._id;

    event.preventDefault();

    axios
      .put(`http://ironrest.herokuapp.com/alugaMais/${id}`, this.state)
      .then((response) => {
        // console.log(response);
        this.props.history.push("/vehicle-list"); // Redireciona a aplicação de volta pra lista de personagens
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
        <div>
            <h1>Edit Vehicle</h1>
            <hr/>
            <form onSubmit={this.handleSubmit}>
                <TextInput
                    label="Vehicle Name"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    required
                />
                <TextInput
                    label="Vehicle Brand"
                    type="text"
                    name="brand"
                    onChange={this.handleChange}
                    value={this.state.brand}
                    required
                />
                <TextInput
                    label="Vehicle Type"
                    type="text"
                    name="type"
                    onChange={this.handleChange}
                    value={this.state.type}
                    required
                />
                <ChoiceInput
                    label="Is the character in avaliable?"
                    type="checkbox"
                    name="avaliable"
                    onChange={() => {
                    this.setState({ avaliable: !this.state.avaliable });
                    }}
                    checked={this.state.avaliable}
                />

                <hr />

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                </div>
            </form>
        </div>
    );
  };
};

export default EditVehicle;
