import React from 'react'
import Link from 'gatsby-link'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Header = (props) => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/#" className="navbar-brand">
                            {props.metaData.title}
                        </Link>
                        <button className="navbar-toggler" type="button">
                            <IconMenu
                              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                              targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            >
                              <MenuItem
                                  primaryText="How it works"
                                  containerElement={<Link to="/#howitworks" />}
                              />
                              <MenuItem primaryText="Login" />
                              <MenuItem primaryText="Sign Up" />
                            </IconMenu>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/#howitworks"  className="nav-link">How it works</Link>
                                </li>
                                <li style={{marginRight: "10px"}}><Link to="/Register" className="btn btn-info">Login</Link></li>
                                <li><Link to="/Register" className="btn btn-info">Sign Up</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

export default Header
