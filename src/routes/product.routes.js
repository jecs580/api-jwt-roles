import { Router } from 'express'
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/product.controller'
import { authJwt } from '../middlewares'
const router = Router();

router.post('/',[authJwt.verifyToken, authJwt.isModerator], createProduct)
router.get('/', getProducts)
router.get('/:productId', getProductById)
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin],updateProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], deleteProductById)


export default router;