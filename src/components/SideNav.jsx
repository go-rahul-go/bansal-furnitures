import React,{useState} from 'react'
import "./sidenav.css"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { IoIosCloseCircleOutline } from "react-icons/io";
const mVar={
    start:{
        x:"-100%"
    },
    end:{
        x:0
    }
}
const SideNav = ({menu,changeMenu}) => {
   
  return (
    <div className={menu?"side-nav-visible":"side-nav-hide"}>
        <Link to="/beds">beds</Link>
        <Link to="/all-sofa">sofa</Link>
        <Link to="/tables">tables</Link>
        <Link to="/chairs">chairs</Link>
        <Link to="/mandirs">mandir</Link>

        <Link to="/office-furniture">office furnitures</Link>
        <Link to="/plastic-chairs">garden furnitures</Link>
        <Link to="/all-plyboards">plyboard</Link>
        <IoIosCloseCircleOutline onClick={()=>changeMenu(false)} className="side-menu-close"/>
    </div>
  )
}

export default SideNav