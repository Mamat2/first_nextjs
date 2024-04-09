"use client"
import InformationBlock from "./informationBlock";
import BackButton from "@/app/components/BackButton";
import {useState } from "react";
import Header from "@/app/components/Header";
//import style from "@/app/pages/finder/styles.module.css"
import TaskText from "@/app/components/TaskText";

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
        const {
          Title: name,
          Year: year,
          Runtime: runtime,
          Plot: plot,
          Genre: genre,
          Director: director,
          Actors: actors,
          Language: language,
          Country: country,
          Awards: awards,
          Poster: poster,
          Metascore: metascore,
          imdbRating: imdbRating,
          imdbVotes: imdbVotes,
          imdbID: imdbID,
          Type: type,
          DVD: dvdRelease,
          BoxOffice: boxOffice,
          Production: production,
          Website: website
        } = result;
       setFilmInfo(result)
       console.log(filmInfo) ;
        //console.log(name) ;
      };

    const Text = ["Создать и сконфигурировать проект на NextJS. Разместить его исходный код на GitHub ( или GitLab, Bitbucket итд) Настроить на сервисе Vercel( и/или Cloudflare Pages, GitHub Pages, Netlify, AWS Amplify, Digital Ocean, Heroku, MS Azure, Google Cloud Platform итд ) автоматическую облачную сборку (Deploy) проекта из репозитория в статический сайт.","Реализовать на NextJS и React веб-страницу для поиска фильмов используя сервис omdbapi.com"];



return(
    <div>
      <Header  title={"finder"}/>
      <TaskText text={Text}/>
        <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Отправить</button>
        </form>
        
        <InformationBlock information={filmInfo} />
        

    </div>
)

}