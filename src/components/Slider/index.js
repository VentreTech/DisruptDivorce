import React, { Component } from 'react'
import Link from 'gatsby-link'
import './slider.css'
import whiteExample from '../../images/white-example.jpeg';
import yourdivorcebetter3D from '../../images/yourdivorcebetter-LD-3D.png';
import yourdivorcebetter3D300 from '../../images/yourdivorcebetter-LD-3D-300.png';


class Slider extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const homebutton = {
            marginTop: '20px',
        }

        return(
    
            <div>
                <div className="d-sm-none">
                    <div className="slider-content">
                        <h4>Your Divorce, Better</h4>
                        <p>Guided, flat rate and guaranteed process.</p>
                        <p>Making your divorce less stressful</p>
                    </div>
                </div>
                <section className="slider d-none d-md-block">
                    <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="slider-content text-box">
                                        <h2>Your Divorce, Better</h2>
                                        <h3>Guided, flat rate and guaranteed process.</h3>
                                        <h3>Making your divorce less stressful.</h3>
                                        {/* <a href="https://gumroad.com/l/lets-divorce/free">
                                            <button className="btn btn-warning">
                                                Download The Guide
                                            </button>
                                        </a> */}
                                        <a href="https://calendly.com/thejohnsonlawgroup">
                                            <button className="btn btn-warning" style={homebutton}>
                                                Schedule Consultation
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
        );
    }
}

export default Slider
