import React, { Component } from 'react';
import "../gallery.css"
class Gallery extends Component {

    render() { 
        return (  
            <div className="container-fluid gallery-container">
                <div className="container carousel-container" style={{padding:"0 10% 0 10%"}}>
                    <h1 className="gallery-title text-center">Gallery</h1>
                    <div className="carousel slide" data-ride="carousel">

                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            <li data-target="#demo" data-slide-to="3"></li>
                        </ul>


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/pictures/c1.png" alt="cake 1" style={{width:"100%"}} />
                            </div>
                            <div className="carousel-item">
                                <img src="/pictures/c2.png" alt="cake 2" style={{width:"100%"}} />
                            </div>
                            <div className="carousel-item">
                                <img src="/pictures/c3.png" alt="cake 3" style={{width:"100%"}} />
                            </div>
                            <div className="carousel-item">
                                <img src="/pictures/c1.png" alt="cake 4" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="row"  style={{paddingLeft:"2%",paddingRight:"2%"}}>
                        <div className="col-md-4" style={{padding:0}}>
                            <img src="/pictures/g1.png" style={{width:"100%"}} alt="customer 1"/>
                        </div>
                        <div className="col-md-4" style={{padding:0}}>
                            <img src="/pictures/g2.png" style={{width:"100%"}} alt="customer 2"/>
                        </div>
                        <div className="col-md-4" style={{padding:0}}>
                            <img src="/pictures/g3.png" style={{width:"100%"}} alt="customer 3"/>
                        </div>
                        <div className="col-md-4" style={{padding:0}}>
                            <img src="/pictures/g4.png" style={{width:"100%"}} alt="customer 4"/>
                        </div>
                        <div className="col-md-4" style={{padding:0}}>
                            <img src="/pictures/g5.jpg" style={{width:"100%"}} alt="customer 5"/>
                        </div>
                        <div className="col-md-4" style={{padding:0}}>
                            <img src="/pictures/g6.jpg" style={{width:"100%"}} alt="customer 6"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Gallery;