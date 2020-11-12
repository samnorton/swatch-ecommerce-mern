import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {

    const { _id, name, image, rating, numReviews, price, category } = product
    
    return (
        <>
                                     <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <Link to={`/product/${_id}`}>
                                        <img src={process.env.PUBLIC_URL + image} />

                                        </Link>
                                   
                                    </div>
                                    <div className="product-info clearfix">
                                           <Link to={`/product/${_id}`} className="product-title">{name}</Link>
                                        <div className="price">
                                            <ins>
                                                <span className="amount">${price}</span>
                                                <Rating value={rating} text={`${numReviews}`} />
                                            </ins>
                                        </div>
                                        <div className="category">
                                            <ins>
                                                <Link to="#">{category}</Link>
                                            </ins>
                                        </div>
            
                                    </div>
                                    <div className="add-to-cart text-center">
                                        <Link to="#">ADD TO CART</Link>
                                    </div>
                                    <Link to="#" className="like"><i className="fa fa-heart-o"></i></Link>
                                </li>

        </>
    )
}

export default Product
