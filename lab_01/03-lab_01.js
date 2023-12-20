const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express();

//
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.unsubscribe(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

const fortunes = [
    "Conquer your fear or they will conquer you.",
    "Rivers need springs",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]

app.get('/about', (req,res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render ('about', {fortune: randomFortune})
})

//custom 404 page
app.use((req, res)=> {
    res.status(404)
    res.render('404')
})

// custom 500 page
app.use((err, req, res, next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}`))