import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderTitle from '../components/HeaderTitle'
import ProductMainDetail from '../components/ProductMainDetail'
import ProductSubDetail from '../components/ProductSubDetail'
import RelatedProducts from '../components/RelatedProducts'
import Message from '../components/Message'
import Loader from '../components/Message'
import { listProductDetails, listProducts } from '../actions/productActions'


const ProductDetail = ({ match }) => {
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
     }, [dispatch, match]);


    return (
        <>  
            <HeaderTitle />

            { loading ? 
               ( <Loader /> )
               : error ? (
               <Message variant='danger'>{error}</Message>
               ) : (
            <>
            <ProductMainDetail product={product}/>
            <ProductSubDetail 
               image={product.image}
               additionalDescription={product.additionalDescription}
               weight={product.weight}
               color={product.color}
               material={product.material}
            />
            <RelatedProducts />
            </>
            )
        }
        </>
    )
}

export default ProductDetail
