import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecentProducts from '../components/RecentProducts'
import PopularProducts from '../components/PopularProducts'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
    <div className="boxed"> 
         <Hero />
         <RecentProducts />
         <Advert />
         <PopularProducts />
     </div>
   </>
  );
}

export default App;
