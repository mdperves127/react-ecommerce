import React from "react";
import Layout from "../Layout";
import Banner from "./Banner/Banner";
import Collection from "./Collection/Collection";

const Home = () => {
    return (
        <Layout title="Home" id="home" >
            <Banner />
            <Collection />
        </Layout>
    )
}


export default Home;