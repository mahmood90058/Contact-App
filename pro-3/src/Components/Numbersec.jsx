import React from 'react'
import styled from 'styled-components';

const Numbersec = ({error,selecNum, setSelecNum}) => {
  const arrNum= [1,2,3,4,5,6];
  return (
    <NumberContainer>
      <p >{error}</p>


      <div className='flex'>
        {
          arrNum.map((value,i)=>(
            <Box isSelected={value===selecNum} key={i} onClick={()=>setSelecNum(value)}>{value}

            </Box>
          ))
        }


      </div>
        <p>selected Number</p>
      
    </NumberContainer>
  )
}

export default Numbersec


const NumberContainer= styled.div`

display: flex;
flex-direction: column;
align-items: flex-end;



.flex{
  display: flex;
  gap: 24px;
}

p{

  font-size: 2rem;
  font-weight: 2rem;

}

`

const Box = styled.div`

width: 72px;
height: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 2rem;
background-color: ${({isSelected})=>isSelected?"black" : "white"};
color: ${({isSelected})=>!isSelected? "black": "white"};


  

`
