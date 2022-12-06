import React from 'react'
import Slider from '../../components/Header/Slider/Slider'
import './Homepage.css'


function Homepage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (

   
    <div className='homepage-container'>
        <Slider /> 
    </div>
  )
}

export default Homepage