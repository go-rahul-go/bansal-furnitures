import React, { useState,useRef,useEffect } from 'react'
import SideNav from '../components/SideNav'
import { BsThreeDots } from "react-icons/bs";
import MenuCard from '../components/MenuCard';
import { BedData } from '../Data';
import { tableData } from '../Data';
import { officeChairs } from '../Data';
import { mandirData } from '../Data';
import { plasticChair } from '../Data';
import { sofaData } from '../Data';
import { FaArrowUpLong } from "react-icons/fa6";
import { plyData } from '../Data';
const AllProducts = () => {
    const bedRef=useRef();
    const sofaRef=useRef();
    const [top,setTop]=useState(false)
  
    useEffect(()=>{
        
        const observer2=new IntersectionObserver(entries=>{
            let e1=entries[0]
            console.log(e1.isIntersecting)
            if(e1.isIntersecting)
            {
                setTop(false)
            }
            else{
                setTop(true)
            }
        })
       
        observer2.observe(bedRef.current)
    },[])
 
    const [seeMenu, updateMenu] = useState(false)
    return (
        <section className='menu'  id="products-top">
            <h1 className='furn-h1' id="bed-h1">All Products</h1>
            <BsThreeDots className='change-menu' onClick={() => updateMenu(!seeMenu)} title="see options" />
            <SideNav menu={seeMenu} changeMenu={updateMenu} />
            <div className='prod-seperator'>
                <h2 className='sep-h2' ref={bedRef} >beds</h2></div>
            <div className='furn-container' >
                {
                    BedData.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
                
            </div>
            <div className='prod-seperator'>
                <h2 className='sep-h2' ref={sofaRef}>sofas</h2></div>
            <div className='furn-container'>
                {
                    sofaData.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
                
            </div>
            <div className='prod-seperator'>
                <h2 className='sep-h2'>Tables</h2>
            </div>
            <div className='furn-container'>
            {
                    tableData.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
            </div>
            <div className='prod-seperator'><h2 className='sep-h2'>office chairs</h2></div>
            <div className='furn-container'>
            {
                   officeChairs.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
            </div>
            <div className='prod-seperator'><h2 className='sep-h2'>mandirs</h2></div>
            <div className='furn-container'>
            {
                   mandirData.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
            </div>
            <div className='prod-seperator'><h2 className='sep-h2'>garden furniture</h2></div>
            <div className='furn-container'>
            {
                   plasticChair.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
            </div>
            <div className='prod-seperator'><h2 className='sep-h2'>plyboards</h2></div>
            <div className='furn-container'>
            {
                   plyData.map(item => {
                        return (
                            <MenuCard title={item.title} imgUrl={item.url} type={item.type} design={item.design} link={item.link} />
                        )
                    })
                }
            </div>
            
            <a href="#products-top" className={top?"move-top":"move-top-off"}><FaArrowUpLong/></a>
         
        </section>
    )
}

export default AllProducts