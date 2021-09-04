//npm init
//Local installation of express Framework NOT Global
//npm i express
 
const express = require("express")
const path = require("path")
const hbs = require("hbs")
// For Hosting process.env.PORT
const port = process.env.PORT || 8000
const app = express()


//console.log(path.join(__dirname,"../views"))
const sPath = path.join(__dirname,"../public")
app.set("view engine","hbs")
app.use(express.static(sPath))
const vpath = path.join(__dirname,"../templates/views")
const pPath = path.join(__dirname,"../templates/partials")
app.set("views", vpath)
hbs.registerPartials(pPath)
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error")
})
app.listen(port,"127.0.0.1",()=>{
    console.log(`Listening to Port ${port}`)
})