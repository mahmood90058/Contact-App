import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Search from './Components/Search'

 export const BASE_URL= "http://localhost:9000"

const App = () => {
  const[data,setData]= useState(null)
  const[loading, setLoading]= useState(false)
  const[error, setError]= useState("")

  const[filterdata, SetFilterdata]= useState(null);
  const[selecBtn, setselecBtn]= useState("all")



  useEffect(()=>{
    setLoading(true)

    const getData= async()=>{
      try{
        const res= await fetch(BASE_URL);
      const get= await res.json();
      setData(get);
      SetFilterdata(get)
      setLoading(false);


      }
      catch(error){
        setError("unable to fetch data")
      }
      
    }
    getData();
  },[])


  const FilterFood=(e)=>{
    const searchValue= e.target.value;
    if(Search===""){
      SetFilterdata(null);
    }


    const filter= data?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase())




    
    )

    SetFilterdata(filter)

  }


  const selectedBtn=(type)=>{
    if(type==="all"){
      SetFilterdata(data)
      setselecBtn(type);
    }


    const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
    )
    SetFilterdata(filter);
    setselecBtn(type)


  }


  const filterBtn= [
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    },
  ]



  return (

   <>

<Container>
      <TopContainer>
        <div className="logo">
          <img src="./logo.svg" alt="img" />
        </div>
        <div className="search">
          <input onChange={FilterFood} type="text" placeholder='search food' />
        </div>


      </TopContainer>


      <FilterContainer>
        {/* <Button>All</Button>
        <Button>breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button> */}

        {
          filterBtn.map((value)=>(
            <Button key={value.name} onClick={()=>selectedBtn(value.type)}>

              {value.name}


            </Button>

          ))
        }
      </FilterContainer>

      
    </Container>

    <Search data={filterdata}/>
   
   
   </>

  )
}

export default App

const Container= styled.section`
max-width: 1200px;
margin: 0 auto;

  

`

const TopContainer= styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  min-height: 140px;

  .search{
    input{
      background-color: transparent;
    padding: 0 10px;
    border-radius: 5px;
    height: 40px;
    border: 1px solid red;
    color: white;
    font-size: 16px;
     &::placeholder{
      color: white;
     }



    }
    
  }



`


const FilterContainer= styled.section`
display: flex;
justify-content: center;
align-items: center;
gap: 12px;


`
 export  const Button = styled.button`
background-color: red;
color: white;
border: none;
outline: none;
padding: 6px 12px;
border-radius: 5px;
cursor: pointer;
font-size: 12px;
font-weight: 600;

&:hover{
  background-color: green;
}


`
