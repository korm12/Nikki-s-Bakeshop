import React, {useContext, useEffect} from 'react';
import '../product.css'
import {CartContext} from './cartcontext'


const Cakes = (props) =>{
    const [cart, setCart] = useContext(CartContext)
    useEffect(()=>{
        const data = localStorage.getItem('orders');
        if(data)setCart(JSON.parse(data));
        // eslint-disable-next-line 
    },[])
    const addToCart = () =>{
        const currCart = cart; 
        const item = props.cake
        item["qty"]=1;
        console.log(item)
        for(var i =0 ; i < cart.length; i++){
            let obj = cart[i];
            if(obj._id === item._id ){
                alert("Already in Cart!")
                return
            }
            
        }
        currCart.push(item)
        setCart(currCart)
        
        localStorage.setItem('orders',JSON.stringify(cart))
        alert("Item added to cart")
    }
  
        

    return(
        <React.Fragment>
            <div className="col-md-4 " style={{marginTop:"1%", marginBottom:"1%" ,backgroundColor:"white"}}>
                <div className="card" style={{width:"100%", minHeight:"535px",backgroundColor:"white"}}>
                    <img className="card-img-top" src={props.cake.src} alt={props.cake.src}/>
                    <div className="card-body">
                        <h4 className="card-title">{props.cake.name}</h4>
                        <h5 className="card-price">PHP {props.cake.price}</h5>
                        <p className="card-text">{props.cake.description}</p>
                        <div className="text-center">
                            <button  className="btn btn-outline-primary " onClick={addToCart}>I Want This!</button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Cakes;