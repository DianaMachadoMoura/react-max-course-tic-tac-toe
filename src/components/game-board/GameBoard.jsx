const INITIAL_VALUES = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoardValues = INITIAL_VALUES;

  for (const turn of turns) {
    const { square, playerSymbol } = turn;
    const { row, col } = square;

    gameBoardValues[row][col] = playerSymbol;
  }

  return (
    <ol id="game-board">
      {gameBoardValues.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((colValue, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
