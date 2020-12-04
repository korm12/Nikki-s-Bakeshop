import React, { Component } from 'react';
import '../contact.css'
class Contact extends Component {

    render() { 
        return (
            <div className="container contact-mes-container text-center" style={{padding:"10% 20% 10% 20%"}}>
                <h1 className="contact-text-title ">Contact Information</h1>
                <hr style={{border:"1px solid grey"}}/>
                <p className="contact-content ">If you have
                 any inquiries or questions, don't hesitate to message us.</p>
                <p><i className="fa fa-envelope" style={{fontSize:"30px", color:"#ffdf00", textShadow:"2px 2px grey"}}></i>  delfinaanna30@gmail.com </p>
                <p><i className="fa fa-phone-square" style={{fontSize:"35px", color:"#ffdf00", textShadow:"2px 2px grey"}}></i>  +63961-034-2579</p>
            </div>
            
         );
    }
}
 
export default Contact;