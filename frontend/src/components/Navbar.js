import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <>
                <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link to='/' title="logo" className="navbar-brand">
                                <img src={logo} width="107" height="24" />
                            </Link>
                            <button className="navbar-toggler custom-togglercustom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="" role="button" ><i className="fa fa-bars" aria-hidden="true" style={{color: "#e6e6ff"}}></i></span>
                            </button>
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-left">
                              <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>HOME</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to='/shop'>SHOP</Link>
                              </li>

                              <li className="nav-item">
                                <Link className="nav-link" to='/'>FAQ</Link>
                              </li>

                              <li className="nav-item">
                                <Link className="nav-link" to='/'>CONTACT</Link>
                              </li>
                            </ul>

       
                            <ul className="menu-extra">
                                <li className="box-login">
                                    <a className="icon_login" href="#"></a>
                                </li>
                                <li className="box-cart nav-top-cart-wrapper">
                                    <Link className="icon_cart nav-cart-trigger active" to='/cart'><span>3</span></Link>
                                    <div className="nav-shop-cart">
                                        <div className="widget_shopping_cart_content">
                                            <div className="woocommerce-min-cart-wrap">
                                                <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                                                    <li className="woocommerce-mini-cart-item mini_cart_item">
                                                        <span>No Items in Shopping Cart</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                          </div>
                        </div>
                      </nav>

        </>
    )
}

export default Navbar
