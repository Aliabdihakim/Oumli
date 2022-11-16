import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <>
   
      <div className='footer'>
        <div className='footer-div'>
          <div className='footer-second-div'>
            <h1>Oumli</h1>
            <div>
              <h4 className='footer-dot'>.</h4>
              <h4 className='footer-dot'>.</h4>
              <h4>© 2022 Oumli</h4>
            </div>
          </div>

          <div className='footer-second-div'>
            <h1>Meny</h1>
            <div>
              <h4>Hem</h4>
              <h4>Matlådor</h4>
              <h4>Om oss</h4>
            </div>
          </div>

          <div className='footer-second-div'>
            <h1>Kontakta oss</h1>
            <div>
              <h2><FaFacebook /> <FaInstagram /></h2>
              <h4>Hello@oumli.se</h4>
              <h4>+46739327484</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
