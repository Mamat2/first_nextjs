"use client"
import InformationBlock from "./informationBlock";
import BackButton from "@/app/components/BackButton";
import {useState } from "react";
import Header from "@/app/components/Header";
import style from "@/app/pages/finder/styles.module.css"

async function fetchData(query) {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${query}&plot=full&apikey=75c45dc7`
    );
    const result = await res.json();
   
  
    return result;
  }


export default  function Finder (){

    const [text, setText] = useState("");
    //const [text2 , setText2] = useState("");
    const [filmInfo, setFilmInfo] = useState("") ;
 //   const res = await fetchData();


    const handleChange = (e) => {
      setText(e.target.value);
    };
  
   

    const  handleSubmit = async(e) => {
        e.preventDefault();
        
        const result= await fetchData(text);
        const { Title: name, Year: year} = result
       setFilmInfo(result)
       console.log(filmInfo) ;
        //console.log(name) ;
      };


return(
    <div>
      <Header  title={"finder"}/>
    
        <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Отправить</button>
        </form>
        
        <InformationBlock information={filmInfo} />
        

    </div>
)

}