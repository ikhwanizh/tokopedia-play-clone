const ProductService = require('../services/productService');

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const allProducts = await ProductService.getAllProducts();
            res.status(200).json(allProducts);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = ProductController;