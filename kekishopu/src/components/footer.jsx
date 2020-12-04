import React, { Component } from 'react';
import '../footer.css'

class Footer extends Component {
    render() { 
        return ( 
            <div className="container-fluid shad footer-container">
                <div className="container wrapper">
                    <div className="row container-rows">
                        <div className="col-md-4">
                            <h5 className="footer-text-title" style={{fontFamily:"Patua One, cursive"}}>PRODUCTS</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="list-item" style={{textDecoration:"none"}}> Standard Design Cakes</a></li>
                                <li><a href="/" className="list-item" style={{textDecoration:"none"}}>Customized Cakes</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="footer-text-title" style={{fontFamily:"Patua One, cursive"}}>INFORMATION</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="list-item" style={{textDecoration:"none"}}> About Me</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="footer-text-title" style={{fontFamily:"Patua One, cursive"}}>CONTACT US</h5>
                            <ul className="list-unstyled">
                                <li className="list-item">Email : delfinaanna30@gmail.com</li>
                                <li className="list-item">Phone : +63961-034-2579</li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{border:"1px solid white"}}/>
                    <div className="social text-center">
                         <a href="/"><i className="fa fa-facebook-square" style={{fontSize:"40px", color:"#ffdf00"}}></i></a>
                    </div>
                    <hr style={{border:"1px solid white"}}/>
                        <p className="text-center" style={{color:"white", fontSize:"x-small"}}>Created by : Ronwell Butial</p>
                </div>
            </div>
        );
    }
}
 
export default Footer;