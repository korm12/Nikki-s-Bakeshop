import React, { Component } from 'react';
import Header from './header';
import Welcome from './welcome';
import Gallery from './gallery';
import Contact from './contact';
import Footer from './footer'
import BannerNav from './banner-nav'
class Landingpage extends Component {
    render() { 
        return (<div>
            <BannerNav/>
            <Header/>
            <Welcome/>
            <Gallery/>
            <Contact/>
            <Footer/>
        </div>);
    }
}
 
export default Landingpage;