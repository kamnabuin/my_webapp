import React from 'react';
import {Link} from 'react-router-dom';
const MovieList = ({movies, tittle}) => {
  return (
    <div className='blog-list'>

        <h1>{tittle}</h1>
     {movies.map((movie) => (
        <div className="blog-preview" key={movie.id}>
          <Link to ={`/movies/${movie.id}`}>
           <h2>{movie.tittle}</h2>
            <p>Acted By:{movie.actor}</p>
          </Link>
           
          
            </div>

     ))}   
        
      
    </div>
  )
}

export default MovieList
