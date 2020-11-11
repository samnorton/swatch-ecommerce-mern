import React from 'react'
import sampleProduct from '../assets/images/sample-product.jpg'

const RecentProducts = () => {
    return (
        <>
                  <section className="flat-row row-product-project shop-collection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-section margin-bottom-41">
                            <h2 className="title">Recently Added</h2>
                        </div>
                        <div className="divider h40"></div>
                        <div className="product-content product-fourcolumn clearfix">
                            <ul className="product style2 isotope-product clearfix">

                                <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#">
                                            <img src={sampleProduct} />
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
                                            <img src={sampleProduct} />
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

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
        </>
    )
}

export default RecentProducts