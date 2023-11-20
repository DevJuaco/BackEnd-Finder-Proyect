const { dbConection } = require('./config/mongo.config')

require('dotenv').config()

const 
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 4000,
    cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/products.routes'))

dbConection();

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
})