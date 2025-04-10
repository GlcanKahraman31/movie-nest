import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/api/movies/${id}`).then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4" />
      <p>{movie.overview}</p>
      <div className="mt-4">
        <strong>Average Rating:</strong> {movie.rating.toFixed(1)} ⭐
      </div>
      <Link to={`/movie/${id}/review`} className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded">Write a Review</Link>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        {movie.reviews.map((review, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <strong>{review.user}</strong>: {review.comment} ({review.rating}⭐)
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetail;
