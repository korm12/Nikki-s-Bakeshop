import React, { Component } from 'react';
import '../dashboard.css'
import {Link} from 'react-router-dom';
import axios from 'axios'
class CustomerList extends Component {

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
    loadCustomerList(){ 
        return(
            
            this.state.customers.map(customer =>(
                <tr>
                    <td>{customer._id}</td>
                    <td>{customer.fname}</td>
                    <td>{customer.lname}</td>
                    <td>{customer.totalPrice}</td>
                    <td>{customer.email}</td>
                    <td>{customer.contact}</td>
                    <td>{customer.street}</td>
                    <td>{customer.barangay}</td>
                    <td>{customer.city}</td>
                </tr>
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
                        <h1 className="dashboard-title text-center">Customer List</h1>
                        <table className="table table-content">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Customer ID</th>
                                    <th>First Name</th>
                                    <th>Lastname Name</th>
                                    <th>Order's Price</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Street</th>
                                    <th>Barangay</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {this.loadCustomerList()}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
         );//asd
    }
}
 
export default CustomerList;