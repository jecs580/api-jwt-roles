import {request,response} from 'express'
import  Product from '../models/Product'
const createProduct = async(req=request,res=response)=>{
    const newProduct = new Product(req.body)
    const product = await newProduct.save()
    return res.status(201).json({
        ok:true,
        msg:'Product created successfully',
        product
    })
};

const getProducts = async (req=request,res=response)=>{
    const products =  await Product.find();
    return res.json({
        ok:true,
        products
    })
};

const getProductById = async(req=request,res=response)=>{
    const id =  req.params['productId'];
    const product = await Product.findById(id);
    console.log(id);
    return res.json({
        ok:true,
        product
    })
};

const updateProductById = async(req=request,res=response)=>{
    const id =  req.params['productId'];
    const productdb = await Product.findById(id);
    if(!productdb){
        return res.json({
            ok:false,
            msg:'No existe un producto por ese ID'
        })
    }
    const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true});
    return res.json({
        ok:true,
        product:updatedProduct
    })
};

const deleteProductById = async(req=request,res=response)=>{
    const id = req.params['productId'];
    const deletedProduct = await Product.findByIdAndDelete(id);
    return res.json({
        ok:true,
        product: deletedProduct
    })
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}