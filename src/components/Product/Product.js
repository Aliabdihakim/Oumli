import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';

function Product(props) {
  return ( 
    <div className='product-div'>
      <img className='product-img' src={props.img} alt="product image"/>
      <h1 className='product-title'>{props.title}</h1>
      <button className='product-button'>Visa produkt</button>
    </div>
  )
}

export default Product
