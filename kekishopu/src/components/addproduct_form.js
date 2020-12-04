import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import FormData from 'form-data'
import axios from 'axios'
const Addprodform  = (props) => { 

    const [image, setImage] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const {register, handleSubmit} = useForm()
    const onSubmit = handleSubmit((data) => {
        data['src'] = "/pictures/products/"+imageSrc;
        console.log(data)

        
        saveImage();
        axios.post('http://localhost:4000/cakeshop/addproduct', data)
           .then(res => console.log(res.data));
        
    }); 
    const saveImage = async => {
        let imageData = new FormData();
        imageData.append('file', image);
        axios.post('http://localhost:4000/cakeshop/addimage', imageData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => console.log(res.data));
    
        window.location.assign('/dashboard/addproducts');
    }
    const onSetImage = e => {
        setImage(e.target.files[0])
        setImageSrc(e.target.files[0].name)
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="form-group row">
                <div className="form-group col-md-6">
                    <label ><b>Cake name</b></label>
                    <input ref={register} type="text" className="form-control" name="name" id="name"/>
                </div>
                <div className="form-group col-md-6">
                    <label><b>Price</b></label>
                    <input ref={register} type="text" className="form-control" name="price" id="price"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="form-group col-md-6">    
                    <p><b>Category</b></p>
                    <div className="form-check form-check-inline">
                        <input ref={register} className="form-check-input" type="radio" name="category" id="inlineRadio1" value="Standard"/>
                        <label className="form-check-label">Standard</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input ref={register} className="form-check-input" type="radio" name="category" id="inlineRadio2" value="Customize"/>
                        <label className="form-check-label">Customize</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label><b>Attach image of the product</b></label>
                    <input type="file" className="form-control-file" onChange={onSetImage} id="exampleFormControlFile1" />
                </div>
            </div>
            <div className="form-group row">
                <div className="form-group col-md-12">
                    <label><b>Description</b></label>
                    <textarea ref={register} className="form-control" name="description" id="description" rows="5"></textarea>
                </div>
            </div>
            
            <div className="form-group row">
                <div className="col-sm-12 text-center">
                <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </div>
        </form> 
    );
}

export default Addprodform;