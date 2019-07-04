import React, {useState} from 'react';

import TMDB from './TMDB'

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import axios from 'axios';



const App = () => {
  const films = TMDB.films;
  const [currentFilm, setCurrentFilm] = useState({});
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

  const handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    console.log(`Fetching details for ${film.title}`)

    axios.get(url).then(response => {
      console.log(response.data);
      setCurrentFilm(response.data);
    })

  };

  return (
    <div className="film-library">
      <FilmListing films={ films } faves={faves} onFaveToggle={onFaveToggle} handleDetailsClick={handleDetailsClick}/>
      <FilmDetails film={ currentFilm }/>
    </div>
  );
}

export default App;
