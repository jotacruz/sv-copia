import React from 'react';
import { Link } from 'react-router-dom';

import logoHeader from '../assets/images/logo.jpg'

const Menu = () => {
    return(
        <div className="content header">
            <figure>
                <img src={logoHeader} className="logo" alt="Supermercado" />
            </figure>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/receitas'>Receitas</Link>
                <Link to='/contato'>Contato</Link>
            </nav>
        </div>
    )
}

export default Menu;