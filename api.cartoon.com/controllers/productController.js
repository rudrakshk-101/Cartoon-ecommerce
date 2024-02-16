const Product = require('../models/Product');

const productController = {};

productController.addProduct = async (req,res) => {
    try
    {
    const {
        title,
        price,
        description,
        image,
        discount,
        inventory,
        brand,
        category,
        keywords,
        vendorId
    } = req.body;
    //
    const keywordsArray = keywords.split(',');
    const newProduct = new Product({
        title,
        price,
        description,
        image,
        discount,
        inventory,
        brand,
        vendor:vendorId,
        category,
        keywords: keywordsArray,
    });
    await newProduct.save();
    return res.status(201).json({
        message: "Product added successfully"
    });
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

productController.findByVendor = async (req,res) => {
    try
    {
    const vendor = req.body.vendor;
    const list = await Product.find({vendor: vendor});
    return res.status(200).json(list);
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"})
    }
}

productController.findByProductId = async (req,res) => {
    const {productId} = req.body;
    const product = await Product.find({productId: productId});
    return res.status(200).json(product);
}

module.exports = productController;