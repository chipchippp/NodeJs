const express = require('express')
const exphbs = require('express-handlebars');
const fortune = require('./lib/fortune.js')
const app = express()

// configure Handlebars view engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=> res.render('home', {title: 'Home Page', message: 'Welcome to our website'}))
app.get('/about', (req, res)=> res.render('about', {fortune: fortune.getFortune()}))


//custom 404 page
app.use((req, res)=> {
    res.status(404).render('404')
})

// custom 500 page
app.use((err, req, res, next)=>{
    console.error(err.message)
    res.status(500).render('500')
})

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}`))