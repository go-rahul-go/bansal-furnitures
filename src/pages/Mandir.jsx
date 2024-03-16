import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import GoBack from '../components/GoBack';
import Slider from "react-slick";
import { IoCallOutline } from "react-icons/io5";
import { mandirData } from '../Data';
import "./menupage.css"

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
const Mandir = () => {
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
      <GoBack type={"all mandirs"} page={"/mandirs"} />
      <h1 className="inner-page-h1">Mandir</h1>
      <div className='inner-page-main'>
        <Slider {...settings} className='inner-page-slider'>
          {
            mandirData.map((item) => {
              return (
                <div className='inner-page-img'>
                  <img src={item.url} alt="" />
                </div>
              )
            })
          }

        </Slider>
        <div className='inner-page-detail'>
      <h2 className="inner-page-h2">mandirs</h2>
      <p className='inner-page-p'>Elegant mandir crafted with exquisite woodwork and intricate detailing, offering a harmonious blend of traditional design and modern aesthetics. A timeless centerpiece for your home, radiating warmth and tranquility.</p>
      <p className='price'>starts from ₹1500</p>
      <div className='product-color-palette'>
        <p>available colors</p>
        <div className='color-shades'>
          <div className="color white2"></div>
          <div className="color brown2"></div>
          <div className='color brown3'></div>
        </div>
      </div>
      <ul className="custom-list">
        
        <li>different sizes</li>
        <li> with smart storage faciltiy</li>
        
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

export default Mandir;