import React from 'react';

const CheckoutCard=()=>{

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




    return(
        <div>
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
        </div>
    )
}

export default CheckoutCard;