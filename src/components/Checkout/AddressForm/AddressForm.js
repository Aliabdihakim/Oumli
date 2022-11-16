import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./AddressForm.css"

const AddressForm = ({next}) => {

    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        address:"",
        state: "",
        zip: "",
    })

    const handleChange = (e) => {
        setAddress(prev => ({...prev, [e.target.name]: e.target.value}))
    }



  return (
    <div>
      <form className='address-form' onSubmit={(e)=>{e.preventDefault() ;next(address)}}>
        <input className='address-input' type="text" name="firstName" placeholder='Förnamn' value={address.firstName} onChange={handleChange}/>
        <input className='address-input' type="text" name="lastName" placeholder='Efternamn' value={address.lastName} onChange={handleChange}/>
        <input className='address-input' type="text" name="email" placeholder='Email' value={address.email} onChange={handleChange}/>
        <input className='address-input' type="text" name="phone" placeholder='Telefon' value={address.phone} onChange={handleChange}/>
        <input className='address-input' type="text" name="address" placeholder='Adress' value={address.address} onChange={handleChange}/>
        <input className='address-input' type="text" name="state" placeholder='Ort' value={address.state} onChange={handleChange}/>
        <input className='address-input' type="text" name="zip" placeholder='Postkod' value={address.zip} onChange={handleChange}/>
        <div className='address-buttons-div'>
          <button className='address-button' style={{color:"#B48261", backgroundColor:"white", borderColor:"#B48261"}}><Link to="/varukorg" style={{textDecoration:"none", color:"#635151", backgroundColor:"white"}}>Tillbaka till varukorg</Link></button>
          <button className='address-button' style={{backgroundColor:"#B48261", color:"white", borderColor:"#B48261"}}>Fortsätt</button>
        </div>
      </form>
    </div>
  )
}

export default AddressForm
