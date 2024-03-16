import React, { useEffect, useRef } from 'react'
import "./hero.css"
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Scene from "../Scene"
import { motion } from "framer-motion"
import Loading from "./Loading";

const homeVar = {
  start: {
    x: "-150%"
  },
  end: {
    x: 0
  }
}
const furVar = {
  start: {
    x: "100%"
  },
  end: {
    x: 0
  }
}
const Hero = () => {
  const boxRef = useRef();
  const [see, updateSee] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      let e1 = entries[0]
      e1.isIntersecting ? updateSee(true) : updateSee(false);
    })
    observer.observe(boxRef.current)
  }, [])
  return (
    <section className='hero'>
      <div className='inner-hero'>

        <div className='chair'>
          <Canvas camera={{ fov: 4.4, position: [75, 5, 10] }}>

            <Suspense >
              <directionalLight position={[0, 0, 2]} />
              <mesh scale={5.5} position={[0, -2.1, 0]}>
                <Scene />
              </mesh>
              {/* <OrbitControls enableZoom={false} /> */}

            </Suspense>
            <ambientLight intensity={2} />

          </Canvas>
        </div>
        <div className='intro' >
          <div className='intro-title' ref={boxRef}>
            <motion.h2 id="home" variants={homeVar} initial="start" animate={see ? "end" : "start"} transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}>home</motion.h2>
            <span id="and">&</span>
            <motion.h2 id="furn" variants={furVar} initial="start" animate={see ? "end" : "start"} transition={{ duration: 1, delay: 0.4, type: "spring", stiffness:80 }}>furnishing</motion.h2>
          </div>
          <motion.p className='intro-bio' initial={{ opacity: 0 }} animate={see ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>Elevate your living spaces with our diverse range of meticulously crafted furniture. From modern minimalism to classic opulence, our curated collection ensures every piece resonates with style and comfort. Immerse yourself in a world where quality meets design, and create a home that reflects your unique taste. Welcome to a sanctuary of exceptional furniture at <span>Bansal furnitures.</span></motion.p>
          <motion.a initial={{opacity:0}} animate={see?{opacity:1}:{opacity:0}} transition={{duration:1,delay:0.5}} id="see-more" href="#products-slider">see more</motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero;