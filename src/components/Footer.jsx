import React from 'react'
import './Footer.css'
import facebookIcon from '../../public/icons/facebook.png'
import InstagramIcon from '../../public/icons/instagram.png'
import PinterestIcon from '../../public/icons/pinterest.png'
import Logo from '../../public/icons/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="" />
                <p>eSHOP</p>
            </div>
            <ul className="footer-links">
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={facebookIcon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={InstagramIcon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={PinterestIcon} alt="" />
                </div>
            </div>
            <div className="footer-copy">
                <hr />
                <p>Copyright @ 2023 - All Right Reserverd.</p>
            </div>
        </div>
    )
}

export default Footer