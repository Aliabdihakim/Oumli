import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = ({cartData, addToCart, updateCart ,removeItem}) => {


  console.log(cartData.line_items);
  console.log(cartData);

  if(!cartData.line_items){ 
    console.log("hej")
  } else{
    const cartItems = (cartData.line_items).map(item => {
      return(
        <div key={item.id} className="cart-item-container">
          <h4 onClick={(e)=>{e.preventDefault() ;removeItem(item.id)}}>X</h4>
          <img className='cart-item-img' src={item.image.url}/>
          <h4>{item.name}</h4>
          <h4>{item.price.raw}kr</h4>
          <h4>{item.quantity}</h4>
          <h4>{item.line_total.raw}kr</h4>
        </div>
      )
    })

    return (
    <>
      <div>
        <div className='cart-div'>
          <div className='cart-cartitems-div'>
            {cartItems}
          </div>

          <div className='cart-cartinfo-div'>
            <h3>Varukorg totalt</h3>
            <br />
            <h4>Frakt: Fri frakt</h4>
            <h4 style={{display:"flex", justifyContent:"space-between"}}>Delsumma: 
              <span>{cartData.subtotal.raw}kr</span>
            </h4>
            <h4 style={{display:"flex", justifyContent:"space-between"}}>Summa: 
              <span>{cartData.subtotal.raw}kr</span>
            </h4>
            <Link to='/kassa'>
              <button className='cart-cartinfo-button'>Fortsätt till kassan</button>
            </Link>
          </div>
        </div>
      </div>
    </>
    )
    
  }

  
  
 
   
  
}

export default Cart
