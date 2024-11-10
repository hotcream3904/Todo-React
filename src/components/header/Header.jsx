import React from 'react'
import { MdSunny } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div>
         <MdSunny />
      </div>
      <div>
         <ul>
           <li>All</li>
           <li>Active</li>
           <li>Completed</li>
         </ul>
      </div>
    </header>
  )
}
