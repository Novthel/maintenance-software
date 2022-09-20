import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu =()=> {
        setShowMenu(!showMenu)
    }
    
    return (
        <nav className=' container col-12 sec-nav'>
            <h2 className='navbar-brand display-2'>Novthel Solutions</h2>
            <ul className= {`menu-projects ${ showMenu ? 'show ':' none' }`} >
                <li>
                    <Link to='/' onClick={ toggleMenu }  className='link-project'>
                        <i className=" link-icon bi bi-house-door-fill"></i> 
                        <span className='text-link'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/projects-form' onClick={ toggleMenu }  className='link-project'>
                        <i className=" link-icon bi bi-tools"></i> 
                        <span className='text-link'>New Project</span>
                    </Link>
                </li>
                <li> 
                    <Link to='/projects' onClick={ toggleMenu }  className='link-project'>
                        <i className="link-icon bi bi-eye-fill"></i>
                        <span className='text-link'>Projects View</span>
                    </Link>
                </li>
            </ul>
            <button onClick={ toggleMenu } className='hamb'><i className="bi bi-list"></i></button> 
        </nav>
    );
}

export default Header;
