import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Screens/Home'
import Shop from './Screens/Shop'
import ProductDetail from './Screens/ProductDetail'
import Footer from './components/Footer'
import Products from './components/Products'

const App = () => {
  return (
    <Router>
    <div className="boxed"> 
     <Header />
         <Route path='/' component={Home} exact />
         <Route path='/Shop' component={Shop} exact />
         <Route path='/product/:id' component={ProductDetail} />
       <Footer />
     </div>
   </Router>
  );
}

export default App;
