import React from 'react';
import ProductCard from '../components/productCard'
import '../styles/home.css'
const Home = ()=>{
    return(
        <div className='productCardContainer'>
           
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