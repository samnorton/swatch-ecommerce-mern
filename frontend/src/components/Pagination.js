import React from 'react'

const Pagination = () => {
    return (
        <>
                        <div className="product-pagination text-center clearfix">
                            <ul className="flat-pagination">
                                <li className="prev">
                                    <a href="#"><i className="fa fa-angle-left"></i></a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#" title="">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
        </>
    )
}

export default Pagination
