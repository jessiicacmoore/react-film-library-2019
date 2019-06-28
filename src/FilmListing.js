import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
  const filmElements = films.map((film, i) => 
    <FilmRow key={film.id} {...film}/>
  );

  return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {filmElements}
    </div>
  );
};

export default FilmListing;