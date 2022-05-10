const Router = require('express');
const { logger } = require('../utils/logger');
const { Product } = require('../models/product');
const { upload } = require('../utils/multer');
const products = Router();

products.post('/', async (req, res) => {
    try {
        const product = await Product.create({ ...req.body });
        res.status(201).json({
            message: 'Product created successfully',
            product
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating product',
            error: err
        });
    }
}
);

products.post('/upload', upload.single('file'), async (req, res) => {
    try {
        logger.info(`File uploaded: ${req.file.originalname}`);
        await Product.updateOne({ image: req.file.path });
        res.status(201).json({
            message: 'File uploaded successfully',
            file: req.file
        });
    } catch (err) {
        logger.error(`error: ${err}`);
        res.status(500).json({
            message: 'Error creating product',
            error: err
        });
    }
}
);



products.get('/', async (req, res) => {
    try {
        const allProducts = await Product.find();
        if (allProducts.length) {
            res.status(200).json({
                message: 'Products found',
                allProducts
            });
        } else {
            res.status(404).json({
                message: 'No products found'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error getting products',
            error: err
        });
    }
}
);


module.exports = { products };