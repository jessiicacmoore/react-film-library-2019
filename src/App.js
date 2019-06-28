import React, {useState} from 'react';

import TMDB from './TMDB'

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';


const App = () => {
  const initialFilms = TMDB.films;
  const [films, setFilms] = useState(initialFilms);
  const [faves, setFaves] = useState([]);

  const onFaveToggle = (film) => {
    let favesCopy = faves.slice();
    let faveIndex = faves.indexOf(film);

    if (faves.includes(film)) {
      console.log(`Removing ${film.title} from faves!`);
      favesCopy.splice(faveIndex, 1);
      setFaves(favesCopy);
    } else {
      console.log(`Adding ${film.title} to faves!`);
      setFaves([...favesCopy, film])
    }
  } 

  return (
    <div className="film-library">
      <FilmListing films={ films } onFaveToggle={onFaveToggle}/>
      <FilmDetails films={ films }/>
    </div>
  );
}

export default App;
