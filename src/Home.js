import React from 'react';

import MovieList from './MovieList';
import loading from './loading.gif';
import useFetch from './useFetch';
const Home = () => {
   const{data: WeatherDashboard, isPending, error} =
   useFetch('http://localhost:8000/weatherdashboard');
 
  return (
    <div className='weatherdashboard'>
      <h2>Weather Dashboard</h2>
      {error && <div>{error}</div>}
      {!isPending && WeatherDashboard && <MovieList movies={WeatherDashboard} />}
      {!isPending && WeatherDashboard && <h2>Weather Details</h2>}

      {isPending && <div className='image'><img src={loading} alt="Loading..." /></div>}
      {WeatherDashboard && <WeatherDashboard   />}
    </div>
  )
}
 


export default Home
