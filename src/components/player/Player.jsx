import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <li>
      <span className="player">
        {!isEditMode && <span className="player-name">{name}</span>}
        {isEditMode && <input />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditMode ? 'Edit' : 'Save'}</button>
    </li>
  );
};

export default Player;
