import React,{useState} from 'react';
import '../styles/productDetail.css';
import Gallery from "./productDetailComponents/Gallery";
import Description from "./productDetailComponents/Description";
// import MobileGallery from "./productDetailComponents/MobileGallery";

function ProductDetail() {
    const [quant, setQuant] = useState(0);
    // const [orderedQuant, setOrderedQuant] = useState(0);
  
    const addQuant = () => {
      setQuant(quant + 1);
    };
  
    const removeQuant = () => {
      setQuant(quant - 1);
    };
  
    // const resetQuant = () => {
    //   setQuant(0);
    //   setOrderedQuant(0);
    // };
    return (
      <main className="App">
          {/* <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} /> */}
          <section className="core">
            <Gallery />
            <MobileGallery />
            <Description
              onQuant={quant}
              onAdd={addQuant}
              onRemove={removeQuant}
            //   onSetOrderedQuant={setOrderedQuant}
            />
          </section>
      </main>
    );
  }
  
  export default ProductDetail;