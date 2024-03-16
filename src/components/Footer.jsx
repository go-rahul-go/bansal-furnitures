import React, { useEffect, useRef, useState } from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { Canvas, useFrame } from '@react-three/fiber';
import { FaRegCopyright } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
const Sphere = ({ size, position, color }) => {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.2
    })
    return (
        <mesh position={position} ref={ref}>
            <sphereGeometry args={size} />
            <meshStandardMaterial color={color} wireframe />
        </mesh>
    )
}
const Footer = () => {
    const listRef = useRef();
    const [see, updateSee] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let e1 = entries[0]
            e1.isIntersecting ? updateSee(true) : updateSee(false)
        })
        observer.observe(listRef.current)
    }, [])
    return (
        <>
            <section className="footer">
                <div className="foot-links">
                    <ul className="links-list" ref={listRef}>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.2, delay: 0, type: "spring", stiffness: 90 }}><Link to="/beds">Beds</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 90 }}><Link to="/all-sofa">sofas</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 90 }}><Link to="/tables">tables</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 90 }}><Link to="/chairs">chairs</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 90 }}><Link to="/mandirs">mandir</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 90 }}><Link to="/office-furniture">office furnitures</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 90 }}><Link to="/plastic-chairs">garden furnitures</Link></motion.li>
                        <motion.li initial={{ x: "-100vw" }} animate={see ? { x: 0 } : { x: "-100vw" }} transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 90 }}><Link to="/all-plyboards">plyboards</Link></motion.li>
                    </ul>
                </div>

                <div className='earth'>
                    <Canvas>
                        <directionalLight position={[0, 0, 3]} />
                        <ambientLight intensity={0.3} />
                        <Sphere position={[0, 0, 0]} size={[2.9, 60, 25]} color="#F3DFA2" />
                    </Canvas>
                </div>

            </section>
            <div className='foot-logo'>
                <div className='foot-left'>
                    <div id="cpy"><FaRegCopyright /></div>
                    <motion.h3>bansal furnitures & plyboards </motion.h3>
                </div>
                <div className='foot-right'>
                    <p>Shop no. 126B,
                        Near Garg Marble 60 Feet Road, Dabua Colony,
                        Faridabad,121005</p>
                        <div id="phone-num"><IoCallOutline/>98177 54574</div>
                </div>
            </div>
        </>
    )
}

export default Footer;