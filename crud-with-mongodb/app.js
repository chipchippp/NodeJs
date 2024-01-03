const express = require('express')
const blogRouter = require('./routes/BlogRoutes')
const app = express();
const port = 3000;

// middleware

app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, ()=>{
    console.log(`Server started on http://localhost:3001/api/blogs`)
})

const mongoose = require('mongoose')
//
// mongoose.connect("mongodb://localhost:27017/crud",
//     (err) => {
//         if(err){
//             console.log(err);
//         } else{
//             console.log("Connected to MongoDB");
//         }
//     }
// );
mongoose.connect('mongodb://localhost/crud')
  .then(() => {
    console.log('Đã kết nối đến MongoDB');
  })
  .catch((err) => {
    console.error('Lỗi kết nối đến MongoDB:', err);
  });
module.exports = app;

// app.listen(port, () =>
// console.log(`Server started on http://localhost:${port}/api/blogs`))