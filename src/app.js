const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyparser = require('body-parser')
const _ = require('lodash')

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', viewspath)
app.set('view engine', 'hbs')
app.use(bodyparser.urlencoded( {extended: true} ))
app.use(require("body-parser").json())
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Personal Project'
    })
})

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Personal Project'
    })
})
app.get('/patient',(req, res) => {
    res.render('patient',{
    })
})

app.listen(port, () => {
    console.log('Server is up on Port ' + port)
})