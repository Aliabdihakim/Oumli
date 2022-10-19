import React from 'react'
import "./Home.css"

function Home() {
  return (
    <section className='home-section'>
        <div>
            <h1>Vi gör livet lättare för nya mammor</h1>
            <h3>Ge din kropp näring och vila efter förlossning. </h3>
            <h3>Matlådorleverans för nyblivna mammor och föräldrar</h3>
        </div>
        <img src={require("../images/oumli-mom.png")}/>
    </section>
  )
}

export default Home
