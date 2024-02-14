import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import { FaSearch } from "react-icons/fa";

const App = () => {
  const[contact, setContact]= useState([]);

  useEffect(()=>{
    
  })
  return (
    <div className='max-w-[360px] m-auto px-2'>
      <Navbar/>


    <div className='flex'>
      <div className='flex flex-grow relative items-center'>
        <FaSearch className=' absolute text-white text-3xl'/>
        <input type="text" className='bg-transparent pl-10 h-10 text-white font-medium border border-white rounded-md flex-grow' />
      </div>
    </div>
      
      
    </div>
  )
}

export default App
