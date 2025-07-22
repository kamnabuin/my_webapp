import React from 'react';

import MovieList from './MovieList';
import loading from './loading.gif';
import useFetch from './useFetch';


const Home = () => {
   
   const{data: movies, isPending, error} =
   useFetch('http://localhost:8000/movies')
 
  return (
    <div className='home'>
      {error && <div>{error}</div>}
     {isPending && <div className ='image'><img src={loading} alt="image"/></div>} 
       {movies && <MovieList movies = {movies} tittle = "Movies Blog!!!" /> }
     
    </div>
  )
}
 


export default Home
