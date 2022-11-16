import React from 'react'
import Product from '../../components/Product/Product'
import { Link } from 'react-router-dom'
import "./Boxes.css"

const Boxes = ({products}) => {

    const allProducts = products.map(product => {
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

  return (
    <div>
        <div className='boxes-div'>
            <h1 className='boxes-header'>Matlådor</h1>
            <p className='boxes-text'>
                Oumli lagar och levererar läckra och näringsrika måltider utformade för att stödja kvinnor och nya mödrar. Fullpackade med näringsämnen och mineraler som är viktiga för kroppen efter förlossningen, stödjer våra måltider fysisk återhämtning, hormonell balans och känslomässig hälsa och tillgången och kvaliteten på bröstmjölk.
            </p>
        </div>

        <div className='section4-products'>
          {allProducts}
        </div>
    </div>
  )
}

export default Boxes
