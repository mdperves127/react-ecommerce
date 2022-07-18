import React from "react";
import { Link } from "react-router-dom";
import BannerPhoto from '../../../assets/banner_photo.png';
import './Banner.css';


const Banner = () => {
    return(
        <>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner_detail">
                                <h1>Live For <span>Fashion</span></h1>
                                <h3>Save Up To 50%</h3>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner_photo">
                                <img src={BannerPhoto} alt={BannerPhoto} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Banner;