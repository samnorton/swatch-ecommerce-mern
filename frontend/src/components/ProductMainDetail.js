import React from 'react'

const ProductMainDetail = () => {
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
		                                <div data-thumb="images/shop/sh-detail/thumb-detail-01.jpg">
		                                    <img src="images/shop/sh-detail/detail-01.jpg" />
                                            <div className="flat-icon style-1">
                                                <a href="images/shop/sh-detail/detail-01.jpg" className="zoom-popup"><span className="fa fa-search-plus"></span></a>
                                            </div> 
		                                </div>
		                              
		                            </div>                           
		                        </div>
                    		</div>
                    	</div>		                        
                    </div>

                    <div className="col-md-6">
                        <div className="product-detail">
                        	<div className="inner">
                        		<div className="content-detail">
                        			<h2 className="product-title">Best Woolen T-Shirt</h2>
                        			<div className="flat-star style-1">
                        				<i className="fa fa-star"></i>
                        				<i className="fa fa-star"></i>
                        				<i className="fa fa-star"></i>
                        				<i className="fa fa-star-half-o"></i>
                        				<i className="fa fa-star-half-o"></i>
                        				<span>(1)</span>
                        			</div>
                        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> 
                        			<div className="price">
                        				<ins><span className="amount">$24.00</span></ins>
                        			</div>

  
                        			<ul className="product-infor style-1">
                        				<li><span>100% cotton</span></li>
                        				<li><span>6 months warranty</span></li>
                        				<li><span>High Quality</span></li>
                        			</ul>
                        			<div className="product-quantity">
                        				<div className="quantity">
                        					<input type="number" value="1" name="quantity-number" className="quantity-number" />
                        					<span className="inc quantity-button">+</span>
                        					<span className="dec quantity-button">-</span>
                        				</div>
                        				<div className="add-to-cart">
                        					<a href="#">ADD TO CART</a>
                        				</div>
                        				<div className="box-like">
                        					<a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                        				</div>
                        			</div>
                        			<div className="product-categories">
                        				<span>Category: </span><a href="#">Digital</a>
                        			</div>
                        			<div className="product-tags">
                        				<span>Brand: </span><a href="#">Dress,</a> 
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
