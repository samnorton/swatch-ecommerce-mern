import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
                <div id="site-header-wrap">
            <div id="top-bar">
                <div id="top-bar-inner" class="container">
                    <div class="top-bar-inner-wrap">
                        <div class="top-bar-content">
                            <span class="content">You are login as <span class="log-user">Administrator</span></span>
                        </div>
                        <div class="top-bar-nav">
                            <div class="inner">
                                <div class="admin-wrap">
                                    <ul class="admin">
                                        <li>
                                            <a href="#"><i class="fa fa-tachometer mr-2" aria-hidden="true"></i>
                                                Dashboard</a>
                                            <ul class="sub-admin">
                                                <li><a href="#">Products</a></li>
                                                <li><a href="#">Account</a></li>
                                                <li><a href="#">Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header id="header" class="header header-container clearfix">
                <div class="container clearfix" id="site-header-inner">
                     <Navbar />
                </div>
            </header>
        </div>

       </>
    )
}

export default Header
