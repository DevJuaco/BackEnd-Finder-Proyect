const { Router } = require('express')
const { getAll, create, getOne, deleteOne, updateOne } = require('../controllers/product.controller')
const { authUser } = require('../middlewares/user-validation.middleware')
const router = Router()

router.get('/', getAll)
router.post('/', authUser, create)
router.get('/:id', getOne)
router.patch('/:id', authUser, updateOne)
router.delete('/:id', authUser, deleteOne)

module.exports = router;