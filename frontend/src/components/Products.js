import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
import Pagination from './Pagination'
import products from '../products'

const Products = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
       const fetchProducts = async () => {
           const { data } = await axios.get('/api/products')
           setProducts(data)
       }

       fetchProducts()
    }, []);

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
