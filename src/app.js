require('dotenv-safe').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())

const db = require('./database/mongoConnect')
db.connect()

const userRoutes = require('./routes/userRoutes')
app.use("/usuario", userRoutes)

const cadastroDeClienteRoutes = require('./routes/cadastroClienteRoutes')
app.use("/cadastroCliente", cadastroDeClienteRoutes)

const pedidoClienteRoutes = require('./routes/pedidoClienteRoutes')
app.use("/pedido", pedidoClienteRoutes)

const logisticaEnxovalRoutes = require('./routes/logisticaEnxovalRoutes')
app.use("/logisticaEnxoval", logisticaEnxovalRoutes)

module.exports = app