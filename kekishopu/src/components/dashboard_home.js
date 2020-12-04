import React, { Component } from 'react';
import '../dashboard.css'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = { 
            W: "0",
            ordersList: []
         }
        var acc = JSON.parse(localStorage.getItem('accounts'));
        if(acc.length === 0){
            alert("you are not logged in")
            window.location.replace('/dashboard/login')
        }
    }
    componentDidMount(){
        axios.get("http://localhost:4000/cakeshop/viewCustomer")
        .then(response => {
            var ordersData= response.data;
            this.setState({ordersList: ordersData})
            console.log(this.state.ordersList)
        })
        .catch(function(error){
            console.log(error);
        })
    }
    
    loadOrders(){
        return(
            this.state.ordersList.map(orderItem =>(
                    
                <React.Fragment key={orderItem._id}>     
                    {orderItem.orders.map((sub)=>
                    <tr key={orderItem._id+ Math.random()}>
                        <td>{orderItem._id}</td>
                        <td>{orderItem.fname + " " + orderItem.lname}</td>
                        <td>{sub.name}</td>
                        <td>{sub.qty}</td>
                    </tr>
                    )}
                </React.Fragment>
            ))
        )
    }


    openNav = () => {
        this.setState({W : "250px"})
    }
    closeNav = () => {
        this.setState({W : "0"})
    }
    render() { 
        return ( 
            <div className="container-fluid dashboard-container">
                <div id="mySidebar" className="sidebar" style={{width:this.state.W}}>
                    <button className="closebtn btn btn-sm btn-outline-info mt-4" onClick={this.closeNav} style={{paddingTop:0}}><i className="fa fa-times" style={{fontSize:"medium"}}/></button>
                    <Link to="/dashboard/orders">Orders</Link>
                    <Link to="/dashboard/customers">Customers</Link>
                    <Link to="/dashboard/invoice">Invoice</Link>
                    <Link to="/dashboard/addproducts">Add Product</Link>
                    <Link to="/dashboard/logout">Logout</Link>
                </div>
                 <div className="main" style={{marginLeft:this.state.W}}>
                    <button className="openbtn btn btn-md btn-outline-primary" onClick={this.openNav}>&#9776; </button>
                    <div className="table-wrapper shad">
                        <h1 className="dashboard-title text-center">Orders List</h1>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Customer Name</th>
                                    <th>Item Name</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {this.loadOrders()}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;