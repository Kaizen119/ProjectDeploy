const ProductController = require('../controllers/products.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.put('/api/products/update/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}