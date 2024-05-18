// src/components/MovieDetail.js
import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import './MovieDetail.css';

const MovieDetail = () => {
  const { selectedMovie } = useContext(MovieContext);

  if (!selectedMovie) return null;

  return (
    <div className="movie-detail">
      <h2>{selectedMovie.Title}</h2>
      <p>{selectedMovie.Plot}</p>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
    </div>
  );
};

export default MovieDetail;
