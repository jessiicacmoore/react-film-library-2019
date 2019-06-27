import React, {useState} from 'react';

import TMDB from './TMDB'

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';


const App = () => {
  const initialFilms = TMDB.films;
  const [films, setFilms] = useState(initialFilms);

  return (
    <div className="film-library">
      <FilmListing films={ films } />
      <FilmDetails films={ films } />
    </div>
  );
}

export default App;
