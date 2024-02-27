import React from 'react'
import './Testimonials.css'
import test1 from './Images/testimonial1.jpg'
import test2 from './Images/testimonial2.jpg'
import test3 from './Images/testimonial3.jpg'
import test4 from './Images/testimonial4.jpg'
function Testimonials() {
    return (
        <>
            <div className='testimonials'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <h5 className='title'>TESTIMONIALS</h5>
                            <h2 className='subtitle'>Once you try it, you can't go back</h2>

                            <div class="row">
                                <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={test1} alt="" className='test1' />
                                    <p>Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</p>
                                    <h6>— Dave Bryson</h6>
                                </div>
                                <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <img src={test2} alt="" className='test1' />
                                    <p>The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</p>
                                    <h6>— Ben Hadley</h6>
                                </div>
                                <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={test3} alt="" className='test1' />
                                    <p>Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</p>
                                    <h6>— Steve Miller</h6>
                                </div>
                                <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={test4} alt="" className='test1' />
                                    <p>I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</p>
                                    <h6>— Hannah Smith</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">

                            <div className="row second">
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-1.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-2.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-3.jpg" alt="" className='image' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-4.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-5.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-6.jpg" alt="" className='image' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-7.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-8.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4 col-md-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-9.jpg" alt="" className='image' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col group col-xs-4 col-sm-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-10.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-11.jpg" alt="" className='image' />
                                </div>
                                <div className="col group col-xs-4 col-sm-4">
                                    <img src="https://omnifood.dev/img/gallery/gallery-12.jpg" alt="" className='image' />
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col col-md-12 col-xs-12 col-sm-12  ">
                                    <div className="row">
                                        <div className="col col-md-4 col-xs-4 col-sm-4">
                                            <img src="https://omnifood.dev/img/gallery/gallery-1.jpg" alt="" className='image' />
                                        </div>
                                        <div className="col col-md-4 col-xs-4 col-sm-4">
                                            <img src="https://omnifood.dev/img/gallery/gallery-1.jpg" alt="" className='image' />
                                        </div>
                                        <div className="col col-md-4 col-xs-4 col-sm-4">
                                            <img src="https://omnifood.dev/img/gallery/gallery-1.jpg" alt="" className='image' />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
