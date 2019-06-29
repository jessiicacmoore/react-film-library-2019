import React, { useState, useRef } from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films, onFaveToggle}) => {
  const [filter, setFilter] = useState('all');
  const allFilterRef = useRef();
  const favesFilterRef = useRef();
  const filterRefs = [allFilterRef, favesFilterRef]

  const handleFilterClick = (e, selectedFilter) => {
    e.stopPropagation();
    console.log(`Setting filter to ${selectedFilter}`);
    setFilter(selectedFilter);
    let filterRef = (selectedFilter === 'all') ? allFilterRef : favesFilterRef;
    filterRefs.forEach(ref => ref.current.classList.remove('is-active'));
    filterRef.current.classList.add('is-active');
  };
   
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
  };

  
  const filmRows = films.map((film, i) => 
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} handleDetailsClick={handleDetailsClick}/>
  );

  return(
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div ref={allFilterRef} className="film-list-filter is-active" onClick={(e) => handleFilterClick(e, 'all')}>
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div ref={favesFilterRef} className="film-list-filter" onClick={(e) => handleFilterClick(e, 'faves')}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {filmRows}
    </div>
  );
};

export default FilmListing;