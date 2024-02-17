import React from "react";
import CartIcon from "../Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({ onQuant, onAdd, onRemove,title , description, price, discount,brand}) => {
  return (
    <section className="description" style={{
      marginRight: '5vw'
    }}>
      <p className="pre">{brand}</p>
      <h1 className="text-white" style={{color: 'white'}}>{title}</h1>
      <p className="desc">
        {description}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>₹{Math.floor(price-(discount/100*price)).toFixed(2)}</p>
          <p>-{discount}%</p>
        </div>
        <s>₹{parseInt(price).toFixed(2)}</s>
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
