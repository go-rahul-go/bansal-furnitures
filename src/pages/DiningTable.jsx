import React,{useState,useEffect} from 'react'
import "./innerPage.css"
import GoBack from '../components/GoBack';
import Slider from "react-slick";
import { tableData } from '../Data';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import rose from "../assets/tables/rose-svgrepo-com.svg"
import fruit from "../assets/tables/fruits-pear-svgrepo-com.svg"

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
const DiningTable = () => {
  const [tables,updateTables]=useState([]);

  useEffect(()=>{
    let x = tableData.filter(item=>item.design==="dining table");
    updateTables(x)
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
      <GoBack type={"all tables"} page={"/tables"}/>
      <h1 className="inner-page-h1">dining tables</h1>
      <div className='inner-page-main'>
      <Slider {...settings} className='inner-page-slider'>
        {
          tables.map((item)=>{
            return(
              <div className='inner-page-img'>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
     
    </Slider>
    <div className='inner-page-detail'>
      <h2 className="inner-page-h2">Dining table designs</h2>
      <p className='inner-page-p'>Explore our exquisite dining tables, crafted with precision and style. From contemporary designs to timeless classics, our furniture store offers a diverse range, blending functionality with aesthetic appeal for unforgettable dining experiences.</p>
      <p className='price'>starts from ₹15999</p>
      <div className='product-color-palette'>
        <p>available patterns</p>
        <div className='color-shades'>
          <div className="pat" title="rose/floral">
            <img src={rose} alt=""/>
          </div>
          <div className="pat" title="fruits">
          <img src={fruit} alt=""/>
          </div>
         
        </div>
      </div>
      <ul className="custom-list">
        <li>custom design also available</li>
        <li>available in different materials</li>
        <li>avialable in <span className='highlight'>4,6,8 seater configuration</span></li>
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

export default DiningTable;