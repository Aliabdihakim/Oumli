import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from '@mui/material';
import "./Header.css"

function Header({totalItems}) {
  return (
    <header className='header-head'>
        <ul>
            <li>
                <Link className='header-logo' to="/">Oumli</Link>
            </li>
        </ul>
        <ul className='header-all-links '>
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
                <div className='menu-varukorg'>
                    <Link className='varukorg menu-link' to="/varukorg">
                        <Badge badgeContent={totalItems} color="secondary">
                            <FaShoppingCart className='varukorg-icon'/>
                        </Badge>
                        Varukorg
                    </Link>
                </div>
            </li>
        </ul>
    </header>
  )
}

export default Header
