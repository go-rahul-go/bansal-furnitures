import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack';
import "./innerPage.css"
import Slider from "react-slick";
import { tableData } from '../Data';
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

const CoffeeTable = () => {

  const [coffeetables,updateCoffeeTables]=useState([])
  useEffect(()=>{
    let x=tableData.filter(item=>item.design==="coffee table")
    updateCoffeeTables(x)
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
    <section className='inner-page'>
      <GoBack type={"all tables"} page={"/tables"} />
      <h1 className='inner-page-h1'>coffee tables</h1>
      <div className='inner-page-main'>
      <Slider {...settings} className='inner-page-slider'>
        {
          coffeetables.map((item)=>{
            return(
              <div className='inner-page-img'>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
     
    </Slider>
    <div className='inner-page-detail'>
      <h2 className="inner-page-h2">coffee table designs</h2>
      <p className='inner-page-p'>Discover sophistication and versatility in our coffee tables collection. Elevate your living space with modern and traditional designs, each table a perfect balance of form and function. Unleash your style.</p>
      <p className='price'>starts from ₹5999</p>
      <div className='product-color-palette'>
        <p>available colors</p>
        <div className='color-shades'>
          <div className="color white2" title="white"></div>
          <div className="color brown2" title="brown"></div>
          <div className="color red2" title="red"></div>
         
        </div>
      </div>
      <ul className="custom-list">
        <li>custom design also available</li>
        <li>available in different materials</li>
        <li>coffee table with smart storage</li>
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

export default CoffeeTable;