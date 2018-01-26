import React from 'react'
import Link from 'gatsby-link'
import './howItWorks.css'

const HowItWorks = () => (
    <section className="howit-work main-block center-block" id="howitworks">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>How it <span>works</span></h2>
                    <h6>We’ve made all the hardwork for making it simple for you. Here’s how it works</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="howit-wrap">
                        <span className="pe-7s-plus"></span>
                        <h4>1. Create Account</h4>
                        <p>This will allow you to connect to the dashboard and see all the information you will need to file.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="howit-wrap">
                        <span className="pe-7s-file"></span>
                        <h4>2. Complete Forms</h4>
                        <p>Fill out the forms required for your filing. We will provide all the appropriate forms, based on your information.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="howit-wrap">
                        <span className="pe-7s-check"></span>
                        <h4>3. Confirmation </h4>
                        <p>Both spouses will review and confirm that information is correct.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="howit-wrap">
                            <span className="pe-7s-pen"></span>
                            <h4>4. Online Notary</h4>
                            <p>The documents will be notarized by both spouses via an online notary.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="howit-wrap">
                            <span className="pe-7s-file"></span>
                            <h4>5. E-File Paperwork</h4>
                            <p>We e-file the completed and notarized documents with the Lexington-Fayette Court House.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="howit-wrap">
                            <span className="pe-7s-home"></span>
                            <h4>6. Receive Confirmation</h4>
                            <p>Both spouses will receive an email notification once the paperwork has been signed by the court.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HowItWorks
