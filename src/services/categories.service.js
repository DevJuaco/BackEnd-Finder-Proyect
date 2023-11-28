const CategoryModel = require('../models/Category')

async function registerCategory( newCategory ) {
    return await CategoryModel.create(newCategory)
}

async function getAllCategories() {
    return await CategoryModel.find()
}

async function getOneCategoryById(id) {
    return await CategoryModel.find({_id: id})
}

async function removeOneCategory(id) {
    return await CategoryModel.findOneAndDelete({_id: id})
}

async function updateOneCategoryById(id, updateCategory) {
    return await CategoryModel.findOneAndUpdate(
        {_id: id},
        updateCategory,
        {new: true}
    )
}

module.exports = {
    registerCategory,
    getAllCategories,
    getOneCategoryById,
    removeOneCategory,
    updateOneCategoryById
}