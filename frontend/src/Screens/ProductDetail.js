import React, { useState, useEffect } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import ProductMainDetail from '../components/ProductMainDetail'
import ProductSubDetail from '../components/ProductSubDetail'
import RelatedProducts from '../components/RelatedProducts'
import products from '../products'
import axios from 'axios'


const ProductDetail = ({ match }) => {
	// const product = products.find((p) => p._id === match.params.id);
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
 
        fetchProduct()
     }, [match]);

    return (
        <>  
            <HeaderTitle />
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

export default ProductDetail
