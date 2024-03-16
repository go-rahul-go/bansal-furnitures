import React from 'react'
import "./innerPage.css"
import GoBack from '../components/GoBack';
import { sofaData } from '../Data';
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
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

const Sofa = () => {
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
            <GoBack type={"all sofas"} page={"/all-sofa"} />
            <h1 className="inner-page-h1">sofa</h1>
            <div className='inner-page-main'>
                <Slider {...settings} className='inner-page-slider'>
                    {
                        sofaData.map((item) => {
                            return (
                                <div className='inner-page-img'>
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }

                </Slider>
                <div className='inner-page-detail'>
                    <h2 className="inner-page-h2">Modern sofa designs</h2>
                    <p className='inner-page-p'>Indulge in comfort with our luxurious sofa collection, meticulously crafted for style and relaxation. Elevate your living space with our range of exquisite designs, blending functionality with unparalleled elegance.</p>
                    <p className='price'>starts from ₹14999</p>
                    <div className='product-color-palette'>
                        <p>available colors</p>
                        <div className='color-shades'>
                            <div className="color blue2"></div>
                            <div className="color brown2"></div>

                            <div className="color dual-color">
                                <div className="navy3"></div>
                                <div className="cream3"></div>
                            </div>
                            <div className="color red2"></div>
                            <div className="color dual-color">
                                <div className="yellow3"></div>
                                <div className="grey3"></div>
                            </div>
                            <div className='color dual-color'>
                                <div className="cream3"></div>
                                <div className="aqua"></div>
                            </div>
                            <div className='color dual-color'>
                                <div className="grey3"></div>
                                <div className="maroon"></div>
                            </div>
                        </div>
                    </div>
                    <ul className="custom-list">
                        <li>custom design also available</li>
                        <li>available in 4,6,8 and L shape configuration</li>
                        <li>both fabric and leather sofa available</li>
                    </ul>
                    <div className='contact-store'>
                        <p>for more details</p>
                        <div className='call'>
                            <IoCallOutline className='phone-icon' /> 9817754574
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Sofa;