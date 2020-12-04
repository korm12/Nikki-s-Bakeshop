import React from 'react';
import '../delivery.css'
import {useForm} from "react-hook-form"
import axios from 'axios'
import Footer from './footer'
import BannerNav from './banner-nav'
const DeliveryPage = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = handleSubmit((data) => {
        var ordersData = [];
        for(var i = 0; i< storage.orders.length; i++){
            ordersData.push({"ordersid":storage.orders[i]._id, 
                            "src":storage.orders[i].src,
                            "name":storage.orders[i].name,
                            "qty":storage.orders[i].qty,
                            "price":storage.orders[i].price,})
        }
        data['orders']= ordersData;
        data['totalPrice']=storage.price;
        data['orderDate']= Date.now();
        axios.post('http://localhost:4000/cakeshop/add', data)
           .then(res => console.log(res.data));
        console.log(JSON.stringify(data));
        alert("Thank you. Your orders has been sent")
        window.location.assign('/');
    });
    const storage={
            orders: JSON.parse(localStorage.getItem('orders')),
            price:''
        }
     
        
   function getPrice(){
            const orders = storage.orders;
            var itemPrice =0;
            for(var i = 0; i < orders.length; i++){
                itemPrice = itemPrice + (orders[i].qty * orders[i].price);
            }
            storage.price = itemPrice;
           return(itemPrice)
        }

   function loadCart(){
        if(storage.orders.length ===0){
            return(
                <div>
                    <h2 className="total-price text-center"> Cart is Empty </h2>
                    <hr/>
                </div>
            )
        }
        return(
            storage.orders.map(order => (
                <React.Fragment key={order._id}>
                    <div className="row" >
                            <div className="col-md-3">
                               <img src={order.src} style={{width:"100%"}} alt="123123123" /> 
                            </div>
                            <div className="col-md-3 my-auto text-center"> 
                              <h5>{order.name}</h5>
                            </div>
                            <div className="col-md-3 my-auto text-center">  
                               {order.qty}
                            </div>
                            <div className="col-md-3 my-auto text-center"> 
                                <h5>PHP {order.qty * order.price}</h5>
                            </div>
                        </div>
                        <hr/>
                </React.Fragment>
            ))
        )
    }

   
    return (
    <React.Fragment>
    <BannerNav/>
    <div className="wrap">
        <div className="container delivery-container shad"  style={{padding:"5% 5% 5% 5%"}}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="section-label">Delivery Information</h1>
                    (Please fill the fields)
                    <br/>
                    <br/>
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >First Name<span style={{color:"red"}}>*</span></label>
                                <input ref={register} type="text" className="form-control" name="fname" id="fname"  placeholder="First name" required/>
                            </div> 
                            <div className="form-group col-md-6">
                                <label>Last Name<span style={{color:"red"}}>*</span></label>
                                <input ref={register} type="text" className="form-control" name="lname" id="lname" placeholder="Last name" />
                            </div> 
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input ref={register} type="email" className="form-control" name="email" id="email"  placeholder="Email" />
                            </div> 
                            <div className="form-group col-md-6">
                                <label>Contact No<span style={{color:"red"}}>*</span></label>
                                <input ref={register} type="text" className="form-control" name="contact" id="contact" placeholder="Contac No" />
                            </div> 
                        </div>
                        <h2 className="section-label">Address</h2>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Blk/Lot/Phase/Street/House No.<span style={{color:"red"}}>*</span></label>
                                <input ref={register} type="text" className="form-control" name="street" id="street"  placeholder="eg. Blk 1, lot 1, phase 1, village name" />
                            </div> 
                                
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Baranggay<span style={{color:"red"}}>*</span></label>
                                <input ref={register} type="text" className="form-control" name="barangay" id="barangay" placeholder="Baranggay" />
                            </div> 
                            <div className="form-group col-md-6">
                                <label>City/Municipality<span style={{color:"red"}}>*</span></label>
                                <input ref={register} type="text" className="form-control" name="city" id="city" placeholder="City/Municipality" />
                            </div>
                        </div>
                        <h2 className="section-label">Orders</h2>
                        <div className="row">
                        
                            <div className="col-md-3 text-center"><h5 className="orders-label">Image</h5></div>
                            <div className="col-md-3 text-center"><h5 className="orders-label">Cake Name</h5></div>
                            <div className="col-md-3 text-center"><h5 className="orders-label">Quantity</h5></div>
                            <div className="col-md-3 text-center"><h5 className="orders-label">Price</h5></div>    
                        </div>
                        <div className="container item-wrap" style={{maxHeight:"200px", overflow:"auto"}}>   
                            <hr/>
                            {loadCart()}
                        </div>
                        <h4 className="total-price text-right">Total Price :  {getPrice()}</h4>
                        <button type="submit" className="btn btn-lg btn-outline-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
    );
    
}
 
export default DeliveryPage;