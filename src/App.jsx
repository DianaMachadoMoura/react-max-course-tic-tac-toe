import { useState } from 'react';

import { PLAYERS } from './utils/constants';
import {
  deriveActivePlayerSymbol,
  deriveWinner,
  deriveGameBoard,
} from './utils/utils';

import GameBoard from './components/game-board/GameBoard';
import Player from './components/player/Player';
import Log from './components/log/Log';
import GameOver from './components/game-over/GameOver';

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayerSymbol = deriveActivePlayerSymbol(gameTurns);

  let gameBoardValues = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoardValues, players);

  const hasDrew = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayerSymbol = deriveActivePlayerSymbol(prevTurns);

      return [
        {
          square: { row: rowIndex, col: colIndex },
          playerSymbol: currentPlayerSymbol,
        },
        ...prevTurns,
      ];
    });
  };

  const handleRestartGame = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName.toUpperCase(),
    }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayerSymbol === 'X'}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayerSymbol === 'O'}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDrew) && (
          <GameOver winner={winner} onRestart={handleRestartGame} />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          boardValues={gameBoardValues}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
