const express = require('express')
const app = express()

app.disable('x-powered-by')

app.get('*' , (req, res) => {
   res.send(`Open your dev....; ` + `you'll notice there is....`)
})

const port = process.env.POST || 3000
app.listen(port, () => console.log(
    `\n navigate to http://localhost:${port}\n`))