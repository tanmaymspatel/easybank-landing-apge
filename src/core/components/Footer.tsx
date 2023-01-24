import { NavLink } from 'react-router-dom'

import logo from "../../assets/images/logo-white.svg"
import fb from "../../assets/images/icon-facebook.svg"
import youTube from "../../assets/images/icon-youtube.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import instagram from "../../assets/images/icon-instagram.svg"

/**
 * @returns A footer component for landing page
 */
function Footer() {
    return (
        <section className="py-4 py-md-5">
            <div className="container">
                <div className="row">
                    {/* footer 1 - logo and social links */}
                    <div className="col-md-4">
                        <NavLink to="/" className="d-block pb-4 pb-md-5">
                            <img src={logo} alt="footer-logo" />
                        </NavLink>
                        <div className="social d-flex align-items-center py-2 py-md-0">
                            <figure className='mx-2'>
                                <img src={fb} alt="fb-logo" className='social-icon' />
                            </figure>
                            <figure className='mx-2'>
                                <img src={youTube} alt="fb-logo" className='social-icon' />
                            </figure>
                            <figure className='mx-2'>
                                <img src={twitter} alt="fb-logo" className='social-icon' />
                            </figure>
                            <figure className='mx-2'>
                                <img src={pinterest} alt="fb-logo" className='social-icon' />
                            </figure>
                            <figure className='mx-2'>
                                <img src={instagram} alt="fb-logo" className='social-icon' />
                            </figure>
                        </div>
                    </div>
                    {/* footer 2 - quick links */}
                    <div className="col-md-2">
                        <ul className='nav d-flex flex-column'>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link text-light'>About Us</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link text-light'>Contact</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link text-light'>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* footer 3 - quick links */}
                    <div className="col-md-2">
                        <ul className='nav d-flex flex-column'>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link text-light'>Careers</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link text-light'>Support</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link text-light'>Privacy Policy</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* footer 4 - copyright section */}
                    <div className="col-md-4">
                        <div className='footer-4-container'>
                            <button className='btn btn-gradient text-light my-3'>Request Invite</button>
                            <p className='text-success'>@Easybank, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer;
