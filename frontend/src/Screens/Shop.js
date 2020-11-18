import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../components/Sidebar'
import HeaderTitle from '../components/HeaderTitle'
import Products from '../components/Products'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Message'

const Shop = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])



    return (
        <>
        <HeaderTitle />
        <section className="flat-row main-shop shop-slidebar">
        <div className="container">
            <div className="row">
            { loading ? 
               ( <Loader /> )
               : error ? (
               <Message variant='danger'>{error}</Message>
               ) : (
                <>
                <Sidebar /> 
                <Products products={products} />
                </>
                )
               
    }
        </div>
        </div>
        </section>
        </>
    )
}

export default Shop
