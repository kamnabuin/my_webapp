import React from 'react'
import { useParams,useHistory } from 'react-router-dom';
import loading from './loading.gif';
import useFetch from './useFetch';
const MovieDetails = () => {
    const { id } = useParams();
    const { data: movie, isPending, error } = 
    useFetch('http://localhost:8000/movies/' + id);
    const history = useHistory ()
    //Delete Movie
    const handleDelete =()=>{
      fetch('http://localhost:8000/movies/' + movie.id, {
        method: "DELETE"
      })
      history.push('/')
    
    }
  return (
    <div className='blog-details'>
        {isPending && <div className='image'><img src={loading}
         alt="image" /></div>}
         {error && <div>{error}</div>}
           {movie && (
        <article>
          <h2>{movie.title}</h2>
          <div>{movie.body}</div>
          <h2>Acted By:{movie.actor}</h2>
          <button onClick={handleDelete}>Delete Movie</button>
        </article>
       )}
       <h2>Movie Details</h2>
      
    </div>
  )
}

export default MovieDetails
