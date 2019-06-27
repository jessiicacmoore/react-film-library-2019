import React from 'react';

const FilmListing = ({films}) => {
  const filmElements = films.map((film, i) => 
    <li>{film.title}</li>
  );

  return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <ul className="films">
        {filmElements}
      </ul>
    </div>
  );
};

export default FilmListing;