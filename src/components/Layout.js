import React,{ useEffect } from 'react';
import TopNav from './Navbar/TopNav';
import MainNav from './Navbar/MainNav';



const Layout = ({title = "ecommerce", id, children}) => {
    useEffect(() => {
        document.title = title;
    }, []);
    return(
        <div>
            <TopNav />
            <MainNav />
            <div id={id}>{children}</div>
        </div>
    )
}


export default Layout;