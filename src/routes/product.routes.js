import { Router } from 'express'
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/product.controller'
const router = Router();

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:productId', getProductById)
router.put('/:productId', updateProductById)
router.delete('/:productId', deleteProductById)


export default router;