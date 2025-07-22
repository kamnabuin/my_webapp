import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [tittle, setTittle] = useState("");
    const [body, setBody] = useState("");
    const [actor, setActor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = { tittle, body, actor };
        setIsPending(true)

        fetch('http://localhost:8000/movies', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(movie)
        }).then(() => {
            console.log('New Movie Added');
            setIsPending(false)
            history.push("/")
        })
    }
  return (
    <div className='create'>
        <h1>Add A New Movie</h1>
        <form onSubmit={handleSubmit}>
            <label>Movie Tittle:</label>
            <input type="text"
            required
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            />
            <label>Movie's Body:</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Movie Actor:</label>
            <select 
            value={actor}
            onChange={(e) => {setActor(e.target.value)}}
            >
                <option value="Arnold">Arnold</option>
                <option value="Lara croft">Lara croft</option>
                
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding Blog.....</button>}
        </form>
      
    </div>
  )
}

export default Create
