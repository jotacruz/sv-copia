import React from 'react';

import facebookLogo from '../assets/images/facebook.png';
import instagramLogo from '../assets/images/instagram.png';
import twitterLogo from '../assets/images/twitter.png';
import logoFooter from '../assets/images/logo-footer.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
            <div className="content">
                <figure>
                    <img src={logoFooter} alt="Site" />
                </figure>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/receitas">Receitas</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
                <div className="side-right">
                    <div className="social">
                        <a href="https://www.facebook.com" target="_blank" rel="nofollow">
                            <img src={facebookLogo} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="nofollow">
                            <img src={instagramLogo} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="nofollow">
                            <img src={twitterLogo} alt="Youtube" />
                        </a>
                    </div>
                    <p>Copyright © 2020 Supermercado</p>  
                </div>
            </div>
        </div>
    )
}

export default Footer;