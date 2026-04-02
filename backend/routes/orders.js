const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, orderController.createOrder);
router.get('/myorders', auth, orderController.getMyOrders);
router.get('/', auth, admin, orderController.getAllOrders);

module.exports = router;
