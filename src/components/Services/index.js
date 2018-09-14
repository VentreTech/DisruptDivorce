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
                    <h2>Five steps to divorce using our <span>platform?</span></h2>
      </div>
    </div>
  </div>
</section>
{/* Object img Sec 01 */}
<section className="service">
    <div className="container">
        <div className="row">
            <div className="col-md-6 d-none d-md-block">
                <div className="howit-wrap">
                    <span className="pe-7s-comment "></span>
                </div>
            </div>
            <div className="col-md-6">
                <div className="service-link">
                    <h3>1. Decide <span>Divorce</span></h3>
                    <ul>
                        <li><i>Depending on your situation, this is either the hardest or easiest step. <u>If you are thinking about therapy, try it</u>. Why not? Once you bring up divorce with your spouse, you should be prepared.</i></li>
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
                        {/* <ul>
                            <li><i>Register for the Platform and download the <u>Your Divorce, Better</u> guide that educates you on the process and outlines the Divorce Issues for you <u>AND</u> your spouse.</i></li>
                        </ul> */}
                        <ul>
                            <li><i>Register for the Platform and get educated on the process. This includes the divorce issues for you <u>AND</u> your spouse.</i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <div className="howit-wrap">
                        <span className="pe-7s-info"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Object img Sec 03 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-none d-md-block">
                    <div className="howit-wrap">
                        <span className="pe-7s-map-2"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>3. Complete <span>Platform</span></h3>
                        <ul>
                                <li><i>Use our Platform to secure an <u>uncontested divorce</u> with your spouse. Save time, money, and heartache by working together instead of paying attorneys, on average, more than $20,000.</i></li>
                        </ul>
                        {/* <ul className="footnote">
                            <li>* see the Your Divorce, Better Guide to learn about uncontested divorces</li>
                        </ul>                         */}
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
                            <li><i>Our Platforms facilitate agreed and mediated divorces without the expense of lawyers because we believe, and judges agree, that our platform produces comprehensive, fair, and affordable agreements.</i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <div className="howit-wrap">
                        <span className="pe-7s-way"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Object img Sec 05 */}
    <section className="service">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-none d-md-block">
                    <div className="howit-wrap">
                        <span className="pe-7s-file"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-link">
                        <h3>5. <span>Be</span> Divorced</h3>
                        <ul>
                            <li><i>Our Platform will guide you through the divorce process, and if you stumble along the way we will be there to assist you. Our Platforms include a 100% Money Back Guarantee*.</i></li>
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
                        <h2><a href="https://gumroad.com/l/lets-divorce/free">Download Our Guide Today <span className="pe-7s-angle-right-circle"></span></a></h2>
          </div>
        </div>
      </div>
    </section>
</div>
)
}

export default Services
