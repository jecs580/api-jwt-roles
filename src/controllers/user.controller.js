import {request,response} from 'express'

const createUser=(req=request, res=response)=>{
    
    return res.json({
        ok:true
    })
}

const getUsers = (req=request,res=response)=>{
    return res.json({
        ok:true,
    })
};

module.exports = {
    createUser,
    getUsers
}