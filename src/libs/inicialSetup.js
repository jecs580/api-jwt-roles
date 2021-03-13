import Role from '../models/Role'
export const createRole= async()=>{
    try {
        const count = await Role.estimatedDocumentCount();  // Consulta el numero de documento existentes
        if(count>0) return;
        const values = await Promise.all(
            [
            new Role({name:'user'}).save(),
            new Role({name:'moderator'}).save(),
            new Role({name:'admin'}).save()
            ]
        )
        console.log(values);
    } catch (error) {
        console.log('Error inesperado >>>',error);    
    }
}