import React from 'react';

const Fave = () => {
  const handleClick = (e) => {
    console.log(`Handling Click!`)
  }
  return(
    <div className="film-row-fave add_to_queue">
      <i className="material-icons" onClick={handleClick}>add_to_queue</i>
    </div>
  );
};

export default Fave