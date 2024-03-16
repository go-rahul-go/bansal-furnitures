import React from 'react'
import "./slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import table from "../assets/product-images/table_pixian_ai.png"
import bed from "../assets/product-images/bed_pixian_ai.png"
import sofa from "../assets/product-images/sofa_pixian_ai.png"
import garden from "../assets/product-images/garden_pixian_ai.png"
import office from "../assets/product-images/office_pixian_ai.png"
import plyboard from "../assets/product-images/plywood_pixian_ai.png"
import { NavLink } from 'react-router-dom';
function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="next-arrow"

            onClick={onClick}
        >
            <GrLinkNext />
        </div>
    );
}
function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="prev-arrow"

            onClick={onClick}
        >
            <GrLinkPrevious />
        </div>
    );
}
const ProductSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };
    return (
        <section className='slider' >
            <h1 className='p-h1' id="products-slider">Products</h1>
            <Slider {...settings} className='p-slider'>
                <div className='inner-card'>

                    <div className='p-card'>
                        <div className='p-img'>
                            <img src={table} alt="" />
                        </div>
                        <div className='p-intro'>
                            <h3 className='p-h3'>Tables</h3>
                            <p className='p-p'>Explore exquisite tables at <span className="store-high">Bansal furniture </span>. Elevate dining with stylish options, transform living spaces with chic coffee tables, and enhance functionality with versatile side tables. Find your perfect piece today!</p>
                            <NavLink to="/tables" className="explore">Explore tables</NavLink>
                        </div>
                        <h4 className='hindi'>मेज़</h4>
                    </div>
                </div>
                <div className='inner-card'>
                    <div className='p-card'>
                        <div className='p-img'>
                            <img src={bed} alt="" />
                        </div>
                        <div className='p-intro'>
                            <h3 className='p-h3'>beds</h3>
                            <p className='p-p'>Indulge in comfort and style with our diverse bed collection at <span className="store-high">Bansal furniture </span>. From sleek modern designs to timeless classics, discover the perfect bed for a restful sanctuary.</p>
                            <NavLink to="/beds" className="explore">Explore beds</NavLink>
                        </div>
                        <h4 className='hindi'>बिस्तर</h4>
                    </div>
                </div>
                <div className='inner-card'>
                    <div className='p-card'>
                        <div className='p-img'>
                            <img src={sofa} alt="" />
                        </div>
                        <div className='p-intro'>
                            <h3 className='p-h3'>sofa</h3>
                            <p className='p-p'>Unwind in style with our exceptional sofa collection at <span className="store-high">Bansal furniture </span>. From luxurious leather to cozy fabric, find the perfect centerpiece for your living space that blends comfort and elegance seamlessly.</p>
                            <NavLink to="/all-sofa" className="explore">Explore sofa</NavLink>
                        </div>
                        <h4 className='hindi'>सोफ़ा</h4>
                    </div>
                </div>
                <div className='inner-card'>
                    <div className='p-card'>
                        <div className='p-img'>
                            <img src={office} alt="" />
                        </div>
                        <div className='p-intro'>
                            <h3 className='p-h3'>office furniture</h3>
                            <p className='p-p'>
                                Revamp your workspace with sophistication and functionality. Explore our office furniture collection at <span className="store-high">Bansal furniture </span> for ergonomic chairs, sleek desks, and storage solutions that elevate productivity and style.</p>
                                <NavLink to="/office-furniture" className="explore">explore office furniture</NavLink>
                        </div>
                        <h4 className='hindi'>कार्यालय के फर्नीचर</h4>
                    </div>
                </div>
                <div className='inner-card'>
                    <div className='p-card'>
                        <div className='p-img'>
                            <img src={garden} alt="" />
                        </div>
                        <div className='p-intro'>
                            <h3 className='p-h3'>garden furniture</h3>
                            <p className='p-p'>
                            Transform your outdoor haven with our garden furniture at <span className="store-high">Bansal furniture </span>. Discover durable and stylish furniture creating a perfect oasis for relaxation.</p>
                                <NavLink to="/plastic-chairs" className="explore">explore garden furniture</NavLink>
                        </div>
                        <h3 className='hindi'>उद्यान का फर्नीचर</h3>
                    </div>
                </div>
                <div className='inner-card'>
                    <div className='p-card'>
                        <div className='p-img'>
                            <img src={plyboard} alt="" />
                        </div>
                        <div className='p-intro'>
                            <h3 className='p-h3'>plyboard</h3>
                            <p className='p-p'>
                            Craft furniture with quality and durability using our premium plyboard selection at <span className="store-high">Bansal furniture </span>. Ideal for various designs, our plyboards ensure lasting strength and reliability in every piece.</p>
                                <NavLink to="/all-plyboards" className="explore">explore plyboard</NavLink>
                        </div>
                        <h3 className='hindi'>प्लाईबोर्ड</h3>
                    </div>
                </div>
            </Slider>


        </section>
    )
}

export default ProductSlider;