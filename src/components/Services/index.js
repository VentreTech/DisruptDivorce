import React from 'react'
import Link from 'gatsby-link'
import './services.css'
import placeholder800x420 from '../../images/placeholder800x420.png'
import DisruptDivorceOnline from '../../images/DisruptDivorceOnline.jpg'
import DisruptDivorceSimple from '../../images/DisruptDivorceSimple.jpg'
import DisruptDivorceCost from '../../images/DisruptDivorceCost.jpg'

const Services = () => {
return (
<div id="startServices">
    <section className="service-title" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Why should you use our DIY <span>platform?</span></h2>
      </div>
    </div>
  </div>
</section>
{/* Object img Sec 01 */}
<section className="service">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="howit-wrap">
                    <span className="pe-7s-file"></span>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-link">
                    <h3>1. Decide <span>Divorce</span></h3>
                    <ul>
                        <li><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada orci a dictum convallis. Morbi eget justo vel dolor pretium fermentum. Vestibulum tincidunt scelerisque interdum. Nulla mi lorem, porta et lorem eget, ornare vulputate enim. Nam consectetur quam sed nibh egestas cursus. Proin ut lectus tristique nibh tempor tempus. Fusce metus libero, lobortis sed vulputate et, bibendum a lectus. Vivamus at turpis eleifend tortor dapibus facilisis efficitur sed sapien.</i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </section>
    {/* Object img Sec 02 */}
    <section className="service even">
        <div className="container">
            <div className="row even">
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>2. Get <span>Informed</span></h3>
                        <ul>
                            <li><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada orci a dictum convallis. Morbi eget justo vel dolor pretium fermentum. Vestibulum tincidunt scelerisque interdum. Nulla mi lorem, porta et lorem eget, ornare vulputate enim. Nam consectetur quam sed nibh egestas cursus. Proin ut lectus tristique nibh tempor tempus. Fusce metus libero, lobortis sed vulputate et, bibendum a lectus. Vivamus at turpis eleifend tortor dapibus facilisis efficitur sed sapien.</i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="howit-wrap">
                        <span className="pe-7s-file"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Object img Sec 03 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="howit-wrap">
                        <span className="pe-7s-file"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>3. Complete <span>Platform</span></h3>
                        <ul>
                            <li><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada orci a dictum convallis. Morbi eget justo vel dolor pretium fermentum. Vestibulum tincidunt scelerisque interdum. Nulla mi lorem, porta et lorem eget, ornare vulputate enim. Nam consectetur quam sed nibh egestas cursus. Proin ut lectus tristique nibh tempor tempus. Fusce metus libero, lobortis sed vulputate et, bibendum a lectus. Vivamus at turpis eleifend tortor dapibus facilisis efficitur sed sapien.</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Object img Sec 04 */}
    <section className="service even">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>4. Reach An <span>Agreement</span></h3>
                        <ul>
                            <li><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada orci a dictum convallis. Morbi eget justo vel dolor pretium fermentum. Vestibulum tincidunt scelerisque interdum. Nulla mi lorem, porta et lorem eget, ornare vulputate enim. Nam consectetur quam sed nibh egestas cursus. Proin ut lectus tristique nibh tempor tempus. Fusce metus libero, lobortis sed vulputate et, bibendum a lectus. Vivamus at turpis eleifend tortor dapibus facilisis efficitur sed sapien.</i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="howit-wrap">
                        <span className="pe-7s-file"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Object img Sec 05 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="howit-wrap">
                        <span className="pe-7s-file"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>5. <span>Be</span> Divorced</h3>
                        <ul>
                            <li><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada orci a dictum convallis. Morbi eget justo vel dolor pretium fermentum. Vestibulum tincidunt scelerisque interdum. Nulla mi lorem, porta et lorem eget, ornare vulputate enim. Nam consectetur quam sed nibh egestas cursus. Proin ut lectus tristique nibh tempor tempus. Fusce metus libero, lobortis sed vulputate et, bibendum a lectus. Vivamus at turpis eleifend tortor dapibus facilisis efficitur sed sapien.</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="service-title" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2><Link to="/register">GET STARTED <span className="pe-7s-angle-right-circle"></span></Link></h2>
          </div>
        </div>
      </div>
    </section>
</div>
)
}

export default Services
