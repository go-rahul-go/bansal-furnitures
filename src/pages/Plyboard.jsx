import React, { useEffect, useState } from 'react';
import "./innerPage.css"
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { BedData, plyData } from '../Data';
import GoBack from '../components/GoBack';
import { IoCallOutline } from "react-icons/io5";

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="m-next-arrow m-arrow"

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
            className="m-prev-arrow m-arrow"

            onClick={onClick}
        >
            <GrLinkPrevious />
        </div>
    );
}


const Plyboard = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };
    return (
        <section className="inner-page">
            <GoBack type={"all plyboard"} page={"/all-plyboards"} />
            <h1 className="inner-page-h1">plyboards</h1>
            <div className='inner-page-main'>
                <Slider {...settings} className='inner-page-slider'>
                    {
                        plyData.map((item) => {
                            return (
                                <div className='inner-page-img'>
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }

                </Slider>
                <div className='inner-page-detail'>
      <h2 className="inner-page-h2">plyboards</h2>
      <p className='inner-page-p'>A versatile engineered wood, offers durability and affordability, making it a popular choice for furniture. With its layered construction, it provides strength and stability, ideal for crafting stylish and functional pieces to suit any home decor.</p>
      <p className='price'>starts from ₹499</p>
      
      <ul className="custom-list">
        <li>available in all sizes (6, 9, 12, 15, 18mm)</li>
        <li>strong and termite proof</li>
        <li>affordable & cost effective</li>
        <li>all major brands available</li>
      </ul>
      <div className='contact-store'>
        <p>for more details</p>
        <div className='call'>
          <IoCallOutline className='phone-icon'/> 9817754574
        </div>
      </div>
    </div>
            </div>
        </section>
    )
}

export default Plyboard;