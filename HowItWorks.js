import './HowitWorks.css'
import tech from './Images/tech.png'
import buss from './Images/buss.png'
import newyork from './Images/newyork.png'
import forbes from './Images/forbes.png'
import usa from './Images/usa.png'
function HowItWorks(){
    return (<>
        <div className='whole' style={{marginBottom:'10%'}}>
            <div className="container">
                <div className="asfeatured container">
                    <h2 className="heading-asfeatured">As featured in</h2>
                    <div className="row featured-row">
                        <div className="col col-md col-sm">
                            <img src={tech} alt="Techcrunch logo" className="img-fluid inline-img" />
                        </div>
                        <div className="col col-md col-sm">
                            <img src={buss} alt="Business Insider logo" className="img-fluid inline-img" />
                        </div>
                        <div className="col col-md col-sm">
                            <img src={newyork} alt="The New York Times logo" className="img-fluid inline-img" />
                        </div>
                        <div className="col col-md col-sm">
                            <img src={forbes} alt="Forbes logo" className="img-fluid inline-img" />
                        </div>
                        <div className="col col-md col-sm">
                            <img src={usa} alt="USA Today logo" className="img-fluid inline-img" />
                        </div>
                    </div>
                </div>
                <div className="how-it-works">

                    <div>
                        <h2 className='secondtag'>HOW IT WORKS</h2>
                        <h1 className='maintag'>Your daily dose of health in 3 simple steps</h1>
                    </div>

                    <div className="row" style={{ marginBottom: '10%' }}>
                    <div className="col col-md-6 col-lg-4 mb-4 order-md-1">
                        <h1 className='HWC1'>01</h1>
                        <h4 className='HWtell'>Tell us what you like (and what not)</h4>
                        <p className='para'>Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
                    </div>

                        <div className="col  col-md-6 step-1-img order-md-2">
                            <div className="back-circle" style={{ background: 'antiquewhite', padding: '0.8rem' }}>
                                <div className='back-inner-circle' style={{ background: 'hwb(28 67% 5%)', padding: '0.8rem', justifyContent: 'center' }}></div>
                                <img src="https://omnifood.dev/img/app/app-screen-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="container step-2">
                <div className="row">
                    <div className="col column2 col-md-6 step-1-img order-md-1">
                        <div className="back-circle " style={{ background: 'antiquewhite', padding: '0.8rem' }}>
                            <div className='back-inner-circle' style={{ background: 'hwb(28 67% 5%)', padding: '0.8rem', justifyContent: 'center' }}></div>
                            <img src="https://omnifood.dev/img/app/app-screen-2.png" alt="" />
                        </div>
                    </div>
                    <div className="col column2-2 col-md-6 order-md-2">
                        <p className="HWC1">02</p>
                        <h3 className="HWtell">
                            Approve your weekly meal plan
                        </h3>
                        <p className="para">
                            Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container step-3">
                <div className="row">

                    <div className="col col-md-6 order-md-1">
                        <p className="HWC3">03</p>
                        <h3 className="HWtell">
                            Receive meals at convenient time
                        </h3>
                        <p className="para">
                            Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!                            </p>
                    </div>

                    <div className="col col-md-6 step-1-img step-3-3 order-md-2">
                        <div className="back-circle" style={{ background: 'antiquewhite', padding: '0.8rem' }}>
                            <div className='back-inner-circle' style={{ background: 'hwb(28 67% 5%)', padding: '0.8rem', justifyContent: 'center' }}></div>
                            <img src="https://omnifood.dev/img/app/app-screen-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default HowItWorks