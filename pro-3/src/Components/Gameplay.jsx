import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numbersec from './Numbersec'
import Rolldice from './Rolldice'

const Gameplay = () => {
    const[selecNum, setSelecNum]= useState();
    const[currentDice, setCurrentDice]= useState(1);
    const[error, setError]= useState("")
    const[score, setScore]= useState(0)


    const genrateNo=(min,max)=>{

        return Math.floor(Math.random() *(max-min)+min);

    }

    const rollDice=()=>{
        if(!selecNum){
            setError("you havent slect no")
            return
        }
        const randomNo= genrateNo(1,7);

        
        setCurrentDice((prev)=>randomNo)

        if(selecNum===randomNo){
            // /
            setScore((prev)=>prev+randomNo)
            
        }else{
            // previous value state hai 
            setScore((prev)=>prev-2)
        }
    }

    
    
  return (
    <div>
        <Totalscore score={score}/>
        <Numbersec selecNum={selecNum} setSelecNum={setSelecNum}/>
        <Rolldice currentDice={currentDice} rollDice={rollDice}/>
      
    </div>
  )
}

export default Gameplay
