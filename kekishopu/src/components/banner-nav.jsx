import React, { Component } from 'react';
import '../banner-nav.css'
class BannerNav extends Component {
    
    render() { 
        return (
            <div className="container-fluid banner-container shad">
                <h1 className="banner-title text-center">Nikki's Bakeshop</h1>
                <nav className="navbar navbar-expand-sm justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item px-4">
                        <a className="nav-link" href="/" style={{color:"#ffdf00"}}>Home</a>
                        </li>
                        <li className="nav-item px-4">
                        <a className="nav-link" href="/aboutme" style={{color:"#ffdf00"}}>About Me </a>
                        </li>
                        <li className="nav-item px-4">
                        <a className="nav-link" href="/products"  style={{color:"#ffdf00"}}>Products</a>
                        </li>
                        <li className="nav-item px-4">
                        <a className="nav-link" href="/cart"  style={{color:"#ffdf00"}}>Cart</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default BannerNav;