const express = require("express");
const fileUpload = require("express-fileupload")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const cakeshopRoutes = express.Router();
const PORT = 4000; 
let cakeshopCustomerDM = require('./cakeshopCustomerSch')
let cakeshopProductDM = require('./cakeshopProductsSch')
let cakeshopAdminDM = require('./cakeshopAdminSch')
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/cakeshop', {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("mongoDB database connection established successfully");
});
cakeshopRoutes.route('/viewCustomer').get(function(req, res){
    cakeshopCustomerDM.find(function(err, cakeshop){
        if(err){
            console.log(err);
        }else{
            res.json(cakeshop);
        }
    });
});

cakeshopRoutes.route('/viewProducts').get(function(req, res){
    cakeshopProductDM.find(function(err, cakeshop){
        if(err){
            console.log(err);
        }else{
            res.json(cakeshop);
        }
    });
});
cakeshopRoutes.route('/viewAccounts').get(function(req, res){
    cakeshopAdminDM.find(function(err, cakeshop){
        if(err){
            console.log(err);
        }else{
            res.json(cakeshop);
        }
    });
});
cakeshopRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    cakeshopCustomerDM.findById(id, function(err, cakeshop){
        res.json(cakeshop);
    });
});

cakeshopRoutes.route('/addimage').post(function(req,res){
    if(req.files === null){
        return res.status(400).json({msg : 'no file uploaded'});
    }
    const file = req.files.file;
    file.mv(`C:\\Users\\Ronwell\\kekishopu\\public\\pictures\\products\\${file.name}`, err =>{
        if(err){
            console.error(err);
            return;
        }
        res.status(200).send('image saved')
    });
 });
 

cakeshopRoutes.route('/add').post(function(req,res){
   let orders = new cakeshopCustomerDM(req.body);
   orders.save()
   .then(orders => {
       res.status(200).json({'orders' : 'orders added succesfully'});
   })
   .catch(err =>{
       res.status(400).send('adding new orders failed')
   })
});

cakeshopRoutes.route('/addproduct').post(function(req,res){
    let products = new cakeshopProductDM(req.body);
    products.save()
    .then(products => {
        res.status(200).json({'products' : 'new product added succesfully'});
    })
    .catch(err =>{
        res.status(400).send('adding new product failed')
    })
 });
 

 cakeshopRoutes.route('/addaccount').post(function(req,res){
    let accounts = new cakeshopAdminDM(req.body);
    accounts.save()
    .then(accounts => {
        res.status(200).json({'accounts' : 'new accounts added succesfully'});
    })
    .catch(err =>{
        res.status(400).send('adding new accounts failed')
    })
 });

 

app.use('/cakeshop', cakeshopRoutes);

app.listen(PORT, function(){
    console.log("server is running on port " + PORT);
});
