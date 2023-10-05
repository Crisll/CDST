const express = require("express")

const app = express()

const port = 3700

app.listen(port,()=>{
    console.log("Estamos en conexión")
})

const userRouters = require ("./routes/user")

app.use(userRouters)

const mongoose = require ("mongoose")
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/UF1845E2", {
    useNewUrlParser: true,
})
.then(()=>{
    console.log("En línea")
})
.catch(err => console.log(err))