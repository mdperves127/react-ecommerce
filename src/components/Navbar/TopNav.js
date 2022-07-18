import React from "react";
import { Link } from "react-router-dom";
import './TopNav.css';


const TopNav = () => {
    return (
        <div>
            <section id="topNav">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="top_left">
                            <p>Special collection already available. <Link to="/shop">Read more...</Link> </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="top_right">
                                <li>
                                    <Link to="/compare">
                                        <i class="fa fa-refresh"></i>Compare
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <i class="fa fa-user"></i>Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <i class="fa fa-lock"></i>Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default TopNav;