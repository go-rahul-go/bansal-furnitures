import React, { useEffect, useState } from 'react';
import "./innerPage.css"
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { BedData } from '../Data';
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


const ModernBed = () => {
  const [newBeds,changeNewBeds]=useState([])
  useEffect(()=>{
    let x=BedData.filter(item=>item.design==="modern")
      changeNewBeds(x)
  
  },[])

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
      <GoBack type={"all beds"} page={"/beds"}/>
      <h1 className="inner-page-h1">Modern beds</h1>
      <div className='inner-page-main'>
      <Slider {...settings} className='inner-page-slider'>
        {
          newBeds.map((item)=>{
            return(
              <div className='inner-page-img'>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
     
    </Slider>
    <div className='inner-page-detail'>
      <h2 className="inner-page-h2">Modern Bed designs</h2>
      <p className='inner-page-p'>Sleek and minimalist, the modern bed combines clean lines, premium materials, and innovative features for a stylish and comfortable sleeping experience, seamlessly integrating aesthetics with functionality in contemporary living spaces.</p>
      <p className='price'>starts from ₹14999</p>
      <div className='product-color-palette'>
        <p>available colors</p>
        <div className='color-shades'>
          <div className="color blue2"></div>
          <div className="color brown2"></div>
          <div className="color yellow2"></div>
          <div className="color navy2"></div>
        </div>
      </div>
      <ul className="custom-list">
        <li>custom design also available</li>
        <li>available in single bed design</li>
        <li>bed with smart storage faciltiy</li>
        <li className='notice'>Mattress not included</li>
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

export default ModernBed