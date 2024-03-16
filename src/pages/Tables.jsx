import React,{useState} from 'react'
import "./menupage.css"
import SideNav from '../components/SideNav'
import { tableData } from '../Data'
import { BsThreeDots } from "react-icons/bs";
import { NavLink,Link } from 'react-router-dom';
import { LuArrowUpFromDot } from "react-icons/lu";
import MenuCard from '../components/MenuCard';
const Tables = () => {
    const [seeMenu, updateMenu] = useState(false)
  return (
    <section className='menu'>  
        <h1 className='furn-h1' id="bed-h1">Tables</h1>
        <BsThreeDots className='change-menu' onClick={() => updateMenu(!seeMenu)} title="see options" />
        <SideNav menu={seeMenu} changeMenu={updateMenu} />
        <div className='furn-container'>
        {
            tableData.map((item)=>{
              return(
                <MenuCard title={item.title} imgUrl={item.url} link={item.link} type={item.type}/>
              )
            })
          }
        </div>
    </section>
  )
}

export default Tables;

