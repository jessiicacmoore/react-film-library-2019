import React, { useState, useRef } from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films, faves, onFaveToggle, handleDetailsClick}) => {
  const [filter, setFilter] = useState('all');
  const allFilterRef = useRef();
  const favesFilterRef = useRef();

  const displayList = filter === 'faves' ? faves : films;

  const handleFilterClick = (e, selectedFilter) => {
    e.stopPropagation();
    console.log(`Setting filter to ${selectedFilter}`);
    setFilter(selectedFilter);
  };

  const filmRows = displayList.map((film, i) => 
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} handleDetailsClick={handleDetailsClick}/>
  );

  return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div ref={allFilterRef} className={`film-list-filter${(filter === 'all') ? ' is-active' : ''}`} onClick={(e) => handleFilterClick(e, 'all')}>
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div ref={favesFilterRef} className={`film-list-filter${(filter === 'faves') ? ' is-active' : ''}`} onClick={(e) => handleFilterClick(e, 'faves')}>
          FAVES
          <span className="section-count">{ faves.length }</span>
        </div>
      </div>
      {filmRows}
    </div>
  );
};

export default FilmListing;