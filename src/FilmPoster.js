import React from 'react';

const FilmPoster = ({title, path}) => {
  const posterURL = `https://image.tmdb.org/t/p/w780/${path}`

  return (
    <figure className="film-poster">
      <img src={posterURL} alt={title} />
    </figure>
  );
}

export default FilmPoster;