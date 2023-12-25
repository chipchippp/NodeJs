const bodyParser = require('body-parser');
const express = require('express')
const exphbs = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/thank-you', (req, res)=>{
    res.render('11-thank-you')
}) 

app.get('/contact-error', (req, res)=>{
    res.render('11-contact-error')
}) 

app.get('*', (req, res)=>{
    res.render('11-home')
}) 

app.post('/process-contact', (req, res)=>{

    try{
        if(req.body.simulateError) throw new Error("error saving contact!")
        console.log(`contact from ${req.body.name} <${req.body.email}`)
    res.format({
        'text/html': ()=> res.redirect(303, '/thank-you'),
        'application/json' : () => res.json({success: true}),
    })
    } catch(err){
        console.error(`error processing contact form ${req.body.name}` +
         `<${req.body.email}`)
         res.format({
            'text/html': ()=> res.redirect(303, '/contact-error'),
            'application/json' : () => res.status(500).json({
                error: 'error saving contact information'}),
            })
    }
})

const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}\n`))
