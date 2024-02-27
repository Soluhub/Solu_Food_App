import React from 'react'
import logo from './Images/omnifood-logo.png'
import './Footer.css'
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="row footer-row">
                    <div className="col col-xs-12 col-sm-6 col-md-3 column">
                        <img src={logo} alt="" className='logo' />
                        <div className="row">
                            <div className="col col-xs-4 col-sm-4 col-md-4 footer-icon">
                            <BsInstagram></BsInstagram>
                            </div>
                            <div className="col col-xs-4 col-sm-4 col-md-4 footer-icon">
                            <BsFacebook/>
                            </div>
                            <div className="col col-xs-4 col-sm-4 col-md-4 footer-icon"><BsTwitter/></div>
                        </div>
                        <div>
                            <p className='rights'>Copyright © 2023 by Omnifood, Inc. All rights reserved.</p>
                        </div>
                        
                        
                    </div>
                    <div className="col col-xs-12 col-sm-6 col-md-3 column">
                        <h4 className='contact-us'>Contact us</h4>
                        <p className='address'>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                        <p className='number'>415-201-6370</p>
                        <p className='id'>hello@omnifood.com</p>

                    </div>
                    <div className="col col-xs-12 col-sm-6 col-md-6 column1">
                        <h4 className='account'>Account</h4>
                        <p className='account-mode'>Create account</p>
                        <p className='account-mode'>Sign in</p>
                        <p className='account-mode'>iOS app</p>
                        <p className='account-mode'>Android app</p>
                    </div>
                    <div className="col col-xs-12 col-sm-6 col-md-6 column1">
                        <h4 className='account'>Company</h4>
                        <p className='account-mode'>About Omnifood</p>
                        <p className='account-mode'>For Business</p>
                        <p className='account-mode'>Cooking partners</p>
                        <p className='account-mode'>Careers</p>
                    </div>
                    <div className="col col-xs-12 col-sm-6 col-md-6 column1">
                        <h4 className='account'>Resources</h4>
                        <p className='account-mode'>Recipe directory </p>
                        <p className='account-mode'>Help center</p>
                        <p className='account-mode'>Privacy & terms</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
