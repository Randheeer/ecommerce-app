const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  const { products } = req.body;
  try {
    let total = 0;
    const orderProducts = [];
    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).json({ msg: `Product ${item.productId} not found` });
      if (product.stock < item.quantity) return res.status(400).json({ msg: `Insufficient stock for ${product.name}` });
      total += product.price * item.quantity;
      orderProducts.push({ product: product._id, quantity: item.quantity });
    }
    const order = new Order({ user: req.user.id, products: orderProducts, total });
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('products.product');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
