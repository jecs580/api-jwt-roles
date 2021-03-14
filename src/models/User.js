import { Schema, model } from 'mongoose';
import Role from './Role';
import bcrypt from 'bcryptjs'
const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:[{
        ref: "role",
        type: Schema.Types.ObjectId
    }]    
},{
    timestamps:true,
    versionKey:false
});

userSchema.statics.encryptPassword =  (password)=>{
    const salt = bcrypt.genSaltSync(10);
    return  bcrypt.hash(password,salt);
}
userSchema.statics.comparePassword = async(password, receivePassword)=>{
    return bcrypt.compareSync(receivePassword,password);
}

export default model('user',userSchema);