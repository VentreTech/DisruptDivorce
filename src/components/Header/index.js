import React, {Component} from 'react'
import Link from 'gatsby-link'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LogoIcon from '../../images/LogoIcon.png';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const calendlyStyle = {
            color: 'white',
            marginRight: '10px',
        }

        let button;
        if (this.props.location.pathname == "/Register") {
            button = " ";
        } else {
            button = <ul className="navbar-nav">
                <li><a className="btn btn-info" style={calendlyStyle} href="https://calendly.com/thejohnsonlawgroup">Schedule Consultation</a></li>
                {/* <li style={{margi4nRight: "10px"}}><Link to="/Register" className="btn btn-info">Login</Link></li> */}                
                <li><Link to="/Register" className="btn btn-info">Sign Up</Link></li>
            </ul>
            
        }

        return(
            <header>
                <div className="d-sm-none">
                    <section className="container johnson-law-service-mobile">
                        <div className="row justify-content-center">
                            A Service of The Johnson Law Group, PLLC
                        </div>
                    </section>
                    <div className="row mobile-menu">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link to="/#" className="navbar-brand">
                                    <img src={LogoIcon} className="img-fluid" alt="#" />
                                </Link>
                                <ul>
                                    <li><span className="pe-7s-date"></span> <a href="https://calendly.com/thejohnsonlawgroup">Schedule Consultation</a></li>
                                    <li> <span className="pe-7s-add-user"></span> <Link to="/Register">Sign Up</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container d-none d-md-block">
                    <section className="container johnson-law-service">
                        <div className="row justify-content-center">
                            A Service of The Johnson Law Group, PLLC
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                                
                                <Link to="/#" className="navbar-brand">
                                    <img src={LogoIcon} className="img-fluid" alt="#" />
                                </Link>
                                
                                <div className="navbar-toggler">
                                    <IconMenu
                                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    >
                                    {/* <MenuItem primaryText="Login" /> */}
                                    <MenuItem primaryText="Sign Up" />
                                    </IconMenu>
                                </div>                        
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                    {button}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header
