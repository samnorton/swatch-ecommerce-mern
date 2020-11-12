import React from 'react'

const ProductSubDetail = () => {
    return (
        <>
        <section className="flat-row shop-detail-content">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">
        				<div className="flat-tabs style-1 has-border">
                            <div className="inner">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">

                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="desc-tab" data-toggle="tab" href="#desc" role="tab" aria-controls="desc" aria-selected="true">Description</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Additional information</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="true">Reviews</a>
                                    </li>
                                </ul>
                                
                               
                                <div className="content-tab tab-content" id="myTabContent">
                                    <div className="content-inner tab-pane fade show active" id="desc" role="tabpanel" aria-labelledby="desc">
                                        <div className="flat-grid-box col2 border-width border-width-1 has-padding clearfix">
                                            <div className="grid-row image-left clearfix">
                                                <div className="grid-item">
                                                    <div className="thumb text-center">
                                                        <img src="images/shop/sh-detail/detail-desc-01.jpg" />
                                                    </div>                                                  
                                                </div>
                                                

                                                <div className="grid-item">
                                                    <div className="text-wrap">
                                                        <h6 className="title">100 % alligator</h6>
                                                        <p>Fashion has always been so temporary and uncertain. You can’t keep up with it. This social phenomenon is very whimsical, thus we as the consumers always try to stay in touch with all the latest fash- ion tendencies. </p>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>                                      
                                    </div>
                                    <div className="content-inner tab-pane fade" id="info" role="tabpanel" aria-labelledby="info">
                                        <div className="inner max-width-40">
                                            <table>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>1.73 kg</td>
                                                </tr>
                                                <tr>
                                                    <td>Dimensions</td>
                                                    <td>100 x 37 x 100 cm</td>
                                                </tr>
                                                <tr>
                                                    <td>Materials</td>
                                                    <td>80% cotton, 20% linen</td>
                                                </tr>
                                                <tr>
                                                    <td>Size</td>
                                                    <td>One Size, XL, L, M, S</td>
                                                </tr>                       
                                            </table>
                                        </div>                                      
                                    </div>
                                    <div className="content-inner tab-pane fade"  id="reviews" role="tabpanel" aria-labelledby="reviews">
                                        <div className="inner max-width-83 padding-top-33">
                                            <ol className="review-list">
                                                <li className="review">
                                                    <div className="thumb">
                                                        <img src="images/avatar-1.png" />
                                                    </div>
                                                    <div className="text-wrap">
                                                        <div className="review-meta">
                                                            <h5 className="name">Sophia Rosla</h5>
                                                            <div className="flat-star style-1">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-text">
                                                            <p>I wanted to thank you so much for the rug we have received it really is beautiful and expertly made. I will be recommending you to all our friends.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="review">
                                                    <div className="thumb">
                                                        <img src="images/avatar.png" />
                                                    </div>
                                                    <div className="text-wrap">
                                                        <div className="review-meta">
                                                            <h5 className="name">Jayne Haughton</h5>
                                                            <div className="flat-star style-1">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                            </div>
                                                        </div>
                                                        <div className="review-text">
                                                            <p className="line-height-28">Customer service is very important part of the buying experience to us and we must say that we have found Utility's to be impressive - we will certainly look to buy again in future.</p>
                                                        </div>
                                                    </div>
                                                </li>            
                                            </ol>
                                            <div className="comment-respond review-respond" id="respond">
                                                <div className="comment-reply-title margin-bottom-14">
                                                    <h5>Write a review</h5>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                </div>
                                                <form novalidate="" className="comment-form review-form" id="commentform" method="post" action="#">
                                                    <p className="flat-star style-2">
                                                        <label>Rating*:</label> 
                                                         <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label>Review*</label>
                                                        <textarea className="" tabindex="4"  name="comment" required> </textarea>                          
                                                    </p>
                                                    <p className="comment-name">
                                                        <label>Name*</label>                                  
                                                        <input type="text" aria-required="true" size="30" value="" name="name" id="name" />
                                                    </p>
                                                    <p className="comment-email"> 
                                                        <label>Email*</label>                                       
                                                        <input type="email" size="30" value="" name="email" id="email" />
                                                    </p>
                                                    <p className="comment-form-notify clearfix">
                                                        <input type="checkbox" name="check-notify" id="check-notify" /> 
                                                        <label for="check-notify">Notify me of new posts by email</label>
                                                    </p>                                                        
                                                    <p className="form-submit">                 
                                                        <button className="comment-submit">Submit</button>
                                                    </p>
                                                </form>
                                            </div>                                        
                                        </div>                                      
                                    </div>
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

export default ProductSubDetail
