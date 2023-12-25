const express = require('express')
const app = express() 
const tours = [
    { id: 0, name: 'Hood River', price: 99.99},
    { id: 1, name: 'Oregon Coast', price: 149.99},
]
app.get('/api/tours', (req, res) => res.json(tours))
app.use('*' , (req, res) => {
    res.send('Check out our "<a href="/api/tours">Tours</a>" page!')
})

const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/api/tours\n`))
