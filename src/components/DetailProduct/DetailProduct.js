import React, { useState } from 'react'
import "./DetailProduct.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

function DetailProduct({products, addToCart}) {

    const [quantity, setQuantity] = useState(0)

    console.log(products);
    const params = useParams()
    const thisProduct = products.find(product => product.permalink==params.productId)

    const otherProducts = products.filter(other => other.permalink!=params.productId)
    const showOtherProducts = otherProducts.map(product => {
        return(
            <div key={product.id}>
                <Link className='product-link' to={`/matlador/${(product.permalink).toString()}`}>
                    <Product 
                    title={product.name}
                    img={product.image.url}
                    description={product.description}
                    price={product.price.raw}
                    />
                </Link>
          </div>
        )
    })

    console.log(quantity);

    if(thisProduct){
        return (
            <div>
                <div className='detail-div'>
                    <img src={thisProduct.image.url} className="detail-img"/>
                    <div className='detail-info-div'>
                        <h1 className='detail-title'>{thisProduct.name}</h1>
                        <p className='detail-desc'>{thisProduct.description}</p>
                        <h2 className='detail-price'>{thisProduct.price.raw} kr</h2>
                        <label htmlFor='item-quantity'><h2>Antal matlådor</h2></label>
                        <form onSubmit={(e)=> {addToCart(thisProduct.id, quantity)}}>
                            <input
                            id="item-quantity"
                            className='detail-quantity' 
                            type='number'
                            name='quantity'
                            value={quantity}
                            onChange={(e)=> setQuantity(e.target.value)}
                            />
                            <button className='detail-button'>Lägg i varukorg</button>
                        </form>
                    </div>
                </div>


                <div>
                    <h1 className='other-title'>Andra matlådor</h1>
                    <div className='show-other'>
                        {showOtherProducts}
                    </div>
                </div>
            </div>
        )
    } else {
        console.log('vänta');
    }

    
}

export default DetailProduct
