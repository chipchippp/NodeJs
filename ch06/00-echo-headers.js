const express = require('express')
const app = express()

app.get('/headers' , (req, res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key} : ${value}`)
    res.send(headers.join('\n'))
})

const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/headers\n`))