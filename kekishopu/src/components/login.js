import React from 'react';
import '../dashboard.css'
import {useForm} from "react-hook-form"
import axios from 'axios'
const Login  = () => {
    var acc = []; 
    const {register, handleSubmit} = useForm()
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        for(var i = 0; i < storage.accounts.length; i++){
            if(storage.accounts[i].username === data.uname && storage.accounts[i].password === data.pass){
               alert("sucessful")
               window.location= '/dashboard/invoice';
               localStorage.setItem('accounts',JSON.stringify(data))
            }else{ alert("Incorrect Username or Password");
            window.location.replace('/dashboard/login');
                }


        }
    });
    
    const storage={
        accounts: [],
    }
    window.onload = () => {
        
        localStorage.setItem('accounts',JSON.stringify(acc))
        axios.get("http://localhost:4000/cakeshop/viewAccounts")
        .then(response => {
            var accounts= response.data;
            storage.accounts = accounts;
            console.log(storage.accounts)
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (
        <div className="container-fluid login-container" style={{padding:"15% 0 10% 0"}}>
            <div className="card login-card mx-auto" >
                <img src="/pictures/logo2.png" alt="icon" style={{width:"40%", height:"40%"}} className="shop-icon mx-auto"/>
                <div className="card-header">
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="text-center">Sign In</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input ref={register}  type="text" className="form-control" name="uname" placeholder="username"/>
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-key"></i></span>
                            </div>
                            <input ref={register} type="password" className="form-control" name="pass" placeholder="password"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn float-right login-btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}
 
export default Login;