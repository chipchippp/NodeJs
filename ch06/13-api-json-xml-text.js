const express = require('express')
const app = express() 
const tours = [
    { id: 0, name: 'Hood River', price: 99.99},
    { id: 1, name: 'Oregon Coast', price: 149.99},
]
app.get('/api/tours', (req, res) => {
    const toursXml = '<?xml version = "1.0"?><tours>' +
    tours.map(p => 
        `<tour price="${p.price}" id="${p.id}">${p.name}</tour>`
        ).join('') + '</tours>'
        const toursText = tours.map(p => 
            `${p.id}: ${p.name} (${p.price})`
            ).join('\n')
        res.format({
            'application/json' : () => res.json(tours),
            'application/xml' : () =>res.type('application/xml').send(toursXml),
            'text/xml': ()=> res.type('text/xml').send(toursXml),
            'text/plain': ()=> res.type('text/plain').send(toursXml),
        })
})



app.use('*' , (req, res) => {
    res.send('Check out our "<a href="/api/tours">Tours</a>" page!')
})

const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/api/tours\n`))
