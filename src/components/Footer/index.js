import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => {

    const today = new Date();

    const calendlyStyle = { 
        color: 'white',
        margin: '10px',
    }

    return (
    <div>
    <footer>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-4">
                            <div className="foot-box">
                        <h6>OUR LOCATIONS:</h6>
                        <ul>
                            <li>Lexington, KY (Fayette County)</li>
                            <li>Louisville, KY (Jefferson County)</li>
                        </ul>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="foot-box">
                        <h6>Legal Information</h6>
                        <ul>
                            <li><Link to="/tos">Terms of Service</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="foot-box">
                        <h6>Contact Us</h6>
                        <ul>
                            <li>Phone: 502.888.1908</li>
                            <li>Email: admin@thejohnsonlawgroup.com</li>
                            <li><a className="btn btn-info" style={calendlyStyle} href="https://calendly.com/thejohnsonlawgroup">Schedule Consultation</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="copyright">
                        <a href="#">&copy; {today.getFullYear()} {props.metaData.title}. All rights reserved</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default Footer
