// src/contexts/MovieContext.js
import React, { createContext, useState } from 'react';
import { fetchMovies } from '../../services/api';

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    const data = await fetchMovies(query);
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <MovieContext.Provider value={{ movies, searchMovies, selectedMovie, selectMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
