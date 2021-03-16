import {request,response} from 'express'
import { ROLES } from '../models/Role'
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