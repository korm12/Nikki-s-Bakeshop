const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cakeshop_customers = new Schema({
    fname:{
        type: String
    },
    lname:{
        type: String
    },
    contact:{
        type: String
    },
    email:{
        type: String
    },
    street:{
        type: String
    },
    barangay:{
        type: String
    }, 
    city:{
        type: String
    },
    orders:[{
            ordersid: String,
            src: String,
            name: String,
            qty: Number,
            price: Number,
    }],
    totalPrice:{
        type : Number
    },
    orderDate:{
        type : Date
    }
})



module.exports= mongoose.model('cakeshop_customers', cakeshop_customers)
