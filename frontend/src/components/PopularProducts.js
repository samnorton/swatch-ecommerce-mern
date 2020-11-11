import React from 'react'
import sampleProduct from '../assets/images/sample-product.jpg'

const PopularProducts = () => {
    return (
        <>
           <section className="flat-row row-best-sale">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-section margin-bottom-43">
                            <h2 className="title">
                                Popular
                            </h2>
                        </div>
                        <div className="product-content product-fivecolumn clearfix">
                            <ul className="product style3">
                                <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#">
                                            <img src={sampleProduct} />
                                        </a>
                                        
                                    </div>
                                    <div className="product-info clearfix">
                                        <span className="product-title">Faux shearling aviator<br /> jacket</span>
                                        <div className="price">
            
                                            <ins>
                                                <span className="amount">$100.00</span>
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

export default PopularProducts
