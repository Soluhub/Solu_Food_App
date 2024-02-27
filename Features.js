import React from 'react'
import './Features.css'
import { IoInfiniteOutline } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { ImLeaf } from "react-icons/im";
import { AiOutlinePause } from "react-icons/ai";
function Features() {
    return (
        <>
            <div class="container text-center">
                <div class="row  feature">
                    <div class="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
                        <div className='infinite'>
                            <IoInfiniteOutline className='icons'></IoInfiniteOutline>
                        </div>
                        <h4 className='infi-tag'>Never cook again!</h4>
                        <p className='discription'>Our subscriptions cover 365 days per year, even including major holidays.</p>
                    </div>
                    <div class="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
                        <div className='infinite'>
                            <CiApple className='icons'></CiApple>
                        </div>
                        <h4 className='infi-tag'>Local and organic</h4>
                        <p className='discription'> Our cooks only use local, fresh, and organic products to prepare your meals.</p>
                    </div>
                    <div class="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
                        <div className='infinite'>
                            <ImLeaf className='icons'></ImLeaf>
                        </div>
                        <h4 className='infi-tag'>Local and organic</h4>
                        <p className='discription'>All our partners only use reusable containers to package all your meals.</p>
                    </div>
                    <div class="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
                        <div className='infinite'>
                            <AiOutlinePause className='icons'></AiOutlinePause>
                        </div>
                        <h4 className='infi-tag'>Pause anytime</h4>
                        <p className='discription'>Going on vacation? Just pause your subscription, and we refund unused days.</p>
                    </div>
                </div>
                <div className='contact'>
                    <div class="row" style={{margin:'0',padding:'0'}}>
                        <div class="col-md-8 col-xs-12 col-sm-12 order-md-1 firstcol">
                            <h2 className='contact-tag'>Get your first meal for free!</h2>
                            <p className='contact-discriptio'>
                                Healthy, tasty and hassle-free meals are waiting for you. Start
                                eating well today. You can cancel or pause anytime. And the
                                first meal is on us!
                            </p>
                            <div className="row">
                                <div className="col col-xs-12 col-sm-12 col-md-6">
                                    <label for="full-name" className='name'>Full Name</label>
                                    <input id="full-name" type="text" placeholder="John Smith" name="full-name" className='input' required="" />
                                </div>
                                <div className="col col-xs-12 col-sm-12 col-md-6">
                                    <label for="email" className='name'>Email address</label>
                                    <input id="mail" type="mail" placeholder="me@example.com" name="full-name" className='input' required="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-xs-12 col-sm-12 col-md-6" style={{marginTop:'10%'}}>
                                    <select id="select-where" name="select-where" required="" className='drop' >
                                        <option value="" className='option' >Please choose one option:</option>
                                        <option value="friends" className='option'>Friends and family</option>
                                        <option value="youtube" className='option'>YouTube video</option>
                                        <option value="podcast" className='option'>Podcast</option>
                                        <option value="ad" className='option'>Facebook ad</option>
                                        <option value="others" className='option'>Others</option>
                                    </select>
                                </div>
                                <div className="col col-xs-12 col-sm-12 col-md-6" style={{marginTop:'10%'}}>
                                    <button className='btn signup btn-custom-sm'><h6 className='button'>Sign up now</h6></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xs-12 col-sm-12 col-md-4 order-md-2 secondcol" style={{ margin: '0', padding: '0' }}>
                            <img src="https://omnifood.dev/img/eating.jpg" alt="" className='woman'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
