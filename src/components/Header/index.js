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
        let button;
        if (this.props.location.pathname == "/Register") {
            button = " ";
        } else {
            button = <ul className="navbar-nav">
                {/* <li style={{marginRight: "10px"}}><Link to="/Register" className="btn btn-info">Login</Link></li> */}
                <li><Link to="/Register" className="btn btn-info">Sign Up</Link></li>
            </ul>
        }

        return(
            <header>
                <section className="johnson-law-service">
                    <div className="row justify-content-center">
                        <h6>A Service of the Johnson Law Group, PLLC</h6>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                
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
