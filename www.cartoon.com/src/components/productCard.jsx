import React, { useEffect, useRef } from 'react';
import '../styles/productCard.css';


const ProductCard = () => {
  const cardRef = useRef(null); 
  useEffect(() => {
    const $card = cardRef.current;
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      $card.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }

    const handleMouseEnter = () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      $card.style.transform = '';
      $card.querySelector('.glow').style.backgroundImage = '';
    };

    $card.addEventListener('mouseenter', handleMouseEnter);
    $card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      $card.removeEventListener('mouseenter', handleMouseEnter);
      $card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); 
  return (
    <div ref={cardRef} className="card">
      <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/87600cfa-b9c3-4901-bec2-7faa0ddffec2/air-max-270-shoes-rtZHHP.png" alt="" />


        <div className="cardTitle">Home Grocery Needs</div>
        <div className="priceArea">
        <div className="cardPrice">2800/-</div>
        <div className="cardDiscount">-30% OFF</div>
        </div>
        <div className="reviewStars">
        ⭐ 5.0  
        </div>
        





      <div className="glow" />
    </div>
  );
};

export default ProductCard;
