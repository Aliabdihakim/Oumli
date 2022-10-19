import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <header className='header-head'>
        <ul>
            <li>
                <Link className='header-logo' to="/">Oumli</Link>
            </li>
        </ul>
        <ul className='header-all-links'>
            <li >
                <Link className='menu-link' to="/matlador">Matlådor</Link>
            </li>
            <li>
                <Link className='menu-link' to="/presentkort">Presentkort</Link>
            </li>
            <li>
                <Link className='menu-link' to="/omoss">Om oss</Link>
            </li>
            <li>
                <Link className='menu-link' to="/faq">FAQ</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link className='varukorg menu-link' to="/varukorg">Varukorg</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
