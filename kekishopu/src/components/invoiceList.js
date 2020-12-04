import React, { Component } from 'react';
import '../dashboard.css'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Invoice extends Component {

    constructor(props){
        super(props)
        this.state = { 
            W: "0",
            customers: []


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
            var customersData= response.data;
            this.setState({customers: customersData})
            console.log(customersData)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    loadInvoices(){
        return(
            this.state.customers.map(invoice =>(
                <React.Fragment key={invoice._id}>     
                 <div className="row ">
                    <div className="col-md-6 customer-info">
                        <h4><b>Name</b> : {invoice.fname + " " +  invoice.lname}</h4>
                        <br/>
                        <p><b>Date Ordered</b> : {(invoice.orderDate).substr(0,10)}</p>
                        <p><b>ID</b> : {invoice._id}</p>
                        <p><b>Email</b> : {invoice.email}</p>
                        <p><b>Contact</b> : {invoice.contact}</p>
                        <p><b>Address</b> : {invoice.street + ", " + invoice.barangay + ", " + invoice.city}</p>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-content shad">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Image</th>
                                    <th>Item Name</th>
                                    <th>Qty</th>
                                    <th className="text-right">Unit Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.orders.map((sub)=>
                                    <tr key = {sub._id + Math.random()}>
                                        <td><img src={sub.src} alt={sub.src} style={{width:"100px"}}/></td>
                                        <td>{sub.name}</td>
                                        <td>{sub.qty}</td>
                                        <td className="text-right">{sub.price}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                                <p className="text-right"><b>Total Price : </b>{invoice.totalPrice}</p>
                    </div>
                 </div>
                 <hr style={{border:"1px solid black"}}/>
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
                        <h1 className="dashboard-title text-center">Invoice List</h1>
                        <hr style={{border:"2px solid black"}}/>
                        {this.loadInvoices()}
                    </div>
                </div>
            </div>
         );//asd
    }
}
 
export default Invoice;