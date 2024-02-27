import React from 'react'
import './Style.css'
import ToggleButton from './ToggleButton';
import logo from './Images/omnifood-logo.png'
import hero from './Images/hero.webp'
import ImageStack from './ImageStack';
function Home() {
    return (
        <>
            <div className='firstComp'>
                <header>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <img src={logo} alt="" className='logo' />
                            <ToggleButton />
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">How it works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Meals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Testimonials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className='btn'>Try for free</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 home-col">
                            <h1>
                                A healthy meal delivered to your door, every single day
                            </h1>
                            <p className='p'>
                                The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
                            </p>
                            <div className='SL'>
                                <button className='btn2 btn-custom-sm'><h6 className='h6'>Start eating well</h6></button>
                                <button className='btn3 btn-custom-sm'><h6 className='h6'> Learn more ↓</h6></button>
                            </div>
                            <div>
                                <div class="below-description">
                                    <div class="description-img">
                                        <img className='one' src="https://omnifood.dev/img/customers/customer-1.jpg" alt="Customer photo" />
                                        <img src="https://omnifood.dev/img/customers/customer-2.jpg" alt="Customer photo" />
                                        <img className='one' src="https://omnifood.dev/img/customers/customer-3.jpg" alt="Customer photo" />
                                        <img src="https://omnifood.dev/img/customers/customer-4.jpg" alt="Customer photo" />
                                        <img src="https://omnifood.dev/img/customers/customer-5.jpg" alt="Customer photo" />
                                        <img src="https://omnifood.dev/img/customers/customer-6.jpg" alt="Customer photo" />
                                    </div>
                                    <p class="side-text">
                                        <span>250,000+</span> meals delivered last year!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 home-col">
                            <span>
                                <img src={hero} alt="" className='img' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
