const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const fortune = require('./lib/fortune.js')
const app = express()
const port = process.env.port || 3000


//configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultlayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> res.render('home', {title: 'Home Page', message: 'Welcome to our website'}))
app.get('/about',(req,res)=>{
    res.render('about', {fortune: fortune.getFortune()})
})


//custom 404 page
app.use((req, res)=> {
    res.status(404).render('404', {title : '404 not found'})
})

// custom 500 page
app.use((err, req, res, next)=>{
    console.error(err.message)
    res.status(500).render('500', {title : '500 Internal Servel Error'})
})
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}`))