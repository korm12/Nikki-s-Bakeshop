const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cakeshop_admins = new Schema({
    username:{
        type: String,
    },
    password:{
        type: String,
    }
})


module.exports= mongoose.model('cakeshop_admins', cakeshop_admins)