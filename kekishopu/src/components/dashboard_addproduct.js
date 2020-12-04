import React, { Component } from 'react';
import '../dashboard.css'
import {Link} from 'react-router-dom';
import Addprodform from './addproduct_form';
class Addproducts extends Component {

    constructor(props){
        super(props)
        this.state = { 
            W:"0"
         }
        var acc = JSON.parse(localStorage.getItem('accounts'));
        if(acc.length === 0){
            alert("you are not logged in")
            window.location.replace('/dashboard/login')
        }
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
                        <h1 className="dashboard-title text-center">Add Products</h1>
                        <Addprodform onSubmitE/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Addproducts;