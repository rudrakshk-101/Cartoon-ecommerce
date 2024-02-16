import React from "react";
import CartIcon from "../Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({ onQuant, onAdd, onRemove}) => {
  return (
    <section className="description">
      <p className="pre">Cartoon.com</p>
      <h1>"fall" limited edition sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <div className="main-tag">
          <p>₹125000.00</p>
          <p>50%</p>
        </div>
        <s>₹250000.00</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            // onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;
