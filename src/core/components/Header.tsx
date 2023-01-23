import { NavLink, useParams } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <div className="h-100 container">
            <div className="h-100 d-flex align-items-center justify-content-between">
                <div className="logo-section">
                    <NavLink to="/">
                        <figure className='logo-container mb-0'>
                            <img src={logo} alt="easy-bank-logo" className='img-fluid' />
                        </figure>
                    </NavLink>
                </div>
                <nav>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <NavLink to="/" className='nav-link text-success'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about" className='nav-link text-success'>About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/contact" className='nav-link text-success'>Contact</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/blog" className='nav-link text-success'>Blog</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/careers" className='nav-link text-success'>Careers</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button className='btn btn-gradient text-light'>Request Invite</button>
                </div>
            </div>
        </div>
    )
};

export default Header;
