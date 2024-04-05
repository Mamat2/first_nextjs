"use client"
import React from "react";

import { CgArrowLongDown,CgArrowLongUp } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
export default  function Item({ item,onDelete,onUp,onDown,status }) {
    const {text,completed,id} = item; 
    return (
      <div>

        
         <input type="checkbox" checked={completed} onChange={() =>status(id)} />
         <span>{text}</span>
        <CgArrowLongUp  onClick={()=>onUp(id)}/>
        <CgArrowLongDown onClick={()=>onDown(id)} />
        <AiOutlineClose onClick={()=>onDelete(id)} className="delite-icon"/>
      </div>
    );
  }
  
  