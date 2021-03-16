import {request,response} from 'express'
import User from '../models/User'

const getUsers = async (req=request,res=response)=>{
    const users = await User.find().populate('roles');
    return res.json({
        ok:true,
        users,
    })
};

module.exports = {
    getUsers
}