import React, { useState } from 'react'
import "./menupage.css"
import SideNav from '../components/SideNav'
import { BsThreeDots } from "react-icons/bs";
import { BedData } from '../Data';

import { LuArrowUpFromDot } from "react-icons/lu";
 import MenuCard from '../components/MenuCard';
const Bed = () => {
  const [seeMenu, updateMenu] = useState(false)
  
  return (
    <>

      <section className='menu'>
        <h1 className='furn-h1' id="bed-h1">Beds</h1>
        <BsThreeDots className='change-menu' onClick={() => updateMenu(!seeMenu)} title="see options" />
        <SideNav menu={seeMenu} changeMenu={updateMenu} />
        <div className='furn-container'>
          {
            BedData.map((item)=>{
              return(
                <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link}/>
              )
            })
          }
        </div>
        <a className="go-top" href="#bed-h1" ><LuArrowUpFromDot/></a>
      </section>
      
      </>

  )
}

export default Bed;



