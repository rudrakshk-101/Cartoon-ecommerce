import React from 'react';
import ProductCard from '../components/productCard'
<<<<<<< HEAD
import RecommendSection from '../components/RecommendSection';
import ApparelSection from '../components/ApparelSection';
import ElectronicSection from '../components/ElectronicSection';
import BookSection from '../components/BookSection';
import GrocerySection from '../components/GrocerySection';

const Home = ()=>{
    return(
        <div className='productCardContainer'>
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
=======
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
>>>>>>> c067a63a05e3dc718d90213682eaf227e7cf4795
        </div>
    )
}

export default Home;