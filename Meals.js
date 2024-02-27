import React from 'react';
import './Meals.css';
import img1 from './Images/card1.jpg';
import img2 from './Images/card2.jpg'
import { HiFire } from 'react-icons/hi';
import { GiKnifeFork } from 'react-icons/gi';
import { AiOutlineStar, AiOutlineCheck } from "react-icons/ai";

function Meals() {
    return (
        <>
            <div className='Main-meal'>


                <div>
                    <h6 className='heading'>MEALS</h6>
                    <h2 className='tagline'>Omnifood AI chooses from 5,000+ recipes</h2>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <img src={img1} className="card-img" alt="..." />
                                <div className="card-body">
                                    <h6 className="type">VEGETARIAN</h6>
                                    <h5 className="card-title">Japanese Gyozas</h5>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><HiFire className='icon' /></span>
                                        <p className='icon-text'><b>650</b> calories</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><GiKnifeFork className='icon' /></span>
                                        <p className='icon-text'>NutriScore ® <b>74</b></p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineStar className='icon' /></span>
                                        <p className='icon-text'><b> 4.9</b> rating (537)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <img src={img2} alt="" className='card-img' />
                                <div className="card-body">
                                    <div className='symbole'>
                                        <h6 className="type">VEGAN</h6>
                                        <h6 className="type1">PALEO</h6>
                                    </div>
                                    <h5 className="card-title">Avocado Salad</h5>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><HiFire className='icon' /></span>
                                        <p className='icon-text'><b>650</b> calories</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><GiKnifeFork className='icon' /></span>
                                        <p className='icon-text'>NutriScore ® <b>74</b></p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineStar className='icon' /></span>
                                        <p className='icon-text'><b> 4.9</b> rating (537)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card2">
                                <div className="card-body">
                                    <h5 className="card-title">Works with any diet:</h5>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Vegetarian</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Vegan</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Pescatarian</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Gluten-free</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Lactose-free</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Keto</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Paleo</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Low FODMAP</p>
                                    </div>
                                    <div className='icon-text-container'>
                                        <span className='iconclass'><AiOutlineCheck className='icon' /></span>
                                        <p className='icon-text'>Kid-friendly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href=""><h5 className='bottumlink'><u>See all recipes →</u></h5></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Meals;
