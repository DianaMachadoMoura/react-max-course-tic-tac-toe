import { useState } from 'react';

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClick = () => {
    setIsEditMode((wasEditMode) => !wasEditMode);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditMode && <span className="player-name">{playerName}</span>}
        {isEditMode && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditMode ? 'Edit' : 'Save'}</button>
    </li>
  );
};

export default Player;
