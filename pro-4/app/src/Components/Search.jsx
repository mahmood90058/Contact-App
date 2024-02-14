// import React from 'react'
// import styled from 'styled-components'
// import { BASE_URL } from '../App'
// import { Button } from '../App'

// const Search = ({data}) => {
//   return (
//     <FoodContainer>
//         <FoodCards>
//             {
//                 data?.map(({name, image, text, price})=>(
//                     <FoodCard key={name}>
//                         <div className="img">
//                             <img src={BASE_URL + image} alt="" />
//                         </div>

//                         <div className="food_info">
//                             <div className="info">
//                                 <h3>{name}</h3>
//                                 <p>{text}</p>
//                             </div>
//                             <Button>${price.toFixed(2)}</Button>
//                         </div>

//                     </FoodCard>

//                 ))
//             }
//         </FoodCards>
      
//     </FoodContainer>
//   )
// }

// export default Search


// const FoodContainer= styled.section`
// background-image: url(./bg.png);
// background-size: cover;

// `

// const FoodCards= styled.div`
// display: flex;
// flex-wrap: wrap;
// row-gap: 20px;
// column-gap: 30px;
// padding: 10px;
// justify-content: center;
// align-items: center;
// `


// const FoodCard= styled.div`
// width: 340px;
// height: 167px;
// border: 0.666px;

// border-image-source: radial-gradient(
//       80.69% 208.78% at 108.28% 112.58%,
//       #eabfff 0%,
//       rgba(135, 38, 183, 0) 100%
//     ),
//     radial-gradient(
//       80.38% 222.5% at -13.75% -12.36%,
//       #98f9ff 0%,
//       rgba(255, 255, 255, 0) 100%
//     );

//   background: url(.png),
//     radial-gradient(
//       90.16% 143.01% at 15.32% 21.04%,
//       rgba(165, 239, 255, 0.2) 0%,
//       rgba(110, 191, 244, 0.0447917) 77.08%,
//       rgba(70, 144, 213, 0) 100%
//     );
//   background-blend-mode: overlay, normal;
//   backdrop-filter: blur(13.1842px);

//   border-radius: 20px;
//   display: flex;
//   padding: 5px;

//   .food_info{
//     display: flex;
//     flex-direction: column;
//     align-items: end;
//   }





// `



import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../App'
import { Button } from '../App'

const Search = ({data}) => {
  return (
    <FoodContainer>
      <FoodCards>
        {
          data?.map(({name, image, text,price})=>(
            <FoodCard key={name}>
              <div className="foo_img">
                <img src={BASE_URL + image} alt="img" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>

                <Button>${price.toFixed(2)}</Button>
              </div>

            </FoodCard>

          ))
        }
      </FoodCards>
      
    </FoodContainer>
  )
}

export default Search



const FoodContainer= styled.section`
background-image: url(./bg.png);
background-size: cover;
  

`

const FoodCards= styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 20px;
column-gap: 30px;
padding: 16px;

  

`

const FoodCard=  styled.div`

width: 367px;
height: 167px;
border: 0.666px;


border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    )
     radial-gradient(
     80.38% 222.5% at -13.75% -12.36%,
     #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
     ); 

  background: url(.png),
     radial-gradient(
       90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
   backdrop-filter: blur(13.1842px);

   border-radius: 20px;
   display: flex;
  padding: 5px;


  .food_info{
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

  }

`