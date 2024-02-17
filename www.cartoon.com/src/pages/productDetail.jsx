import React,{useEffect, useState} from 'react';
import '../styles/productDetail.css';
import Gallery from "./productDetailComponents/Gallery";
import Description from "./productDetailComponents/Description";
import MobileGallery from "./productDetailComponents/MobileGallery";
import {useParams} from 'react-router-dom';

function ProductDetail() {
    const [quant, setQuant] = useState(0);
    const {productId} = useParams();
  
    const [array,setArray] = useState({});

    let xyz = async() => {
      console.log(productId);
      const response = await fetch('http://localhost:4500/api/product/findByProductId',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({productId})
      });
      const data = await response.json();
      console.log(data);
      setArray(data);
    }

    useEffect(() => {
      xyz();
    },[])

    const addQuant = () => {
      setQuant(quant + 1);
    };
  
    const removeQuant = () => {
      setQuant(quant - 1);
    };
    return (
      <main className="App">
        <div className="backgroundUltra">
                <div className="circle1">

                </div>
                <div className="circle2">
                    
                </div>

            </div>
          {/* <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} /> */}
          <section className="core">
            <Gallery image={array.image} />
            <MobileGallery image={array.image} />
            <Description
              onQuant={quant}
              onAdd={addQuant}
              onRemove={removeQuant}
              title={array.title}
              brand={array.brand}
              description={array.description} 
              price={array.price}
              discount={array.discount}
            />
          </section>
      </main>
    );
  }
  
  export default ProductDetail;