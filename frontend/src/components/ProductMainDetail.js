import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import imgProduct from '../assets/images/sample-product.jpg'


const ProductMainDetail = ({ product }) => {
    const { name, image, description, price, category, brand, rating, numReviews, countInStock } = product;
	return (
        <>
    	<section className="flat-row main-shop shop-detail">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    	<div className="wrap-flexslider">
                    		<div className="inner">
                    			<div className="flexslider style-1 has-relative">
		                    		<div className="slides">
									    <img src={imgProduct} />
		                            </div>                           
		                        </div>
                    		</div>
                    	</div>		                        
                    </div>

                    <div className="col-md-6">
                        <div className="product-detail">
                        	<div className="inner">
                        		<div className="content-detail">
                        			<h2 className="product-title">{ name }</h2>
                                    <Rating value={rating} text={`${numReviews}`} />
	                                 <p>{description}</p> 
                        			<div className="price">
                        				<ins><span className="amount">${price}</span></ins>
										<span class="ml-2">{countInStock > 0 ? 'In stock' : 'Out of stock'}</span>
                        			</div>

                        			<div className="product-quantity">
                        				<div className="quantity">
                        					<input type="number" value="1" name="quantity-number" className="quantity-number" />
                        					<span className="inc quantity-button">+</span>
                        					<span className="dec quantity-button">-</span>
                        				</div>
                        				<div className="add-to-cart">
                        					<button type="button" disabled={countInStock === 0}>ADD TO CART</button>
                        				</div>
                        				<div className="box-like">
                        					<a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                        				</div>
                        			</div>
                        			<div className="product-categories">
                        				<span>Category: </span><a href="#">{category}</a>
                        			</div>
                        			<div className="product-tags">
                        				<span>Brand: </span><a href="#">{brand}</a> 
                        			</div>
                        			<ul className="flat-socials">
                        				<li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        				<li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        				<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        				<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        				<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        			</ul>
                        		</div>
                        	</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default ProductMainDetail
