import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {
  return (
    <ScoreContainer>
        <div>
            <h1>{score}</h1>
            <p>Total store</p>
        </div>

      
    </ScoreContainer>
  )
}

export default Totalscore

const ScoreContainer= styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: yellow;
    max-width: 220px;
    display:grid;
    place-items: center;

    h1{
        font-size: 4rem;
        font-weight: 600;
    }

    p{
        font-size: 2rem;
    }



`
