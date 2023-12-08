const express=require("express")

const router = require("./Router/Router")
const connection = require("./Config/Mongo")
const dotenv=require("dotenv")
const cors=require("cors")
connection()
const app=express()


app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.use("/",router)



dotenv.config()





port=4000
app.listen(port,console.log("4000"))