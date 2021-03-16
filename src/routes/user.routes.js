import { Router } from 'express'
import { createUser, getUsers } from '../controllers/user.controller'
import {authJwt,verifySignUp} from '../middlewares'
const router = Router();

router.post('/',[authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExist],createUser)
router.get('/',getUsers)

export default router