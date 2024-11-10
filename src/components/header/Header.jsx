import React from 'react'
import { MdSunny } from "react-icons/md";


export default function Header({filterList, setFilter}) {
  return (
    <header>
      <div>
         <MdSunny />
      </div>
      <div>
         {filterList.map((value, index)=>{
          return <div key={index}><button onClick={()=>setFilter(value)}>{value}</button></div>
         })}
      </div>
    </header>
  )
}
