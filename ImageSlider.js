import React from 'react'
import './ImageSlider.css'
import imageSlide from './data'
import {useEffect , useState} from "react"
const ImageSlider = () => {
    
    const[currentState , setCurrentState]= useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===2){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
            

        },2000)
        return ()=> clearTimeout(timer)
    },[currentState])
    const bgImageStyle ={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'100%',
        width: '100%',
        borderRadius: '10px',
    }
    const goToNext = (currentState)=>{
        setCurrentState(currentState)
    }
  return (
    <div className="container-style">
      <div style={bgImageStyle}></div>
      <div className='carousel-boult'>
        {
            imageSlide.map((imageSlide,currentState)=>(
                <span key={currentState} onClick={()=> goToNext(currentState)}></span>
            ))
        }
      </div>
    </div>
    
  )
}

export default ImageSlider
