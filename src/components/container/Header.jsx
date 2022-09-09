import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu =()=> {
        setShowMenu(!showMenu)
    }
    
    return (
        <nav className=' container col-12 sec-nav'>
            <h2 className='navbar-brand'>Novthel Solutions</h2>
            <ul className= {`menu-projects ${ showMenu ? 'show ':' none' }`} >
                <li><Link to='/projects-form' style={{ textDecoration: 'none' }}>New Proyect</Link></li>
                <li> <Link to='/projects' style={{ textDecoration: 'none' }}>View Proyects</Link></li>
            </ul>
            <button onClick={ toggleMenu } className='hamb'><i className="bi bi-list"></i></button> 
        </nav>
    );
}

export default Header;
