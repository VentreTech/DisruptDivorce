import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => {

    const today = new Date();

    return (
    <footer>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-2">
                    <div className="foot-box">
                        <h6>QUICK LINKS</h6>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>LEGAL STUFF</h6>
                        <ul>
                            <li>Terms of use</li>
                            <li>Cookies</li>
                            <li>Privacy Policy</li>
                            <li>Security Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-box">
                        <h6>OUR LOCATIONS</h6>
                        <ul>
                            <li>Lexington, KY (Fayette County)</li>
                            <li>Louisville, KY (Jefferson County)</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="subscribe">
                        <h6>CONNECT</h6>
                        <div className="social-icons">
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>
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
    )
}

export default Footer
