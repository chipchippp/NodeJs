const express = require('express')
const exphbs = require('express-handlebars').engine;
const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/custom-layout', (req, res)=>{res.render('no-layout', {layout: 'custom'})}) 


app.get('*' , (req, res) => {
    res.send('Check out our "<a href="/custom-layout">Custom layout</a>" page!')
})

const port = process.env.POST || 3000

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/custom-layout\n`))
