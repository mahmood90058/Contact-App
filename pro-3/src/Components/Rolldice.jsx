import React from 'react'
import styled from "styled-components"

const Rolldice = ({currentDice, rollDice}) => {
  return (
    <RollContainer>
      <div onClick={rollDice}>
        <img src={`./Dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>This is the start</p>
      
    </RollContainer>
  )
}

export default Rolldice

const RollContainer= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-size: 2rem;
    font-weight: 700;
  }

` 


