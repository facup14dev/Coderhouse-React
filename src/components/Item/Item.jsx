import * as React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ name, description, price, id, img }) => {

  return (


    <div className="card-contanedor">

      <div className="card">
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p className="price">$ {price}</p>
        <p>{description}</p>

        <Link to={`/product/${id}`}>
          <button>Ver Detalle</button>
        </Link>

      </div>
    </div>


  );
};
export default Item;
