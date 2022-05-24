const Product = require('../models/productModel')

//create product-->Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

//get all products
exports.getAllProducts = async (req, res) => {
    const product = await Product.find()
    res.status(200).json({
        success: true,
        product})
}

//get product details
exports.getProductDetails = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not Found'
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}

//update products-->Admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if(!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not Found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: true, 
        useFindModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
}

//delete product-->Admin
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not Found'
        })
    }
    await product.remove()

    res.status(200).json({
        success: true,
        message: 'Product deleted'
    })
}