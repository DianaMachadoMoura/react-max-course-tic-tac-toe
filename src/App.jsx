import GameBoard from './components/game-board/GameBoard';
import Player from './components/player/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol={'X'} />
          <Player initialName="Player 2" symbol={'0'} />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
