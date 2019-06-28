import React from 'react';
import FilmPoster from './FilmPoster';

const FilmRow = ({title, poster_path, release_date}) => {
  
  const year = new Date(release_date).getFullYear();

  return (
    <div className="film-row">
      <FilmPoster title={title} path={poster_path} />
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default FilmRow;