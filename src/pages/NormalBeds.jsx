import React,{useState,useEffect} from 'react'
import "./innerPage.css"
import GoBack from '../components/GoBack'
import Slider from "react-slick";
import { BedData } from '../Data'
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

const NormalBeds = () => {
  const [newdata,updateData]=useState([])
  useEffect(()=>{
    let x=BedData.filter(item=>item.design==="traditional")
    updateData(x)
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
      <GoBack type={"all beds"} page={"/beds"}/>
      <h1 className='inner-page-h1'>traditional Beds</h1>
      <div className='inner-page-main'>
      <Slider {...settings} className='inner-page-slider'>
        {
         newdata.map((item)=>{
            return(
              <div className='inner-page-img'>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
     
    </Slider>
    <div className='inner-page-detail'>
      <h2 className="inner-page-h2">Traditional Bed designs</h2>
      <p className='inner-page-p'>Discover unparalleled comfort and style with our exquisite beds. From modern platform designs to timeless classics, our collection boasts quality craftsmanship and diverse materials. Transform your bedroom into a haven of relaxation.</p>
      <p className='price'>starts from ₹13000</p>
      <div className='product-color-palette'>
        <p>available colors</p>
        <div className='color-shades'>
        <div className="color cream2"></div>
          <div className="color brown2"></div>
          <div className="color lightbrown2"></div>
          
        </div>
      </div>
      <ul className="custom-list">
        <li>custom design also available</li>
        <li>available in single bed design</li>
        <li>bed with smart storage facility</li>
        <li className='notice'>mattress not included</li>
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

export default NormalBeds