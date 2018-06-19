import React from 'react'
import Link from 'gatsby-link'
import './coming_soon.css'
import yourdivorcebetter3D from '../../images/yourdivorcebetter-LD-3D.png';
import comingsoonimage from '../../images/comingsoonimage.png';
import yourdivorcebetter3D300 from '../../images/yourdivorcebetter-LD-3D-300.png';

const ComingSoon = () => (
  <div>
    <section className="coming-soon">
        <div className="container">
            <div className="coming-soon-container">
                {/* <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="slider-content text-box">
                            <img src={comingsoonimage} className="img-fluid" alt="coming soon" />
                        </div>
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="slider-content">
                            <div className="coming-soon-content-right text-box">
                                <img src={comingsoonimage} className="img-fluid" alt="coming soon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coming-soon-content text-box">
                            
                            <h3>DIY platform is coming soon</h3>
                            <p>Get our <i>Guide Designed to Make Your Kentucky Divorce Uncontested</i> below. Or, give us a call:  (000) 000-0000</p>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="slider-content">
                            <div className="coming-soon-content-right text-box">
                                <img src={comingsoonimage} className="img-fluid" alt="coming soon" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <section className="slider">
        <div className="container">
            <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="slider-content text-box">
                            <h2>Your Divorce, Better</h2>
                            <h3>Guided, flat rate and guaranteed process.</h3>
                            <h3>Making your divorce less stressful.</h3>
                            <a href="https://gumroad.com/l/lets-divorce/free">
                                <button className="btn btn-warning">
                                    Download The Guide
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="slider-content">
                            <img src={yourdivorcebetter3D300} className="img-fluid" alt="#" />
                        </div>
                    </div>
            </div>
        </div>
    </section>
  </div>
)

export default ComingSoon
