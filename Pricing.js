import React from 'react'
import './Pricing.css'
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
function Pricing() {
    return (
        <>
            <div className='pricing'>
                <h5 className='headings'>PRICING</h5>
                <h2 className='sub-headings' >Eating well without breaking the bank</h2>
                <div>
                    <div className="container text-center">
                        <div className="row price">
                            <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center center-div">
                                <div className='starter'>
                                
                                    <h5 className='headings'>STARTER</h5>
                                    <p class="sub-headings"><span className='sign'>$</span>399</p>
                                    <p class="month">per month. That's just $13 per meal!</p>
                                    <ul>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'>1 meal per day</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'>Order from 11am to 9pm</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'>Delivery is free</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineClose className='icon' /></span>
                                                <p className='icon-text'></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className='btn2 btn-custom-sm'><h6 className='h6'>Start eating well</h6></button>
                                </div>
                            </div>
                            
                            <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center center-div">
                                <div className='complete'>
                                <div className="badge">Best Value</div>
                                    <h5 className='headings'>COMPLETE</h5>
                                    <p class="sub-headings"><span className='sign'>$</span>649</p>
                                    <p class="month">per month. That's just $11 per meal!</p>
                                    <ul>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'><b>2 meal</b> per day</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'>Order <b>24/7</b></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'>Delivery is free</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='icon-text-container'>
                                                <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                                <p className='icon-text'>Get access to latest recipes</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className='btn2 btn-custom-sm'><h6 className='h6'>Start eating well</h6></button>
                                </div>
                            </div>

                        </div>
                        <p className='terms'>Prices include all applicable taxes. You can cancel at any time. Both plans include the following:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
