import React from 'react'
import imgProduct from '../assets/images/sample-product.jpg'

const RelatedProducts = () => {
    return (
        <>
        <section className="flat-row shop-related">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">
        				<div className="title-section margin-bottom-55">
        					<h2 className="title">Related Products</h2>
        				</div>

        				<div className="product-content product-fourcolumn clearfix">
                            <ul className="product style2">
                                <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#">
                                            <img src={imgProduct} />
                                        </a>
                                    </div>
                                    <div className="product-info clearfix">
                                        <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                        <div className="price">
                                            <ins>
                                                <span className="amount">$19.00</span>
                                            </ins>
                                        </div>
                                    </div>
                                    <div className="add-to-cart text-center">
                                        <a href="#">ADD TO CART</a>
                                    </div>
                                    <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                </li>
                                <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#">
                                            <img src={imgProduct} />
                                        </a>
                                    </div>
                                    <div className="product-info clearfix">
                                        <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                        <div className="price">
                                            <ins>
                                                <span className="amount">$10.00</span>
                                            </ins>
                                        </div>
                                    </div>
                                    <div className="add-to-cart text-center">
                                        <a href="#">ADD TO CART</a>
                                    </div>
                                    <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                </li>
                                <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#" className="product-thumb">
                                            <img src={imgProduct} />
                                        </a>
                                    </div>
                                    <div className="product-info clearfix">
                                        <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                        <div className="price">
                                            <ins>
                                                <span className="amount">$20.00</span>
                                            </ins>
                                        </div>
                                    </div>
                                    <div className="add-to-cart text-center">
                                        <a href="#">ADD TO CART</a>
                                    </div>
                                    <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                </li>
                                <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#" className="product-thumb">
                                            <img src={imgProduct} />
                                        </a>
                                    </div>
                                    <div className="product-info clearfix">
                                        <span className="product-title">Cotton White Underweaer Block Out Edition</span>
                                        <div className="price">

                                            <ins>
                                                <span className="amount">$60.00</span>
                                            </ins>
                                        </div>
                                    </div>
                                    <div className="add-to-cart text-center">
                                        <a href="#">ADD TO CART</a>
                                    </div>
                                    <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                </li>                                
                            </ul>
                        </div>
        			</div>
        		</div>
        	</div>
        </section>


        </>
    )
}

export default RelatedProducts
