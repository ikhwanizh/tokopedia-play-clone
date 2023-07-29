const ProductModel = require('../models/productModel');

class ProductService {
    static async getAllProducts() {
        try {
            const allProducts = await ProductModel.find();
            return allProducts;
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = ProductService;