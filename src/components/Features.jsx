import React, { useEffect, useRef, useState } from 'react'
import "./features.css";
import box from "../assets/cube-svgrepo-com.svg"
import sofa from "../assets/feature-images/sofa-svgrepo-com.svg"
import quality from "../assets/feature-images/quality-report-svgrepo-com.svg"
import custom from "../assets/feature-images/settings-svgrepo-com.svg"
import truck from "../assets/feature-images/box.svg"
import {motion} from "framer-motion"
const info = [
    {
        id: 1,
        title: "modern designs",
        d: "Explore our collection of sleek and contemporary furniture designs",
        image:sofa
    },
    { id: 2, title: "Quality Materials", d: "Crafted with the finest materials to ensure durability and longevity",image:quality },
    { id: 3, title: "Customization Options", d: "Personalize your furniture to match your style and preferences",image:custom },
    { id: 4, title: "Fast Delivery", d: "Enjoy quick and efficient delivery services for your convenience" ,image:truck}
]
const Features = () => {
   
    return (
        <section className="features">
            <h1 id="f-big">discover our features</h1>
            <h2 className="f-small">Experience the best in furniture design and service</h2>
            <div className='feature-tile' >
                {
                    info.map((item) => {
                        return (
                            <div className='feature-card'>
                                <div className='f-card-logo'>
                                   <img src={item.image} alt=""/>
                                </div>
                                <div className='f-card-detail'>
                                    <h3 className='f-card-h3'>{item.title}</h3>
                                    <p>{item.d}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Features;