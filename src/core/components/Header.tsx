import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import hamburger from '../../assets/images/icon-hamburger.svg'
import close from '../../assets/images/icon-close.svg'
/**
 * @returns Header component
 */
function Header() {
    return (
        <div className="h-100 container-lg">
            <div className="h-100 d-flex align-items-center justify-content-between">
                <div>
                    <NavLink to="/">
                        <figure className='mb-0'>
                            <img src={logo} alt="easy-bank-logo" className='img-fluid' />
                        </figure>
                    </NavLink>
                </div>

                <nav className='nav-links transition'>
                    <ul className='nav flex-column flex-md-row'>
                        <li className='nav-item'>
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about" className='nav-link'>About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/blog" className='nav-link'>Blog</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/careers" className='nav-link'>Careers</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='d-none d-md-block'>
                    <button className='btn btn-gradient text-light'>Request Invite</button>
                </div>
                <div className='d-md-none mobile-menu'>
                    <label htmlFor="mobileToggle">
                        <img src={hamburger} alt="hamburger-menu" className='icon-hamburger transition' />
                        <img src={close} alt="close-meu" className='icon-close transition' />
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Header;
