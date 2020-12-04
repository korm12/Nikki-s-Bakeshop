import React, { Component } from 'react';
import '../welcome.css'
class Welcome extends Component {

    render() { 
        return (
            <div className="container-fluid welcome-mes-container" style={{padding:"10% 20% 10% 20%"}}>
                <h1 className="welcome-text-title text-center">Welcome Customers!</h1>
                <hr style={{border:"1px solid grey"}}/>
                <p className="message-content"><span style={{marginLeft:"30px"}}></span>Thankyou for visiting Nikki's Bakeshop. We are excited
                to share to you our amazing, delicious, and affordable cakes. We hope that we can satisfy
                your cravings. If you are looking for a shop where you can find cakes that you can spoil
                to your guest, this is the right place for you!. </p>
            </div>
         );
    }
}
 
export default Welcome;