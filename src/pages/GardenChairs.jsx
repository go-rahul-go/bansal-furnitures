import React from 'react'
import "./innerPage.css"
import GoBack from '../components/GoBack';
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { officeChairs } from '../Data';
import { IoCallOutline } from "react-icons/io5";
import { plasticChair } from '../Data';
import avro from "../assets/brand-logo/avro.webp"
import nilkamal from "../assets/brand-logo/nilkamal-logo_410x.avif"
import uttam from "../assets/brand-logo/uttam.png"

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
const GardenChairs = () => {
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
         <h1 className="inner-page-h1">Garden furniture</h1>
         <div className='inner-page-main'>
         <Slider {...settings} className='inner-page-slider'>
        {
          plasticChair.map((item)=>{
            return(
              <div className='inner-page-img'>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
     
    </Slider>
    <div className='inner-page-detail'>
      <h2 className="inner-page-h2">garden furniture</h2>
      <p className='inner-page-p'>Modern and practical, our plastic chairs offer sleek designs, vibrant colors, and easy maintenance. Versatile seating for indoors or outdoors, effortlessly blending style and functionality.</p>
      <p className='price'>starts from ₹499</p>
      <div className='product-color-palette'>
        <p>available colors</p>
        <div className='color-shades'>
          <div className="color black2" title="black"></div>
          <div className="color brown2" title="brown"></div>
          <div className="color tan2" title="tan"></div>
          <div className="color limegreen" title="green"></div>
          <div className="color orange3" title="orange"></div>
          <div className="color red3" title="red"></div>
        </div>
      </div>
      <div className="brands">
        <p>available brands</p>
          <div className='brands-box'>
            <div><img src={avro} alt="" title="avro"/></div>
            <div><img src={nilkamal} alt="" title="nilkamal"/></div>
            <div><img src={uttam} alt="" title="uttam"/></div>
          </div>
          
      </div>  
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

export default GardenChairs;