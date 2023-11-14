import { useState } from 'react';

const INITIAL_GAME_BOARD_VALUES = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoardValues, setGameBoardValues] = useState(
    INITIAL_GAME_BOARD_VALUES
  );

  const handleSelectPosition = (rowIndex, colIndex) => {
    setGameBoardValues((prevValues) => {
      const updatedValues = [
        ...prevValues.map((innerArray) => [...innerArray]),
      ];
      updatedValues[rowIndex][colIndex] = 'X'; //add logic for symbol later

      return updatedValues;
    });
  };

  return (
    <ol id="game-board">
      {gameBoardValues.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((colValue, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectPosition(rowIndex, colIndex)}
                >
                  {colValue}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
