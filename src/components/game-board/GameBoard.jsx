const GameBoard = ({ onSelectSquare, boardValues }) => {
  return (
    <ol id="game-board">
      {boardValues.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((colValue, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={!!colValue}>
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
