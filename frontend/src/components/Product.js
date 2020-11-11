import React from 'react'

const Product = ({ product}) => {

    const { name, image, brand, price, category } = product
    return (
        <>
                                     <li className="product-item">
                                    <div className="product-thumb clearfix">
                                        <a href="#">
                                            <img src={image}  />
                                        </a>
                                   
                                    </div>
                                    <div className="product-info clearfix">
                                           <span className="product-title">{name}</span>
                                        <div className="price">
                                            <ins>
                                                <span className="amount">{price}</span>
                                            </ins>
                                        </div>
                                        <div className="category">
                                            <ins>
                                                <a href="#">{category}</a>
                                            </ins>
                                        </div>
            
                                    </div>
                                    <div className="add-to-cart text-center">
                                        <a href="#">ADD TO CART</a>
                                    </div>
                                    <a href="#" className="like"><i className="fa fa-heart-o"></i></a>
                                </li>

        </>
    )
}

export default Product
