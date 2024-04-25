import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'; // Import the solid copyright icon
import './Footer.css'; // Import your CSS file for footer styling
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="about-us">
                <Link to="/" style={{ color: "white" }}>
                    <h2>Top T Corporation</h2>
                </Link>
                <p>   A Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat kiemelkedő választás ügyfelei számára az informatikai fejlesztés és tanácsadás terén. Szakértelmünk és tapasztalatunk révén lehetőséget biztosítunk ügyfeleinknek az innovációra, hatékonyabb üzleti folyamatok kialakítására és versenyelőny megszerzésére.</p>
            </div>
            <div className="social-media">
                <h3>Kövess minket!</h3>
                <div className="social-icons">
                    <a className='soci' href="#"><FontAwesomeIcon size='xl' icon={faFacebookF} /></a>
                    <a className='soci' href="#"><FontAwesomeIcon size='xl' icon={faTwitter} /></a>
                    <a className='soci' href="#"><FontAwesomeIcon size='xl' icon={faInstagram} /></a>
                    {/* Add more social media icons and their respective links */}
                </div>
            </div>
            <div className="copyright">
                <p><FontAwesomeIcon size='lg' icon={faCopyright} /> {new Date().getFullYear()} Top T Corporation. Minden jog fentartva.</p>
            </div>
        </footer>
    );
}

export default Footer;
