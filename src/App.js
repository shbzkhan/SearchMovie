// src/App.js
import React, { useEffect } from 'react';
import { MovieContextProvider } from './contexts/MovieContext';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';
import Navbar from './components/navbar';
import './App.css';


const App = () => {
  return (
    <MovieContextProvider >
      <div className="App">
        <Navbar />

        <MovieList />
      </div>
    </MovieContextProvider>
  );
};

export default App;
