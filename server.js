//Basically a file to configure Express.js
// const router = require('./router')
const express = require('express')

const app = express()

//To access the data user inputs in form.
app.use(express.urlencoded({extended: false}))
//just a bolierplate code, tells our express server to add the user submitted data to request object.
app.use(express.json())

app.use(express.static('public'))
//We are telling our express server to make the folder accessible.
//in public folder there are all the files who that we want to show all the visitors of our app. (css, browser.js, etc)
app.set('views', 'views')
//a has to be views, it is an express option(views configeration).b is the folder created for our views.
app.set('view engine', 'ejs') //EJS (Embedded JavaScript Templating)
//The template system we are using is ejs. There are many different options in javascript community
//npm install ejs

app.listen(4000)
console.log("listening...")


app.get('/',  function(req, res){
    res.render('dashboard')
})

// app.get('/create', function(req, res){
//     res.render('create')
// })

// app.get('/create-blog', function(req, res){
//     // console.log(req.body)
//     res.send('get request !')
// })

// app.post('/create-blog', function(req, res){
//     console.log(req.body)
//     res.send('created !')
// })

// module.exports = app