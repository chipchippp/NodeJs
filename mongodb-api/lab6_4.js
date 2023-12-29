const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

// kết nối mongo
mongoose.connect('mongodb://localhost:27017/crud')

// định nghĩa schema cho sp
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number
})

// tạo mô hình product từ Schema
const Product = mongoose.model('Product', productSchema);

//sử dụng body-parser để parse data từ request
app.use(bodyParser.json());

// Routes

//Get all products
app.get('/api/products', async(req, res) =>{
    try{
        const products = await Product.find();
        res.json(products)
    } catch(error){
        res.status(500).json({error: error.message});
    }
});

//Get a specific product by ID
app.get('/api/products/:id', async(req, res) =>{
    try{
        const product = await Product.findByID(req.params.id);
        if(!product){
            return res.status(404).json({ error: 'Product not found'})
        }
        res.json(product)
    } catch(error){
        res.status(500).json({error: error.message});
    }
});

// create a new product
app.post('/api/products', async(req, res) =>{
    const {name, price, qty} = req.body;
    try{
        const newProduct = new Product({name, price, qty})
        const savedProduct = await newProduct.save();
        res.json(savedProduct)
    } catch(error){
        res.status(500).json({error: error.message});
    }
});

// Update a product by ID
app.put('/api/products/:id', async(req, res) =>{
    const{name, price, qty} = req.body;
    try{

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {name, price, qty},
            {new: true}
        );
        if(!updatedProduct){
            return res.status(404).json({ error: 'Product not found'})
        }
        res.json(updatedProduct)
    } catch(error){
        res.status(500).json({error: error.message});
    }
});

// Delete
app.delete('/api/products/:id', async(req, res) =>{
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            return res.status(404).json({ error: 'Product not found'})
        }
        res.json(deletedProduct)
    } catch(error){
        res.status(500).json({error: error.message});
    }
});


app.listen(port, () => console.log(
    `Server started on http://localhost:${port}/api/products`))