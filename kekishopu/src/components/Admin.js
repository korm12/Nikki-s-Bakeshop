import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './login';
import Dashboard from './dashboard_home';
import CustomerList from './customersList';
import Invoice from './invoiceList';
import Addproducts from './dashboard_addproduct';
import Logout from './logout'

const Admin = () =>(
    <Switch>
        <Route path="/dashboard/login" component={Login}/>
        <Route path="/dashboard/orders" component={Dashboard}/>
        <Route path="/dashboard/customers" component={CustomerList}/>
        <Route path="/dashboard/invoice" component={Invoice}/>
        <Route path="/dashboard/addproducts" component={Addproducts}/>
        <Route path="/dashboard/logout" component={Logout}/>
    </Switch>
)

export default Admin; 