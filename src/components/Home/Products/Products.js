import React, { useState } from "react";
import Product from "./Product/Product";
import Items from "../../../states/Items";
import "./Products.css";


const Products = () => {
    const [items, setItems] = useState(Items);


    const filterItem = (allItem) => {
        const updatedItems = Items.filter((curElem) => {
            return curElem.type === allItem;
        });
        setItems(updatedItems);

    }
    return(
        <div id="products">
            <div className="container">
                <div className="row">
                    <h1>HOT PRODUCTS</h1>
                    <p>See What Everyone Is Shopping from E-Commerce</p>
                    <ul>
                        <li>
                            <button href="#" onClick={() => setItems(Items)}>All</button>
                        </li>
                        <li>
                            <button href="#"  onClick={() => filterItem('new arrival')}>New arrival</button>
                        </li>
                        <li>
                            <button href="#"   onClick={() => filterItem('trending')}>Trending</button>
                        </li>
                        <li>
                            <button href="#"  onClick={() => filterItem('best seller')}>Best Selling</button>
                        </li>
                        <li>
                            <button href="#"  onClick={() => filterItem('featured')}>featured</button>
                        </li>
                        <li>
                            <button href="#"  onClick={() => filterItem('on sale')}>On sell</button>
                        </li>
                    </ul>
                    {
                        items.map((item, index) => {
                            const {id, name, price, type, image, hoverImage} = item;
                            return(
                                <Product key={index} id={id} name={name} price={price} type={type} image={image} hoverImage={hoverImage} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}


export default Products;