import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Products from './products';
import Cart from './cartpage';
import Aboutme from './Aboutmepage'
import DeliveryPage from './deliverypage'
const Main = () => (

    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/products" component={Products} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/cart" component={Cart} />
        <Route path="/delivery_info" component={DeliveryPage} />
    </Switch>
    

)
export default Main;

