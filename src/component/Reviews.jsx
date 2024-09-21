import React ,{useState}from 'react'
import review1 from '../assets/1.jpg'
import review2 from '../assets/2.jpg'
function Reviews() {
    const [data,setData]=useState(false)
  return (
    <div className="review" id="review">
      {
        data ? (
            <div className='one'>
                <img src={review1} alt="" />
               <p> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
               <h2>Maccy Doe - Front End</h2>
            </div>
        ):(
            <div className='one'>
            <img src={review2} alt="" />
           <p> "hello there, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
           <h2>jan doe - Designer</h2>
        </div>
        )
      }
      <button onClick={()=>setData(!data)}></button>
      <button onClick={()=>setData(!data)}></button>
    </div>
    
  ) 
}

export default Reviews
