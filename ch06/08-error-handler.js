const express = require('express')
const exphbs = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/bad-bad-not-good', (req, res)=>{
    throw new Error("that didn't go well!")
}) 

app.get('*' , (req, res) => {
    res.send('08-click-here')
})

app.use((err, req, res, next) => {
    console.error('** SERVER ERROR: ' + err.message)
    res.status(500).render('08-error', {message: "you shouldn't have clicked that !"})
})

const port = process.env.POST || 3000

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}\n`))
