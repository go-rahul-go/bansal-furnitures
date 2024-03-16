import React, { useState } from 'react'
import "./menupage.css"
import SideNav from '../components/SideNav'
import { BsThreeDots } from "react-icons/bs";
import MenuCard from '../components/MenuCard';
import { plyData } from '../Data';



const AllPlyboard = () => {
    const [seeMenu, updateMenu] = useState(false)
    return (
        <section className='menu'>
            <h1 className='furn-h1' id="bed-h1">plyboards</h1>
            <BsThreeDots className='change-menu' onClick={() => updateMenu(!seeMenu)} title="see options" />
            <SideNav menu={seeMenu} changeMenu={updateMenu} />
            <div className='furn-container'>
        {
          plyData.map(item=>{
            return(
              <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link}/>
            )
          })
        }
      </div>
        </section>
    )
}

export default AllPlyboard;