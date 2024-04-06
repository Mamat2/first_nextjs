"use client"
import React from "react";

import { CgArrowLongDown,CgArrowLongUp } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import style from "@/app/pages/react_4_ToDo/style.module.css"

export default  function Item({ item,onDelete,onUp,onDown,status }) {
    const {text,completed,id} = item; 
    return (
      <div>

        
         <input type="checkbox" checked={completed} onChange={() =>status(id)} />
         <span>{text}</span>
        <CgArrowLongUp className={style.icon} onClick={()=>onUp(id)}/>
        <CgArrowLongDown  className={style.icon} onClick={()=>onDown(id)} />
        <AiOutlineClose  className={style.icon} onClick={()=>onDelete(id)}/>
      </div>
    );
  }
  
  