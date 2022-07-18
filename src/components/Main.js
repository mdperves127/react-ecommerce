import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Compare from './Shop/Compare';
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/about" exact component={About} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/compare" exact component={Compare} />
                <Redirect to="/" />

            </Switch>
        </div>
    )
}


export default Main;