import "./contact.css"

import React,{useEffect, useRef, useState} from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import phone from "../assets/phone.png"
import {motion} from "framer-motion";


const Contact = () => {
  const conRef=useRef();
  const [show,updateShow]=useState(false)
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      let e1=entries[0]
      e1.isIntersecting?updateShow(true):updateShow(false)
      console.log(show)
    })
    observer.observe(conRef.current)
  },[])
  return (
    <section className="contact-page">
        <div className="contact-box">
          <h2 id="contact-head" ref={conRef}>Contact us</h2>
          <div id="contact-points">
            <div className="inner-contact" id="mobile">
                <IoCallOutline className="contact-icon"/>
                <p className="mobile-txt">+91 98177 54574</p>
            </div>
            <div className="inner-contact" id="address">
              <CiLocationOn className="contact-icon"/>
              <p className="address-txt">Shop no. 126B,<br/> Near Garg Marble 60 Feet Road, Dabua Colony<br/> N.I.T. Faridabad 121005</p>
            </div>
          </div>
        </div>
        <div className="back back1"></div>
        <div className="back back2"></div>
        <motion.div className="hanging-phone"  initial={{y:"-100vh"}} animate={show?{y:-5}:{y:"-100vh"}} transition={{duration:0.8,delay:0.2,type:"spring",stiffness:50}}>
          <img src={phone} alt=""/>
        </motion.div>
    </section>
  )
}

export default Contact;