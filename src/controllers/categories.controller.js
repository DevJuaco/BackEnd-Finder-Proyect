const {registerCategory, removeOneCategory, updateOneCategoryById, getAllCategories, getOneCategoryById} = require('../services/categories.service')

const getCategories = async (req, res) => {
    try {
        const data = await getAllCategories()
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener todas las categorias'
        })
    }
}

const getCategoryById = async (req, res) => {
    const category_id = req.params.id

    try {
        const data = await getOneCategoryById(category_id)

        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener una categoria por id'
        })
    }
}

const createCategory = async (req, res) => {
    const inputData = req.body

    try {
        const data = await registerCategory(inputData)

        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al crear la categoria'
        })
    }
}

const removeCategory = async (req, res) => {
    const category_id = req.params.id

    try {
        const data = await removeOneCategory(category_id)

        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al eliminar la categoria'
        })
    }
}

const updateCategory = async (req, res) => {
    const category_id = req.params.id
    const inputData = req.body

    try {
        const data = await updateOneCategoryById(category_id, inputData)

        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al actualizar la categoria'
        })
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    removeCategory,
    updateCategory
}