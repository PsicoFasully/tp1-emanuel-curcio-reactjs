
import React from 'react';

import CarWidget from './CarWidget/indesx';
import { Link } from 'react-router-dom';




const NavBar = () => {
    return (
        <div>
        <ul class="lista">
        <li><Link to="/">inicio</Link></li>
        <li><Link to="/category/men's clothing">mens clothing</Link></li>
        <li><Link to="/category/women's clothing">womens clothing</Link></li>
        <li><Link to="/category/electronics">electronics</Link></li>
        <li><Link to="/category/jewelery">jewelery</Link></li>
        <li><Link to="/"><CarWidget/></Link></li>
        
        </ul>
        
        
        </div>
        
    )
}

export default NavBar