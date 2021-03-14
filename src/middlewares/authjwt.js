import {request,response} from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from '../models/Role'
export const verifyToken = async(req= request,res=response,next)=>{
    const token = req.headers["token"];
    if(!token){
        return res.status(403).json({
            ok:false,
            msg:'Token no provisto'
        })
    }
    try {
        const decoded = jwt.verify(token,config.SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok:false,
            msg:'El usuario no existe'
        })
    }
}

export const isModerator =async(req= request,res=response,next)=>{
    const userId = req.userId;
    const user  = await User.findById(userId);
    const roles = await Role.find({_id: {$in: user.roles}});
    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name == 'moderator'){
            next();
            return
        }
    }
    return res.status(403).json({
        ok:false,
        msg:'Require rol de moderador'
    })
}
export const isAdmin =async(req= request,res=response,next)=>{
    const userId = req.userId;
    const user  = await User.findById(userId);
    const roles = await Role.find({_id: {$in: user.roles}});
    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name == 'admin'){
            next();
            return
        }
    }
    return res.status(403).json({
        ok:false,
        msg:'Require rol de administrador'
    })
}