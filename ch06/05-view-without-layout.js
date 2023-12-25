const express = require('express')
const exphbs = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/no-layout', (req, res)=>{res.render('no-layout', {layout: null})}) 


app.get('*' , (req, res) => {
    res.send('Check out our "<a href="/no-layout">No layout</a>" page!')
})

const port = process.env.POST || 3000

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/no-layout\n`))
