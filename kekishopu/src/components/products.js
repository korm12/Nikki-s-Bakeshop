import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl' 
import '../product.css'
import Cakes from './cakes'
import axios from 'axios'
import Footer from './footer'
import BannerNav from './banner-nav'
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0, 
        cakes:[]
        };
    }
    componentDidMount(){
        axios.get("http://localhost:4000/cakeshop/viewProducts")
        .then(response => {
            var cakesData= response.data;
            this.setState({cakes: cakesData})
        })
        .catch(function(error){
            console.log(error);
        })
    }
    toggleTab(){
        
        if(this.state.activeTab === 0){
            return(   
                this.state.cakes.map(cake => cake.category === "Standard" ?(
                    <Cakes key={cake._id} cake={cake}/>
                ):(""))
            )
        }
        else if(this.state.activeTab === 1){
            return(
                this.state.cakes.map(cake => cake.category === "Customize" ?(
                    <Cakes key={cake._id} cake={cake}/>
                ):(""))
            )
        }
    }

    render() { 
        return (
            <React.Fragment>
            <BannerNav/>
            <div className="container-fluid wrap">
                <div className="container tab-container shad" style={{padding:"2% 4% 2% 4%"}}>
                    <div className="demo-tabs">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>Standard Cakes</Tab>
                            <Tab>Customized Designs</Tab>
                        </Tabs>
                        <section>
                            <div className="container" style={{padding:"2% 2% 2% 2%"}}>
                                <div className="row">
                                    {this.toggleTab()}
                                </div>
                            </div>
                        </section>
                     </div>
                </div>
            </div>   
            <Footer/>
            </React.Fragment> 
        );
    }
}
 
export default Products;