import express, { json } from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/product.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
const app = express()

app.set('pkg',pkg)
app.use(morgan('dev'));


app.get('/',(req,res)=>{
    console.log('hola');
    return res.status(200).json({
        name:app.get('pkg').name,
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    })
})

app.use('/products',productsRoutes)
app.use('/auth',authRoutes)
app.use('/users',userRoutes)
export default app;