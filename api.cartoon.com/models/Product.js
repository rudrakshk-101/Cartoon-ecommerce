const mongoose = require('mongoose');

// Define the review subdocument schema
const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId // Generates new ObjectId
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
});

// Define the main product schema
const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: false,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  inventory: {
    type: Number
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor', // Reference to the Vendor model
  },
  brand: {
    type: String
  },
  category: {
    type: String,
    enum: ['book', 'grocery', 'apparel', 'electronics']
  },
  keywords: {
    type: [String]
  },
  rating: {
  },
  reviews: [reviewSchema], // Embedding the review subdocument schema
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;