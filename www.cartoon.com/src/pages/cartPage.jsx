import React, { useState } from "react";
import '../styles/cartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dingo Dog Bones",
      description:
        "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 2,
      image: "https://s.cdpn.io/3/dingo-dog-bones.jpg",
    },
    {
      id: 2,
      name: "Nutro™ Adult Lamb and Rice Dog Food",
      description:
        "Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!",
      price: 45.99,
      quantity: 1,
      image:
        "https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.05;
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 0 ? 15.0 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  return (
    <div className="shopping-cart">
      {/* <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
      </div> */}

      {cartItems.map((item) => (
        <div className="product" key={item.id}>
          <div className="product-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="product-details">
            <div className="product-title">{item.name}</div>
            <p className="product-description">{item.description}</p>
          </div>
          <div className="product-price">{item.price}</div>
          <div className="product-quantity">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
          <div className="product-line-price">{(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}

      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">
            {calculateSubtotal().toFixed(2)}
          </div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">
            {calculateTax().toFixed(2)}
          </div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">
            {calculateShipping().toFixed(2)}
          </div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">
            {calculateTotal().toFixed(2)}
          </div>
        </div>
      </div>

      <button className="checkout">Checkout</button>
    </div>
  );
};

export default CartPage;
