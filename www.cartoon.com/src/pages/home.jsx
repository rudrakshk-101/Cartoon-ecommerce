import React from 'react';
import ProductCard from '../components/productCard'
import '../styles/home.css'
const Home = ()=>{
    return(
        <div className='productCardContainer'>
            <div className="backgroundUltra">
                <div className="circle1">

                </div>
                <div className="circle2">
                    
                </div>

            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <h1 className='recommendedH1'>Recommended for you</h1>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default Home;