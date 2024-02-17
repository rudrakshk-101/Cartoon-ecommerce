import React from 'react';
import ProductCard from '../components/productCard'
import RecommendSection from '../components/RecommendSection';
import ApparelSection from '../components/ApparelSection';
import ElectronicSection from '../components/ElectronicSection';
import BookSection from '../components/BookSection';
import GrocerySection from '../components/GrocerySection';
import HomeCarousel  from './crousal/HomeCarousel';

const Home = ()=>{
    return(
        <div className='productCardContainer'>
            <HomeCarousel />
            
            <RecommendSection />
            <ApparelSection />
            <ElectronicSection />
            <BookSection />
            <GrocerySection />
        </div>
    )
}

export default Home;