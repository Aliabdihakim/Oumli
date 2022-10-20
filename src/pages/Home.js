import React from 'react'
import "./Home.css"
import { FaTruck, FaBoxes, FaClipboardList } from "react-icons/fa";
import productsData from '../components/productsData';
import Product from '../components/Product';
import { Link } from 'react-router-dom';


function Home() {

  const allProducts = productsData.map(product => {
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
    <>
      <section className='home-section'>
          <div>
              <h1 className='home-header'>Vi gör livet lättare för nya mammor</h1>
              <h3 className='home-subheader'>Ge din kropp näring och vila efter förlossning. </h3>
              <h3 className='home-subheader'>Matlådorleverans för nyblivna mammor och föräldrar</h3>
          </div>
          <img className='home-header-img' src={require("../images/oumli-mom.png")}/>
      </section>


      <section className='home-section2'>
        <h1 className='section2-text'>Vi levererar näringsrika måltider för att stödja nyblvna mammor och föräldrar</h1>
      </section>


      <section className='home-section3'>
        <h1 className='section3-header'>Hur det funkar</h1>
        <div className='section3-container'>
          <div className='section3-item'>
            <FaClipboardList className='section3-icons' />
            <p className='section3-itemtext'>Välj vilka maträtter och hur många matlådor du vill ha.</p>
          </div>
          <div className='section3-item'>
            <FaTruck className='section3-icons'/>
            <p className='section3-itemtext'>Vi tillagar och levererar era måltider varje tisdag (endast Stockholm). </p>
          </div>
          <div className='section3-item'>
            <FaBoxes className='section3-icons'/>
            <p className='section3-itemtext'>Du värmer och äter maten! Resten av matlådorna ställer du i kylen eller frysen.</p>
          </div>
        </div>
      </section>


      <section className='home-section4'>
      <h1 className='section4-header'>Matlådor</h1>
        <div className='section4-products'>
          {allProducts}
        </div>
      </section>


      <section className='home-section5'>
        <div className='section5-div'>
          <h1 className='section5-header'>Kom igång</h1>
          <button className='section5-button'>Beställ nu</button>
        </div>
      </section>
    </>
  )
}

export default Home
