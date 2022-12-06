import React from 'react'
import './Slider.css'
import axios from 'axios'

function Slider() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;

    //create state for the upcoming movies
    const [upcomingMovies, setUpcomingMovies] = React.useState([])
    //call api for data when the components loads
    React.useEffect(
        ()=>{

            // console.log(baseUrl);
            //call api to get upcoming movies
            axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
            .then(res =>{
                console.log(res.data.results);
                setUpcomingMovies(res.data.results);
            })
            .catch(err => console.log(err))

        }, []
    )
  return (
    <div>
        {upcomingMovies[0]?.title} 
    </div>
  )
}

export default Slider