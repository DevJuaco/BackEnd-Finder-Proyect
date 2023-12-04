const { hashSync, genSaltSync } = require('bcrypt')
const StoreModel =  require('../models/Store')

function registerStore(newStore) {
    const dbStore = new StoreModel(newStore)

    const salt = genSaltSync()
    dbStore.password = hashSync (newStore.password, salt)

    dbStore.save()
}

async function findStoreByStorename(mail) {
    return await StoreModel.findOne({mail}, {

        createdAt: 0,
        updatedAt: 0,
        __v: 0
    })
}

async function getOneStoreById(id) {
    return await StoreModel.findById(id)
}

module.exports = {
    registerStore,
    findStoreByStorename,
    getOneStoreById
}