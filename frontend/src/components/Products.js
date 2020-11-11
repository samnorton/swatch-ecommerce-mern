import React from 'react'
import Product from './Product'
import Pagination from './Pagination'
import products from '../products'

const Products = () => {
    return (
        <>
              <div className="col-md-9">
                        <div className="filter-shop clearfix">
                            <p className="showing-product float-right">
                                Showing 1–12 of 56 Products
                            </p>
                        </div>
                        <div className="product-content product-threecolumn product-slidebar clearfix">
                            <ul className="product style2 sd1">
                                { products.map(product => {
                                    return <Product product={product} />
                                })}
                                   
                            </ul>
                        </div>

                       <Pagination />
                    </div>

        </>
    )
}

export default Products
