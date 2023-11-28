const { Router } = require('express')
const {getCategories, getCategoryById, createCategory, removeCategory, updateCategory} = require('../controllers/categories.controller')
const { authUser } = require('../middlewares/user-validation.middleware')

const router = Router()

router.get( '/', getCategories);
router.get( '/:id', getCategoryById );
router.post( '/', authUser, createCategory );
router.delete( '/:id', authUser, removeCategory );
router.patch( '/:id', authUser, updateCategory );

module.exports = router