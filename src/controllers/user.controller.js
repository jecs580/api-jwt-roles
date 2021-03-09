import {request,response} from 'express'

const getUsers = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

module.exports = {
    getUsers
}