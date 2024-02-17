import React from 'react';
import ProductCard from '../components/productCard'
import RecommendSection from '../components/RecommendSection';
import ApparelSection from '../components/ApparelSection';
import ElectronicSection from '../components/ElectronicSection';
import BookSection from '../components/BookSection';
import GrocerySection from '../components/GrocerySection';
import SwiperComponent from '../components/swiperComponent';

const Home = ()=>{
    return(
        <div className='productCardContainer'>
            <SwiperComponent />
            <div className="productCardBg">
                <div className="circle orange-circle"></div>
                <div className="circle navy-circle"></div>
                <div className="content"></div>
            </div>
            <RecommendSection />
            <ApparelSection />
            <ElectronicSection />
            <BookSection />
            <GrocerySection />
        </div>
    )
}

export default Home;