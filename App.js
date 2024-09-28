import React from "react";
import ReactDOM from 'react-dom/client'

/**
 * Header
 *  -logo
 *  -Nav Items
 * Body
 *  -Search
 *  -Resturant Cart
 *  -ResturantCard
 *      -Img
 *      -Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="Logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = () => {
    return(
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="Body">
            <div className="Search">Search</div>
            <div className="res-container">
                <ResturantCard />
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
        <Header/>
        <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)



