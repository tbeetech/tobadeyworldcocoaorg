require('dotenv').config();
const PORT = 8080 || process.env.PORT
const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ejs = require('ejs')
mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true})
bodyParser.urlencoded({extended: true})
app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})
app.listen(PORT, ()=>{
    console.log('tobadeyDevelopmentServer running @ PORT:: ['+PORT+ ']')
})