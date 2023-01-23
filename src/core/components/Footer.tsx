import { NavLink } from 'react-router-dom'

import logo from "../../assets/images/logo-white.svg"
import fb from "../../assets/images/icon-facebook.svg"

function Footer() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <NavLink to="/" className="d-block pb-5">
                            <img src={logo} alt="footer-logo" />
                        </NavLink>
                        <div className="social d-flex justify-content-between align-items-center">
                            <figure>
                                <img src={fb} alt="fb-logo" />
                            </figure>
                            <figure>
                                <img src={fb} alt="fb-logo" />
                            </figure>
                            <figure>
                                <img src={fb} alt="fb-logo" />
                            </figure>
                            <figure>
                                <img src={fb} alt="fb-logo" />
                            </figure>
                            <figure>
                                <img src={fb} alt="fb-logo" />
                            </figure>
                        </div>
                    </div>
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
                    <div className="col-md-4">
                        <div className='d-flex flex-column align-items-end justify-content-center'>
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
