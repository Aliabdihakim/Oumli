import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddressForm = ({next}) => {

    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        zip: "",
        phone:"",
    })

    const handleChange = (e) => {
        setAddress(prev => ({...prev, [e.target.name]: e.target.value}))
    }



  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault() ;next(address)}}>
        <input type="text" name="firstName" value={address.firstName} onChange={handleChange}/>
        <input type="text" name="lastName" value={address.lastName} onChange={handleChange}/>
        <input type="email" name="email" value={address.email} onChange={handleChange}/>
        <input type="text" name="phone" value={address.phone} onChange={handleChange}/>
        <input type="text" name="state" value={address.state} onChange={handleChange}/>
        <input type="text" name="zip" value={address.zip} onChange={handleChange}/>
        <Link to="/varukorg">Tillbaka till varukorg</Link>
        <button>Fortsätt</button>
      </form>
    </div>
  )
}

export default AddressForm
