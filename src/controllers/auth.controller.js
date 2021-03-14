import {request,response} from 'express'
import User from '../models/User'
import Role from '../models/Role'
import jwt from 'jsonwebtoken'
import config from '../config'
const signup = async(req=request, res=response)=>{
    const {username, email, password, roles} = req.body;
    const ExisteEmail = await User.findOne({email});
    if(ExisteEmail){
        return res.status(400).json({
            ok:false,
            msg:'El correo ya esta en uso'
        })
    }
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });
    if(roles){
        const foundRoles = await Role.find({name:{$in:roles}})
        if(foundRoles.length===0){
            return res.status(400).json({
                ok:false,
                msg:'No existen los roles ingresados'
            })
        }
        if(foundRoles.length != roles.length){
            return res.status(400).json({
                ok:false,
                msg:'Algunos roles ingresados no existen'
            })
        }
        newUser.roles =  foundRoles.map(role=> role._id);
    }else{
        const role = await Role.findOne({name:"user"});
        newUser.roles = [role._id]
    }
    const createdUser =  await newUser.save();
    const token = jwt.sign({id:createdUser._id},config.SECRET,{
        expiresIn: '24h' // 24 hours
    })
    return res.json({
        ok:true,
        token
    })
}
const signin = async(req=request, res=response)=>{
    console.log(req.body);
    const userFound =  await User.findOne({email:req.body['email']}).populate('roles')
    if(!userFound){
        return res.status(400).json({
            ok:false,
            msg:'No existe un usuario con ese email'
        }) 
    }
    const matchPassword = await User.comparePassword(userFound.password, req.body['password']);
    if(!matchPassword){
        return res.status(401).json({
            ok:false,
            msg:'Contraseña invalida'
        }) 
    }
    const token = jwt.sign({id:userFound._id},config.SECRET,{
        expiresIn: '24h' // 24 hours
    });
    return res.json({
        ok:true,
        token
    })
}

module.exports = {
    signup,
    signin    
}