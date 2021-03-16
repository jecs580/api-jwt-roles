import { Router } from 'express'
import { createUser, getUsers } from '../controllers/user.controller'
import {authJwt} from '../middlewares'
const router = Router();


router.get('/',[authJwt.verifyToken, authJwt.isAdmin],getUsers)

export default router