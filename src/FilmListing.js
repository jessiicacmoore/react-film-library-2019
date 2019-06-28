import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films, onFaveToggle}) => {

  const filmRows = films.map((film, i) => 
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle}/>
  );

  const handleFilterClick = (e, selectedFilter) => {
    e.stopPropagation();
    console.log(`Setting filter to ${selectedFilter}`);
  }

  return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div className="film-list-filter" onClick={(e) => handleFilterClick(e, 'all')}>
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div className="film-list-filter" onClick={(e) => handleFilterClick(e, 'faves')}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {filmRows}
    </div>
  );
};

export default FilmListing;