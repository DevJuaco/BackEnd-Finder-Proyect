const {Router} = require('express')
const { searchProduct } = require('../controllers/product-search.controller')
const router = Router()

router.get('/:term', searchProduct)

module.exports = router