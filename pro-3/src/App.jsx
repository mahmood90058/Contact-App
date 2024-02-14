import React, { useState } from 'react'
import Startgame from './Components/Startgame'
import Gameplay from './Components/Gameplay'

const App = () => {
  const[isstartGame, setisStartGame]= useState(true)

  const toggle=()=>{
    setisStartGame((prev)=>!prev)
  }
  return (
    <div>
      {/* <Startgame/>
      <Gameplay /> */}
      {isstartGame? <Gameplay/> : <Startgame toggle={toggle}/>}
      
    </div>
  )
}

export default App
