import React,{useState} from 'react'
import "./menupage.css"
import SideNav from '../components/SideNav'
import { BsThreeDots } from "react-icons/bs";
import {plasticChair} from "../Data"
import { officeChairs } from '../Data';
import { NavLink,Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';


const Chairs = () => {
    const [seeMenu, updateMenu] = useState(false)
  return (
    <section className='menu'>
         <h1 className='furn-h1' id="bed-h1">chairs</h1>
         <BsThreeDots className='change-menu' onClick={() => updateMenu(!seeMenu)} title="see options" />
        <SideNav menu={seeMenu} changeMenu={updateMenu} />
        <div className='furn-container'>
          {
            officeChairs.map(chair=>{
              return(
                <MenuCard title={chair.title} imgUrl={chair.url} type={chair.type} design={chair.design} link={chair.link}/>
            )
           })
          }
          
          {
           plasticChair.map(item=>{
            return(
                <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link}/>
            )
           })
          }
        </div>
    </section>
  )
}

export default Chairs;