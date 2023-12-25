const express = require('express')
const app = express()

app.get('/text', (req, res)=>{
    res.type('text/plain')
    res.send('this is a test')
}) 


app.get('*' , (req, res) => {
    res.send('Check out our "<a href="/text">Text</a>" page!')
})

const port = process.env.POST || 3000

app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/text\n`))
