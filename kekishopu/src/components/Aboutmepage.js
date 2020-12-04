import React, { Component } from 'react';
import '../aboutme.css'
import Footer from './footer'
import BannerNav from './banner-nav'
class Aboutme extends Component {

    render() { 
        return (
            <React.Fragment>
            <BannerNav/>
            <div className="container-fluid wrap">
               <div className="container aboutme-container shad" style={{padding:"5% 5% 5% 5%"}}>
                   <div className="row">   
                        <div className="col-md-5">
                            <img src="/pictures/me.jpg" style={{width:"100%"}} alt="anna dominique delfina" />
                        </div>
                        <div className="col-md-7 aboutme-content">
                            <h2 className="aboutme-text-title">Anna Dominique Delfina</h2>
                            <br/>
                            <p>I am graduate of Bachelor of Technical Teacher Education major in Food and Service Management, a licensed professional teacher, and a graduate of Master's of Arts in Education major in Technology and Home Economics.</p>  

                            <p>Teaching Bread and Pastry Production in Grade 10 learners made me fall in love in baking. I also love sweets, so when the COVID-19 strikes, i was given an opportunity to bake for myself and also to my family.</p>   

                            <p>The moment I posted my finished baked products online, one of my friend asked me if I am accepting orders, and that is how it started.</p>  

                            <p>Now, even when there's a lot of things to accomplish as a teacher, I still see to it that I have enough time to give the best products for my customers.</p>  

                            <p>So, don't hesitate to order!  I promise to satisfy your sweet cravings and give the perfect cake for your special event!</p>   
                        </div>
                    </div>
                </div> 
            </div>
            <Footer/>
            </React.Fragment>
          );
    }
}
 
export default Aboutme;