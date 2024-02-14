import React from 'react'
import styled from "styled-components"



const Startgame = ({toggle}) => {
  return (
    <StartContainer>
      <div>
        <img src="./Images/dices.png" alt="dice" />
      </div>

      <div>
      <h1>Start Game</h1>
  
      <Button onClick={toggle}>Play Now</Button>

      </div>

    
      
    </StartContainer>
  )
}

export default Startgame


const StartContainer= styled.div`
max-width: 1180px;
display: flex;
align-items: center;
margin: 0 auto;
height: 90vh;
justify-content: center;

h1{

  font-size: 3rem;
  font-weight: 700;

}


  

`

const Button = styled.button`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 1rem 2rem;
border: none;
outline:none;
border-radius: 5px;
background-color: black;
color: white;
cursor: pointer;
font-size: 2rem;
transition: all 0.5s;


&:hover{
  background-color: white;
  border: 1px solid black;
  transition: all 0.5s;
  color: black;

}





  

`