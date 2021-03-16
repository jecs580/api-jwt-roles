import { Router } from 'express'
import { signin,signup } from '../controllers/auth.controller'
import { verifySignUp } from '../middlewares'
const router = Router();

router.post('/signup',[verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExist],signup)
router.post('/signin',signin)

export default router