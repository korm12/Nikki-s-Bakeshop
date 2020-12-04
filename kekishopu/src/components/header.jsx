import React, { Component } from 'react';
import '../header.css'


class Header extends Component {

    render() { 
        return (  
            <div className="container-fluid header-container" style={{minHeight:"200px", padding:"10% 20% 10% 20%"}}>
                <div className="header-text-container text-center mx-auto" >
                    <h1>Celebrate Occasions in Sweetest Way!</h1>
                </div>
            </div>
        );
    }
}
 
export default Header;