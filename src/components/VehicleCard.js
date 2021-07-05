import React from 'react';
import { Link } from 'react-router-dom';

function VehicleCard(props) {
  //   console.log(props);
  return (
    // <div className="card m-3" style={{ maxWidth: '540px' }}>
    //   <div className="row g-0">
    //     <div className="col-md-6">
    //       <Link to={`/beers/${props._id}`}>
    //         <img
    //           style={{height: '10rem' }}
    //           src={props.image_url}
    //           className="img-fluid rounded-start"
    //           alt="..."
    //         />
    //       </Link>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="card-body">
    //         <h5 className="card-title">{props.name}</h5>
    //         <p className="card-text">{props.brand}</p>
    //         <p className="card-text">
    //           <small className="text-muted">{props.type}</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>


        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                <img src={props.image_url} className="card-img-top" alt="vehicle" />
                <div className="cardBody">
                    <h5 className="cardTitle">{props.name}</h5>
                    <p className="cardText">{props.brand}</p>
                    <p className="cardText">{props.type}</p>
                    <p className="cardText">{props.year}</p>
                </div>
                </div>
            </div>

            
        </div>
  );
}

export default VehicleCard;