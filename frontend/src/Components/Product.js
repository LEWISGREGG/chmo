import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/Components/Product.css';

export default function Product(props) {
  const { product } = props;
  return (

    <div key={product._id} className="cardProduct">
      <Link to={`/product/${product._id}`}>
        <img className="mediumImage" src={product.image} alt={product.name} /></Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h1>{product.brand}</h1>
          <h2>{product.name}</h2>
        </Link>
        <div className="price">${product.price}</div>
      </div>
    </div>

  );
}