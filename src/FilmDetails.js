import React from 'react';
import axios from 'axios';

require('dotenv').config();


const FilmDetails = ({film}) => {
  let details;

  const game = () => {

    const url = 'http://localhost:8000/api/game-of-thrones/';
    const token = process.env.REACT_APP_GOT_KEY;
    axios.get(url, {headers: { 
      'Authorization': 'Bearer ' + token
     }})
      .then( response => {
        console.log(response.data);
      })
  }

  if (film.id) {
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{film.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{film.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={film.title} />
            {film.overview}
          </p>
        </div>
      </div>
    );
  } else {
    details = (
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    );
  }
  
  return(
    <div className="film-details">
      <h1 className="section-title" onClick={game}>DETAILS</h1>
      {details}
    </div>

  );
};

export default FilmDetails;