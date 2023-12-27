const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())

const tours = [
    {id:0, name: 'nvl.154', email: 'nvl@gmail.com', phone: "123456789", gpa: 7.5, status: "Active"},
    {id:1, name: 'lht.1312', email: 'lht@gmail.com', phone: "23112311", gpa: 8.0, status: "Active"},
    {id:2, name: 'abc', email: 'abc@gmail.com', phone: "1231231", gpa: 4.0, status: "Active"},
    {id:3, name: 'deh', email: 'deh@gmail.com', phone: "123134543", gpa: 3.0, status: "Active"},
]

app.get('/api/tour', (req,res) => res.json(tours))

app.post('/api/tour', (req, res) => {

    const p = tours.find(p => p.id === parseInt(req.params.id))
    if(!p) return res.status(410).json({error : 'No such tour exists'})
    if(req.body.name) p.name = req.body.name
    if(req.body.email) p.email = req.body.email
    if(req.body.phone) p.phone = req.body.phone
    if(req.body.gpa) p.gpa = req.body.gpa
    if(req.body.status) p.status = req.body.status
    res.json({ success: true})

    students.unshift(newStudent);

})

app.put('/api/tour/:id', (req, res) => {
   const p = tours.find(p => p.id === parseInt(req.params.id))
   if(!p) return res.status(410).json({error : 'No such tour exists'})
   if(req.body.name) p.name = req.body.name
   if(req.body.email) p.email = req.body.email
   if(req.body.phone) p.phone = req.body.phone
   if(req.body.gpa) p.gpa = req.body.gpa
   if(req.body.status) p.status = req.body.status
   res.json({ success: true})
})

app.delete('/api/tour/:id', (req, res) => {
    const idx = tours.findIndex(tour => tour.id === parseInt(req.params.id))
    if(idx <0 ) return res.json({ error: 'No such tourn exists.'})
    tours.json({ success: true})
})

app.get('*', (req, res) => {
    res.send('check out <a href="/api/tour">Student</a>!')
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`\nnavigate to http://localhost:${port}/api/tour\n`))