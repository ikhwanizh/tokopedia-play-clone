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
    static async getProductsByVideoId(videoId) {
        try {
            const products = await ProductModel.find({videoId});
            return products;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async addProduct(title, price, productLink, videoId) {
        const id = generateId();
        try {
            const newProduct = await ProductModel.create({id, title, price, productLink, videoId});
            console.log('Product saved successfully!');
            return newProduct;
        }
        catch (err) {
            console.log(err);
        }
    }
}
function generateId() {
    return Math.floor(Math.random() * 1000000);
}

module.exports = ProductService;