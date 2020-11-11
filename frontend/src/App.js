import React from 'react'
import Header from './components/Header'
import Shop from './Screens/Shop'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className="boxed"> 
     <Header />
         <Shop />
       <Footer />
     </div>
   </>
  );
}

export default App;
