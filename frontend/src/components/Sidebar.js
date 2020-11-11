import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="col-md-3">
                        <div className="sidebar slidebar-shop">
                            <div className="widget widget-search">
                                <form role="search" method="get" className="search-form" action="#">
                                    <label>                                    
                                        <input type="search" className="search-field" placeholder="Search …" value="" name="s" />
                                    </label>
                                   
                                </form>                            
                            </div>
                            <div className="widget widget-sort-by">
                                <h5 className="widget-title">
                                    Sort By
                                </h5>
                                <ul>
                                    <li><a href="#" className="active">Default</a></li>
                                    <li><a href="#">Popularity</a></li>
                                    <li><a href="#">Average rating</a></li>
                                    <li><a href="#">Newness</a></li>
                                    <li><a href="#">Price: low to high</a></li>
                                    <li><a href="#">Price: high to low</a></li>
                                </ul>
                            </div>
  
   
                            <div className="widget widget-price">
                                <h5 className="widget-title">Filter by price</h5>
                                <div className="price-filter">
                                    <div id="slide-range"></div>
                                    <p className="amount">
                                      Price:  <input type="range" min="1" max="100" value="50" class="slider" />
                                    </p>
                                </div>
                            </div>


                            <div className="widget widget_tag">
                                <h5 className="widget-title">
                                    Brands
                                </h5>
                                <div className="tag-list">
                                    <a href="#">All products</a>
                                    <a href="#" className="active">Bags</a>
                                    <a href="#">Chair</a>
                                    <a href="#">Decoration</a>
                                    <a href="#">Fashion</a> 
                                    <a href="#">Tie</a>
                                    <a href="#">Furniture</a>
                                    <a href="#">Accesories</a> 
                                </div>
                            </div>
                        </div>
                    </div>



        </>
    )
}

export default Sidebar
