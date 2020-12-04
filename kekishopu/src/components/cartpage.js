import React, { Component } from 'react';
import '../cart.css'
import Footer from './footer'
import BannerNav from './banner-nav'
class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            orders: JSON.parse(localStorage.getItem('orders')),
            price:''
        }
    }
    
    decreaseQty = (orderz) =>{
        if(orderz.qty === 1 ){
            return
        }
        const prevState = this.state.orders;
           this.setState(prevState.map(
            obj => (obj._id === orderz._id ? Object.assign(obj, { qty: orderz.qty-1}) : obj)
          ))
    
        localStorage.setItem('orders', JSON.stringify(this.state.orders))
    }
    
    increaseQty = (orderz) =>{
      
        const prevState = this.state.orders;
           this.setState(prevState.map(
            obj => (obj._id === orderz._id ? Object.assign(obj, { qty: orderz.qty+1}) : obj)
          ))
    
        localStorage.setItem('orders', JSON.stringify(this.state.orders))
    }
    removeItem = (e) =>{
        let prevOrders = this.state.orders;
        for (var i = 0;i <prevOrders.length; i++ ){
            var obj = prevOrders[i];
            if(obj._id === e._id ){

                prevOrders.splice(i, 1);
            }
        }
        this.setState({orders:prevOrders})
        localStorage.setItem('orders', JSON.stringify(this.state.orders))
    }
    getPrice(){
        const orders = this.state.orders;
        var itemPrice =0;
        for(var i = 0; i < orders.length; i++){
            itemPrice = itemPrice + (orders[i].qty * orders[i].price);
        }
       return(itemPrice)
    }
    loadCart(){
        if(this.state.orders.length ===0){
            return(
                <div>
                    <h2 className="total-price text-center"> Cart is Empty </h2>
                    <hr/>
                </div>
            )
        }
        return(
            this.state.orders.map(order => (
                <React.Fragment key={order._id}>
                    <div className="row" >
                            <div className="col-md-3">
                               <img src={order.src} style={{width:"100%"}} alt="123123123" /> 
                            </div>
                            <div className="col-md-3 my-auto text-center"> 
                              <h5>{order.name}</h5>
                            </div>
                            <div className="col-md-3 my-auto text-center"> 
                               <button className="btn btn-outline-danger mr-2" onClick={() => this.decreaseQty(order)}><i className="fa fa-minus" style={{width:"15px"}}></i></button>
                               {order.qty}
                               <button className="btn btn-outline-success ml-2" onClick={() => this.increaseQty(order)}><i className="fa fa-plus" style={{fontSize:"15px"}}></i></button>
                            </div>
                            <div className="col-md-2 my-auto text-center"> 
                                <h5>PHP {order.qty * order.price}</h5>
                            </div>
                            <div className="col-md-1 my-auto text-center">
                                <button className="btn btn-outline-danger" onClick={() => this.removeItem(order)}><i className="fa fa-times" style={{fontSize:"20px"}}></i></button>
                            </div>
                        </div>
                        <hr/>
                </React.Fragment>
            ))
        )
    }
    render() { 
        return (  
            <React.Fragment>
            <BannerNav/>
            <div className="wrap">
                <div className="container cart-container shad" style={{padding:"5% 5% 5% 5%"}}>
                    <h1 className="cart-text-title text-center">Cart</h1>
                    <hr />
                    <div className="container item-wrap">
                        {this.loadCart()}
                    </div>
                   <h4 className="total-price text-right">Total Price :  {this.getPrice()}</h4>
                   <a href="/delivery_info" className="btn btn-lg btn-outline-info float-right">Purchase</a>
                </div>
               
            </div>
            <Footer/>
            </React.Fragment>
        );
    }
}
 
export default Cart;