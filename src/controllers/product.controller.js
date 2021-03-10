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

const getProducts = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

const getProductById = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

const updateProductById = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

const deleteProductById = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}