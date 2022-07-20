import React from "react";
import "./Product.css";

const Product = ({id, name, price, type, image, hoverImage}) => {

    return(
        <div className="col-lg-3">
            <div className="product">
                <div className="thumb">
                    <img src={image} alt={name} />
                    <img className="hover-image" src={hoverImage} alt={name} />
                </div>
                <div className="badge">
                <span class="sale">{type}</span>
                </div>
                <div class="actions">
                    <a href="#!" class="action wishlist" title="Wishlist">
                        <i class="fa fa-light fa-heart"></i>
                    </a>
                    <a href="#!" class="action quickview" title="Quick view"></a>
                    <a href="#!" class="action compare" title="Compare"></a>
                </div>
                <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                <div class="content">
                    <h5 class="title"><a href="#">{name}</a></h5>
                    <span class="price"><span class="new">${price}</span></span>
                </div>
            </div>
        </div>
    )
}


export default Product;