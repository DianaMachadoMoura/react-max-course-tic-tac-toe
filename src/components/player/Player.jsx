import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClick = () => {
    setIsEditMode((wasEditMode) => !wasEditMode);

    isEditMode && onNameChange(symbol, playerName);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
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
