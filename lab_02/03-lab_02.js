const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()

//configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultlayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'));
const port = process.env.port || 3001

app.get('/', (req, res) => res.render('home'))

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "Whenever possible, keep it simple",
]
app.get('/about',(req,res)=>{
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
})
// custom 404 page
app.use((req, res)=> {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not found from LVM')
})
//custom 500 page
app.use((err, req, res, next)=> {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})
app.listen(port, () => console.log(
    `express started on http://localhost:${port};`
))