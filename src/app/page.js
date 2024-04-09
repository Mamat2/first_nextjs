import Image from "next/image";
import styles from "./page.module.css";
//import React, { useState } from 'react';

//import Finder from  "./pages/finder/finder"


import Link from "next/link";



export default  function HomePage() {
  
  return (
    <div className="Menu">
      <h1>все дз</h1>
      <nav>
        <ul>
        <li><Link href={"pages/finder"}> finder</Link></li>
        <li><Link href={"pages/react_1"}> react_1</Link></li>
        <li><Link href={"pages/react_4_ToDo"}>react_4 to do list </Link></li>
        <li><Link href={"pages/Users"}> test users</Link></li>
        <li><Link href={"pages/dz_fetch"}>dz feth</Link></li>
        </ul>
      </nav>

    </div>
  );
}
