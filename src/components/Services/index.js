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
                    <h2>Why should you use our filing <span>services?</span></h2>
      </div>
    </div>
  </div>
</section>
{/* Object img Sec 01 */}
<section className="service">
  <div className="img-objectfit">
    <div className="grid">
      <figure className="effect-lily">
        <img src={DisruptDivorceOnline} className="img-fluid" alt="#" />
      </figure>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <div className="service-link">
         <h3>Our <span>guaranteed</span> process</h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Gathering comprehensive information.</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Generating court approved legal documents.</a></li>
                           
                        </ul>
                </div>
            </div>
        </div>
        </div>
    </section>
    {/* Object img Sec 02 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="service-link service-link1">
                        <h3>Guided and <span>simple</span></h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">Education about the law.</a></li>
                                <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">You will <span>Always</span> know where you are.</a></li>
                                <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">We provide forms, specific to you.</a></li>                            
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#"><span>Keep the process simple</span>, with our support.</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
        <div className="img-objectfit_1">
            <div className="grid">
                <figure className="effect-lily">
                    <img src={DisruptDivorceSimple} className="img-fluid" alt="#" />
                </figure>
            </div>
        </div>
    </section>
    {/* Object img Sec 03 */}
    <section className="service">
        <div className="img-objectfit">
            <div className="grid">
                <figure className="effect-lily">
                    <img src={DisruptDivorceCost} className="img-fluid" alt="#" />
                </figure>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>Flat rate <span>costs</span></h3>
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#"><span>Do not</span> spend money for unneccesary services.</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#"><span>Do not</span> get stuck with an initial high cost retainer.</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#"><span>Do not</span> spend your days worrying about billable hours.</a></li>
                            <li><i className="fa fa-check" aria-hidden="true"></i><a href="#">We offer a <span>fixed cost</span> service.</a></li>
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
