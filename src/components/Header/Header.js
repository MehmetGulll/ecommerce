import React from 'react'
import { BrowserRouter,NavLink } from 'react-router-dom'
import {FaShoppingBasket} from "react-icons/fa";
import './header.scss';
function Header({drawer,setDrawer}) {
  return (
    <div className='header'>
        <nav>
            <label className='logo'>My Shopping</label>
            <ul>
                <li><NavLink to = '/' className='ahref'>Home</NavLink></li>
                <li><NavLink to = '/about' className='ahref'>About</NavLink></li>
                <li><NavLink to = '/contact' className='ahref'>Contact</NavLink></li>
                <li><NavLink to = '/products' className='ahref'>Products</NavLink></li>
            </ul>
            <div className='basketIcon' onClick={() =>setDrawer(!drawer)}><FaShoppingBasket/></div>
            {console.log(drawer)}
        </nav>
      
    </div>
  )
}

export default Header
