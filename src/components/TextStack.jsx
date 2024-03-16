import React, { useEffect, useRef, useState } from 'react'
import "./textstack.css"
import living from "../assets/home-pics/8988224.jpg"
import chair from "../assets/home-pics/8357471.jpg"
import bed from "../assets/home-pics/undraw_staying_in_i-80-u.svg"
import { motion } from "framer-motion"
const l1Var = {
    start: {
        x: "-100%",
        opacity:0
    },
    end: {
        x: 0,
        opacity:1
    }
}
const l2Var = {
    start: {
        x: "100%",
        opacity:0
    },
    end: {
        x: 0,
        opacity:1
    }
}
const TextStack = () => {
    const l1 = useRef();
    const l2 = useRef();
    const l3 = useRef();

    const [line1, changeLine1] = useState(false)
    const [line2, changeLine2] = useState(false)
    const [line3, changeLine3] = useState(false)
    useEffect(() => {
        const observer1 = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? changeLine1(true) : changeLine1(false)
        })
        const observer2 = new IntersectionObserver(entries => {
                let e2 = entries[0]
                e2.isIntersecting ? changeLine2(true) : changeLine2(false)
        }
        )
        const observer3=new IntersectionObserver(entries => {
            let e3 = entries[0]
            e3.isIntersecting ? changeLine3(true) : changeLine3(false)
    })

        observer1.observe(l1.current)
        observer2.observe(l2.current)
        observer3.observe(l3.current)
    }, [])
    return (
        <section className='text'>
            <div className='box box1'>
                <motion.p id="l1" ref={l1} variants={l1Var} initial="start" animate={line1 ? "end" : "start"} transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}><span className="orange">h</span>omeware</motion.p>

                <div className='text-img1'>
                    <img src={living} alt=""/>
                </div>
            </div>
            <div className='box box2'>
                <motion.p id="l2" ref={l2} variants={l2Var} initial="start" animate={line2 ? "end" : "start"} transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}><span className="orange">l</span>ifestyle</motion.p>
                <div className='text-img2'>
                    <img src={chair} alt=""/>
                </div>
            </div>
            <div className='box box3'>
                <motion.p id="l3" ref={l3} variants={l1Var} initial="start" animate={line3 ? "end" : "start"} transition={{ duration: 0.7,delay:0.4, type: "spring", stiffness: 100 }}><span className="orange">f</span>urnishing</motion.p>
                <div className='text-img3'>
                    <img src={bed} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default TextStack;