// Additional Database integration configuration  required 


require('dotenv').config();
const PORT = 8080
const express = require ('express')
const bodyParser = require('body-parser')
var favicon = require('serve-favicon')
var path = require('path')
var app = express()
// const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ejs = require('ejs')
// mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true})
bodyParser.urlencoded({extended: true})
app = express();
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.set('view engine', 'ejs')
app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/gallery', (req, res)=> {
    res.render('gallery')
})

app.get('/about_services', (req, res)=>{
    res.render('about_services')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('tobadeyDevelopmentServer running @ PORT:: ['+PORT+ ']')
})

