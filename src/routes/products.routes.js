const { Router } = require('express')
const { getAll, create, getOne, deleteOne, updateOne } = require('../controllers/product.controller')
const router = Router()

router.get('/', getAll)
router.post('/', create)
router.get('/:id', getOne)
router.patch('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router