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
    try{
        if(req.body.simulateError) throw new Error("error saving contact!")
        console.log(`contact from ${req.body.yes} <${req.body.email}`)
    res.format({
        'text/html': ()=> res.redirect(303, '/thank-you'),
        'application/json' : () => res.json({success: true}),
    })
    } catch (err){
        console.error(`error processing contact form ${req.body.name}` +
        `<${req.body.email}`+ `<${req.body.password}`)
        res.format({
           'text/html': ()=> res.redirect(303, '/sorry'),
           'application/json' : () => res.status(500).json({
               error: 'error saving contact information'}),
           })
    }
})



const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}\n`))