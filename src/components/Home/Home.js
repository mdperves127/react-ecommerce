import React from "react";
import Layout from "../Layout";
import Banner from "./Banner/Banner";
import Collection from "./Collection/Collection";
import Products from "./Products/Products";

const Home = () => {
    return (
        <Layout title="Home" id="home" >
            <Banner />
            <Collection />
            <Products />
        </Layout>
    )
}


export default Home;