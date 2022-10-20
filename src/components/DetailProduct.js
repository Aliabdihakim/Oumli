import React from 'react'
import "./DetailProduct.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import productsData from './productsData'
import Product from './Product'

function DetailProduct() {
    const params = useParams()
    const thisProduct = productsData.find(product => product.id==params.productId)
    const otherProducts = productsData.filter(other => other.id!=params.productId)
    const showOtherProducts = otherProducts.map(product => {
        return(
            <div>
            <Link className='product-link' to={`/matlador/${(product.id).toString()}`}>
              <Product 
              key={product.id}
              title={product.title}
              img={product.img}
              description={product.description}
              price={product.price}
              />
            </Link>
          </div>
        )
    })

    return (
        <div>
            <div className='detail-div'>
                <img src={thisProduct.img} className="detail-img"/>
                <div className='detail-info-div'>
                    <h1 className='detail-title'>{thisProduct.title}</h1>
                    <p className='detail-desc'>{thisProduct.description}</p>
                    <h2 className='detail-price'>{thisProduct.price} kr</h2>
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
}

export default DetailProduct
