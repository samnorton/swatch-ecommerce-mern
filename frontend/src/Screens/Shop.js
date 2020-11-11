import React from 'react'
import Sidebar from '../components/Sidebar'
import HeaderTitle from '../components/HeaderTitle'
import Products from '../components/Products'

const Shop = () => {
    return (
        <>
        <HeaderTitle />
        <section className="flat-row main-shop shop-slidebar">
        <div className="container">
            <div className="row">
               <Sidebar />
               <Products />
        </div>
        </div>
        </section>
        </>
    )
}

export default Shop
