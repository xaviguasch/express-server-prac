const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

app.get('/contact', function (req, res) {
    res.send('<h2>Contact me at xaviguasch@gmail.com</h2>')
})

app.get('/about', function (req, res) {
    res.send('<p>This is a quick bio of who I am for practice purposes, yeah</p>')
})

app.get('/hobbies', function (req, res) {
    res.send('<p>A lot of hobbies</p>')
})

app.listen(3000, function () {
    console.log('server started on port 3000');
})