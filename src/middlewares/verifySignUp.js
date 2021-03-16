import {request,response} from 'express'
import { ROLES } from '../models/Role'
import User from '../models/User'
export const checkDuplicateUserNameOrEmail = async(req=request, res=response, next)=>{
    const user = await User.findOne({username:req.body['username']})
    if(user)
        return res.status(400).json({
            ok:false,
            msg:'El nombre de usuario ya existe'
        })
    const email =  await User.findOne({email:req.body['email']});
    if(email){
        return res.status(400).json({
            ok:false,
            msg:'El email ya existe'
        })
    }
    next();
}

export const checkRolesExist = (req=request, res = response, next)=>{
    if(req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    ok:false,
                    msg:`El role ${req.body.roles[i]} no existe`
                })
            }
        }
    }
    next();
}