import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import ProductMainDetail from '../components/ProductMainDetail'
import ProductSubDetail from '../components/ProductSubDetail'
import RelatedProducts from '../components/RelatedProducts'

const ProductDetail = () => {
    return (
        <>
            <HeaderTitle />
            <ProductMainDetail />
            <ProductSubDetail />
            <RelatedProducts />
        </>
    )
}

export default ProductDetail
