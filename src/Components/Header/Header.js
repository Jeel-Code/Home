import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import '../../Buy/CSS/Buy.css'

import Img from '../../Assets/favicon.png'

function Header() {
    return (
        <>
            <section>
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                    <div className='container-fluid'>
                        <div className="favicon-img-form">
                        <img src={Img} alt="..." />
                        </div>
                        <Link className='navbar-brand'>Cheapkart</Link>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <Link className='nav-link active' aria-current='page' to='/Home'>Home</Link>
                                </li>
                                <li className='nav-item dropdown'>
                                    <Link className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        Sizes
                                    </Link>
                                    <ul className='dropdown-menu'>
                                        <li><Link className='dropdown-item' to={'/XS'}>XS</Link></li>
                                        <li><Link className='dropdown-item' to={'/S'}>S</Link></li>
                                        <li><Link className='dropdown-item' to={'/M'}>M</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link className='dropdown-item' to={'/ML'}>ML</Link></li>
                                        <li><Link className='dropdown-item' to={'/L'}>L</Link></li>
                                        <li><Link className='dropdown-item' to={'/XL'}>XL</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link className='dropdown-item' to={'/XXL'}>XXL</Link></li>
                                    </ul>
                                </li>

                                <li className='nav-item dropdown'>
                                    <Link className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        Color
                                    </Link>
                                    <ul className='dropdown-menu'>
                                        <li><Link className='dropdown-item' to={'/White'}>White</Link></li>
                                        <li><Link className='dropdown-item' to={'/Black'}>Black</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link className='dropdown-item' to={'/Blue'}>Blue</Link></li>
                                        <li><Link className='dropdown-item' to={'/Gray'}>Gray</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link className='dropdown-item' to={'/Wine'}>Wine</Link></li>
                                    </ul>
                                </li>

                                <li className='nav-item dropdown'>
                                    <Link className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        Gender
                                    </Link>
                                    <ul className='dropdown-menu'>
                                        <li><Link className='dropdown-item' to={'/Boys'}>Boys</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link className='dropdown-item' to={'/Girl'}>Girls</Link></li>
                                    </ul>
                                </li>
                                
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/Login'>Login</Link>
                                </li>

                            </ul>

                            <form className='d-flex' role='search'>
                                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                                <button className='btn btn-outline-success' type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header