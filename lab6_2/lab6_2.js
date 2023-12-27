const express = require('express')
const exphbs = require('express-handlebars').engine;
const bodyParser = require('body-parser');
const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/thank-you', (req, res) => {
    res.render('thank-you')
})
app.get('/sorry', (req, res) => {
    res.render('sorry')
})

app.get('*', (req, res) =>{
    res.render('feedback')
})

app.post('/process-feedback', (req, res) =>{
    console.log(req.body.yes);
    if (req.body.yes == 'yes') {
        res.redirect(303, '/thank-you')
    } else {
        res.redirect(303, '/sorry')
    }
})



const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}\n`))