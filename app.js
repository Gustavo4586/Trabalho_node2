require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const app = express()

app.use(express.json())





const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.xwazvha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(3000)
    console.log('conectado ao banco!')
}).catch((err) => console.log(err))

