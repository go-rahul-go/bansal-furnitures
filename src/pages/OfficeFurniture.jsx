import React from 'react'
import "./innerPage.css";
import GoBack from '../components/GoBack';
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { officeChairs } from '../Data';
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
const OfficeFurniture = () => {
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
        <GoBack type={"all chairs"} page={"/chairs"}/>
        <h1 className="inner-page-h1">office furniture</h1>
        <div className='inner-page-main'>
        <Slider {...settings} className='inner-page-slider'>
        {
          officeChairs.map((item)=>{
            return(
              <div className='inner-page-img'>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
     
    </Slider>
    <div className='inner-page-detail'>
      <h2 className="inner-page-h2">office chairs</h2>
      <p className='inner-page-p'>Elevate your workspace with our stylish and ergonomic office chairs. Crafted for comfort and functionality, our chairs boast contemporary designs, quality materials, and customizable features, ensuring a productive and comfortable work environment.</p>
      <p className='price'>starts from ₹2999</p>
      <div className='product-color-palette'>
        <p>available colors</p>
        <div className='color-shades'>
          <div className="color black2" title="black"></div>
          <div className="color brown2" title="brown"></div>
          <div className="color tan2" title="tan"></div>
         
        </div>
      </div>
      <ul className="custom-list">
        
        <li>available in leather & fabric material</li>
        <li>Built with sturdy materials and meticulous craftsmanship</li>
       <li>comes with easy height adjustment</li>
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

export default OfficeFurniture;