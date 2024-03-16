import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./goback.css"
import { IoMdArrowRoundBack } from "react-icons/io";
const GoBack = ({page,type}) => {
    const nav=useNavigate()
  return (
    <div className='back-nav' onClick={()=>nav(page)} >
       <IoMdArrowRoundBack id="back-arrow"/> <p> {type}</p>
    </div>
  )
}

export default GoBack;