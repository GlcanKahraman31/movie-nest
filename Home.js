import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/api/movies').then(res => setMovies(res.data));
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredMovies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="bg-white p-2 shadow rounded">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2 className="mt-2 font-semibold text-center">{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
