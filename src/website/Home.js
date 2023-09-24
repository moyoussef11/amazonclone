import React from 'react';
import Hero from '../Components/Hero';
import Products from '../Components/products/Products';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
      <div className="relative bg-slate-100">
        <Hero />
        <div className='-mt-20'>
          <Products />
        </div>
<Footer/>
      </div>
    );
}
    
export default Home;