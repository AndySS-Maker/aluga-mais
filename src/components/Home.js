import { Component } from "react";
import React from 'react';
//import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import VehicleCard from './VehicleCard';
import axios from 'axios';
import "../style/main.scss";

class Home extends Component {
    state = {
        vehicles: [], // Nosso state inicial precisa ser uma array vazia, pois a API pode nos retornar vários personagens, que estarão dentro de uma array. Como usamos o map pra renderizar a lista, o map não roda em uma array vazia, logo evitamos erros de sintaxe. 
      };

      componentDidMount = async () => {
        try {
          const response = await axios.get(
            "https://ironrest.herokuapp.com/alugaMais"
          );
    
          // console.log(response);
    
          this.setState({ vehicles: [...response.data] });
        } catch (error) {
          console.log(error);
        }
      };


    render() {
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 2},
            {width: 768, itemsToShow: 3},
            {width: 1200, itemsToShow: 4}
        ];
        return (
            <div>
                <section className="hero-image">
                    <h1>Veículos para todos</h1>
                    <h2>Nunca mais perca uma viagem!</h2>
                </section>
                
                <div>
                    <h2 className="text-center mt-5">Confira algumas opções:</h2>
                    <Carousel breakPoints={breakPoints} className="mt-5 mb-5">
                        {this.state.vehicles.map((vehicle) => (
                            <div>
                                <VehicleCard key={vehicle._id} {...vehicle} 
                                location={this.props.location.pathname} 
                                style={{width: "300px", height: "auto"}} />
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>
        )
    };
};

export default Home;