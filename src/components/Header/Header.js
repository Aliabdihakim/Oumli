import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from '@mui/material';
import "./Header.css"

function Header({totalItems}) {

    const navItems = ({ isActive }) => ({
        color: isActive ? '#A86C64' : '#635151',
      })

  return (
    <header className='header-head'>
        <ul>
            <li>
                <NavLink className='header-logo' to="/">Oumli</NavLink>
            </li>
        </ul>
        <ul className='header-all-links '>
            <li >
                <NavLink className='menu-link' to="/matlador" style={navItems}>Matlådor</NavLink>
            </li>
            <li>
                <NavLink className='menu-link' to="/presentkort" style={navItems}>Presentkort</NavLink>
            </li>
            <li>
                <NavLink className='menu-link' to="/omoss" style={navItems}>Om oss</NavLink>
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
