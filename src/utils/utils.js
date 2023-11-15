import {
  INITIAL_GAME_BOARD_VALUES,
  WINNING_COMBINATIONS,
} from './constants.js';

export const deriveActivePlayerSymbol = (gameTurns) => {
  return gameTurns.length && gameTurns[0].playerSymbol === 'X' ? 'O' : 'X';
};

export const deriveWinner = (gameBoardValues, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoardValues[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoardValues[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoardValues[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
};

export const deriveGameBoard = (gameTurns) => {
  let gameBoardValues = [
    ...INITIAL_GAME_BOARD_VALUES.map((array) => [...array]),
  ];

  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    const { row, col } = square;

    gameBoardValues[row][col] = playerSymbol;
  }

  return gameBoardValues;
};
