import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


const MyProducts = () => {
  const [array,setArray] = useState([]);
  let xyz = async() => {
    const response = await fetch('http://localhost:4500/api/product/findByVendor',
    {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({vendor: localStorage.getItem('vendorId')}),
    });
    const data = await response.json();
    setArray(data);
    console.log(data);
  }
  useEffect(()=> {
    xyz();
  },[])
  return (
    <div className='card-container'>
      {array.map(({productId,title,image,price,discount,brand,reviews}) => 
        <Card
          img={image}
          key={productId}
          title={title}
          reviews={`(${reviews.length} Reviews)`}
          company={brand}
          prevPrice={price}
          newPrice={`${price - (price * discount / 100)} Rs.`}
        />
      )}
    </div>
  )
}

export default MyProducts