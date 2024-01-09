const express = require('express')
const blogRouter = require('../routes/BlogRoutes')
const app = express();


// middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, ()=>{
    console.log(`Server started on http://localhost:3001/api/blogs`)
})

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost:27017/crud");

module.exports = app;
