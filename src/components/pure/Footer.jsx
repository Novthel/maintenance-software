import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <section className='container col-12 sec-footer flex-column flex-sm-row'>
            <div className='footer-text-init'>
                <h4>Start organizing your project</h4>
                <Link className='btn btn-outline-light btn-sm' to={`/projects-form`} style={{ textDecoration: 'none' }} >Get Start</Link>
            </div>
            <div className='footer-contact'>
                <h6>Contact</h6>
                <ul>
                    <li><i className="bi bi-phone-fill"></i>  + 300xxxxxxx</li>
                    <li><i className="bi bi-envelope-fill"></i>  Example@gmail.com</li>
                    <li><i className="bi bi-geo-alt-fill"></i>  Kra 12 clle 56 Alameda del Rio</li>
                </ul>
            </div>
            <div className='footer-network'>
                <h6>Social networks</h6>
                <ul>
                    <li><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-github"></i></li>
                    <li><i className="bi bi-twitter"></i></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
