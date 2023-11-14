import { useState } from 'react';

import GameBoard from './components/game-board/GameBoard';
import Player from './components/player/Player';
import Log from './components/log/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayerSymbol, setActivePlayerSymbol] = useState('X');

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayerSymbol((prevActivePlayerSymbol) =>
      prevActivePlayerSymbol === 'X' ? 'O' : 'X'
    );
    setGameTurns((prevTurns) => {
      const currentPlayerSymbol =
        prevTurns.length && prevTurns[0].playerSymbol === 'X' ? 'O' : 'X';

      return [
        {
          square: { row: rowIndex, col: colIndex },
          playerSymbol: currentPlayerSymbol,
        },
        ...prevTurns,
      ];
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={'X'}
            isActive={activePlayerSymbol === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol='O'
            isActive={activePlayerSymbol === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayerSymbol}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
