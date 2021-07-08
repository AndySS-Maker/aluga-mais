import React from 'react';
import { Link } from 'react-router-dom';


function VehicleCard(props) {

  

  return (
        
            <div className="col">
                <div className="card h-100">
                <Link to={`/alugaMais/details/${props._id}`}>
                <img src={props.image_url} style={props.style}  className="card-img-top" alt="vehicle" /></Link>
                <div className="cardBody">
                    <h5 className="cardTitle">{props.name}</h5>
                    <p className="cardText">{props.brand}</p>
                    <p className="cardText">{props.type}</p>
                    <p className="cardText">{props.year}</p>

                    <p className="cardText"> Velículo Disponível? {props.avaliable ? "Sim" : "Não"}</p>
                    {/* Não está funcionando */}

                    <Link
                    to={`/alugaMais/rent/${props._id}`}
                    title="Alugar Veículo"
                    className="text-primary"
                  > 
                    Alugar Veículo <i className="fas fa-car-side"></i>
                    </Link>
                    <br/>

                    <Link
                    to={`/alugaMais/edit/${props._id}`}
                    title="Editar Veículo"
                    className="text-primary"
                  > 
                    Editar Veículo <i className="fas fa-edit"></i>
                    </Link>
                    <br/>
                    <Link
                    to={`/alugaMais/delete/${props._id}`}
                    title="Deletar Veículo"
                    className="text-danger"
                  >
                    Deletar Veículo <i className="fas fa-trash-alt"></i>
                    </Link>

                </div>
                </div>
            </div>    
  );
}

export default VehicleCard;