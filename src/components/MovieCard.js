// src/components/MovieCard.js
import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { selectMovie } = useContext(MovieContext);

  return (
    <div className="movie-card" onClick={() => selectMovie(movie)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieCard;
