const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cakeshop_products = new Schema({
    name:{
        type: String,
    },
    src:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
    category:{
        type: String,
    }

})

module.exports = mongoose.model('cakeshop_products',cakeshop_products )