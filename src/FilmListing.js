import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films, onFaveToggle}) => {
  const filmElements = films.map((film, i) => 
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle}/>
  );

  return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {filmElements}
    </div>
  );
};

export default FilmListing;