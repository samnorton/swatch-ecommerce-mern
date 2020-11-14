import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import ProductMainDetail from '../components/ProductMainDetail'
import ProductSubDetail from '../components/ProductSubDetail'
import RelatedProducts from '../components/RelatedProducts'
import products from '../products'


const ProductDetail = ({ match }) => {
	const product = products.find((p) => p._id === match.params.id);

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
