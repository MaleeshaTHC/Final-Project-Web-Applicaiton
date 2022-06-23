const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ApiFeatures = require('../utils/apifeatures')

//create product-->Admin
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            product
        })
    }
)

//get all products
exports.getAllProducts = catchAsyncErrors(
    async (req, res) => {
        const resultPerPage = 5
        const productCount = await Product.countDocuments()
        const apiFeature = new ApiFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(resultPerPage)
        const product = await apiFeature.query
        res.status(200).json({
            success: true,
            product})
    }
)

//get product details
exports.getProductDetails = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id)
        if(!product) {
            return next(new ErrorHandler('Product not Found!', 404))
        }
        res.status(200).json({
            success: true,
            product,
            productCount
        })
    }
)

//update products-->Admin
exports.updateProduct = catchAsyncErrors(
    async (req, res, next) => {
        let product = await Product.findById(req.params.id)
        if(!product) {
            return next(new ErrorHandler('Product not Found!', 404))
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
)

//delete product-->Admin
exports.deleteProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id)
        if(!product) {
            return next(new ErrorHandler('Product not Found!', 404))
        }
        await product.remove()
    
        res.status(200).json({
            success: true,
            message: 'Product deleted'
        })
    }
)