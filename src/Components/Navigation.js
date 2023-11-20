import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="header-wrap">
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-3 col-sm-12">
                        <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" /></a></div>
                    </div>

                    <div className="col-md-7 col-sm-9">
                        
                        <div className="navigationwrape">
                            <div className="navbar navbar-default" role="navigation">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/index.html">Home</Link></li>
                                        <li><Link to="/about-us.html">About Us</Link></li>
                                        <li><Link to="/listing.html">Jobs</Link></li>
                                        <li><Link to="/contact-us.html">Contact us</Link></li>
                                        <li><Link to="/login.html">Login</Link></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-3">
                        <div className="post-btn"><a href="ad-post.html">Post your Job</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
