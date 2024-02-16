import React from "react";
import CartIcon from "../Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({ onQuant, onAdd, onRemove,title , description, price, discount}) => {
  return (
    <section className="description">
      <p className="pre">Cartoon.com</p>
      <h1>{title}</h1>
      <p className="desc">
        {description}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>₹{price-(discount/100)*price}</p>
          <p>-{discount}%</p>
        </div>
        <s>₹{price}</s>
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
