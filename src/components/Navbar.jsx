import React, { useState } from 'react'
import "./navbar.css"
import ChairLogo from "../assets/logo/chair-svgrepo-com.svg"
import { NavLink,Link } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import {motion} from "framer-motion"
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [menuOpen,changeMenuVisibility]=useState(false)
    
    return (
        <header className='header'>
            <div className='logo'>
                <Link to="/" className='logo-h1'>
                    <h1>Bansal Furnitures & Plywood</h1>
                   
                </Link>
                
            </div>
            <div className='pc-links' onClick={()=>changeMenuVisibility(true)}>
                <IoIosMenu id="menu-btn"/>
            </div>
            <motion.div className={menuOpen?"menu-open":"menu-close"} onClick={()=>changeMenuVisibility(false)} initial={{y:"-80vh"}} animate={menuOpen?{y:0}:{y:"-80vh"}} transition={{duration:0.5,delay:0.1,type:"spring",stiffness:150}}>
                <div className='close-btn' title="close menu">
                    <IoClose/>
                </div>
                <motion.div className='menu-links' initial={{opacity:0}} animate={menuOpen?{opacity:1}:{opacity:0}} transition={{duration:0.3,delay:0.8}}>
                    <NavLink to="" onClick={()=>changeMenuVisibility(false)}>Home</NavLink>  
                    <NavLink to="/all-products"  onClick={()=>changeMenuVisibility(false)}>products</NavLink>
                    <NavLink to="/contact-us"  onClick={()=>changeMenuVisibility(false)}>contact us</NavLink>  
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Navbar