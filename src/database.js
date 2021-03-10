import mongoose from 'mongoose'

    mongoose.connect('mongodb://localhost/api_jwt_rolesDB',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('>>> DB conectada'))
    .catch((err)=>{
        console.log(err);
        throw new Error('Error a la hora  de iniciar la DB ver logs');
    });