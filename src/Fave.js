import React, {useState} from 'react';

const Fave = ({onFaveToggle}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log(`Handling Click!`);
    onFaveToggle();
  }

  const [isFave, setIsFave] = useState(false);

  return(
    <div className="film-row-fave add_to_queue">
      <i className="material-icons" onClick={handleClick}>add_to_queue</i>
    </div>
  );
};

export default Fave