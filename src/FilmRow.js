import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = ({film, onFaveToggle, handleDetailsClick}) => {
  
  return (
    <div className="film-row" onClick={() => handleDetailsClick(film)}>
      <FilmPoster title={ film.title } path={ film.poster_path } />
      <div className="film-summary">
        <h1>{ film.title }</h1>
        <p>{ new Date(film.release_date).getFullYear() }</p>
      </div>
      <Fave onFaveToggle={() => onFaveToggle(film)}/>
    </div>
  );
}

export default FilmRow;