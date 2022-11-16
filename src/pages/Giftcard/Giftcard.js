import React from 'react'
import "./Giftcard.css"

const Giftcard = () => {
  return (
    <div>
        <div className='gift-div'>
            <h1 className='gift-header'>Oumli</h1>
            <h3 className='gift-text'>Presentkort</h3>
        </div>

        <div className='gift-container'>
            <img className='gift-img' src={require('../../images/giftcard.png')}/>
            <div className='gift-text-div'>
                <p className='gift-img-text'>
                    Det krävs en stam för att stödja nya föräldrar. Ett Oumli presentkort är ett enkelt sätt att ge dina vänner och nära och kära ökad energi, bättre humör, mer fritid, mindre stress och en kropp som återhämtar sig snabbt och känns fantastiskt.
                </p>
                <button className='gift-button'>Köp presentkort</button>
            </div>
        </div>
        
    </div>
  )
}

export default Giftcard
