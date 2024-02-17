# Cartoon E-commerce Web Application Readme

## Overview
Welcome to Cartoon E-commerce, an innovative web application that combines the convenience of online shopping with personalized product recommendations using collaborative filtering. This project features a user-friendly frontend powered by React and Material UI, while the backend leverages Express.js, MongoDB, and Flask for a seamless experience. Vendors can also manage their products and sales through the dedicated vendor functionalities.

## Features
- **User Frontend:**
  - www.cartoon.com
  - User registration and login using JWT and session management
  - Cart, checkout, and order tracking functionalities
  - Google Auth integration for signup and sign-in

- **Vendor Functionalities:**
  - www.sellatcartoon.com
  - Vendor registration and login using Google Auth
  - Vendor dashboard for managing products, orders, and sales performance
  - Product management: add, edit, and update product state (in transit, out for delivery, delivered)
  - Scheduling with a calendar for efficient order handling

- **Backend:**
  - API logic at api.cartoon.com
  - Express.js for routing, controllers, and MongoDB schema for efficient data management
  - Razorpay API integration for secure payment transactions
  - User authentication and password encryption using bcrypt.js
  - Google Auth for both user and vendor sign-up/sign-in

- **Recommendation System:**
  - Collaborative filtering-based recommendation system
  - ML model trained on more than 11 lakh user ratings
  - Flask API in ml.api folder to integrate the trained model with the front-end for personalized product recommendations

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Aayush-Joshi-01/Cartoon-ecommerce.git
   ```

2. **Install Dependencies:**
   ```bash
   cd Cartoon-ecommerce
   cd www.cartoon.com
   npm install # Install frontend dependencies
   cd ..
   cd www.sellatcaroon.com
   npm install # Install backend dependencies
   ```

3. **Database Setup:**
   - Configure MongoDB connection in the backend (controllers/routes/models).

4. **Run the Application:**
   ```bash
   # Start frontend
   cd Cartoon-ecommerce
   cd www.cartoon.com
   npm start

   # Start backend
   cd Cartoon-ecommerce
   cd www.sellatcaroon.com
   npm start
   ```

## Contributing
Feel free to contribute to the project by forking the repository and submitting pull requests. Please adhere to the project's coding standards and guidelines.

## License
This project is licensed under the [MIT License](LICENSE).
