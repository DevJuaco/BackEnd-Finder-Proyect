const mongoose = require('mongoose')

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('base de datos inicializada correctamente');
    } catch (error) {
        console.error(error)
        throw new Error ('error al inicializar la base de datos')
    }
}

module.exports = {
    dbConection
};