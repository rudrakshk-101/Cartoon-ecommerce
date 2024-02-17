import React from "react";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = ({ item, showButton }) => {
  const handleRemoveItemFromCart = () => {
    // Function to remove item from cart (you can customize this as per your requirements)
    console.log("Item removed from cart:", item);
  };

  const handleUpdateCartItem = (num) => {
    // Function to update cart item (you can customize this as per your requirements)
    console.log("Item updated in cart:", item, "New quantity:", item.quantity + num);
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zMXrNvkA8Q13O9RFLBDQXYkZlj40xuUgrg&usqp=CAU" // Hardcoded image URL
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Product Title</p>
          <p className="opacity-70">Size: xxl, White</p>
          <p className="opacity-70 mt-2">Seller: goocci</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹88000</p>
            <p className="font-semibold text-lg">₹88 00</p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item.quantity <= 1}
              color="primary"
              aria-label="decrease quantity"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
            <IconButton
              onClick={() => handleUpdateCartItem(1)}
              color="primary"
              aria-label="increase quantity"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button onClick={handleRemoveItemFromCart} variant="text">
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
