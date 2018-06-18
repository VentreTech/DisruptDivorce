import React from 'react'
import Link from 'gatsby-link'
import './slider.css'
import whiteExample from '../../images/white-example.jpeg';
import yourdivorcebetter3D from '../../images/yourdivorcebetter-LD-3D.png';
import yourdivorcebetter3D300 from '../../images/yourdivorcebetter-LD-3D-300.png';

const Slider = () => (
  <div>
  <section className="slider">
      <div className="container">
          <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="slider-content text-box">
                        <h2>Your Divorce, Better</h2>
                        <h3>Guided, flat rate and guaranteed process.</h3>
                        <h3>Making your divorce less stressful.</h3>
                        <a href="https://gumroad.com/l/lets-divorce/testing">
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

export default Slider
