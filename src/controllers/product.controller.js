import {request,response} from 'express'

const getProducts = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

module.exports = {
    getProducts
}