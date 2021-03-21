export const TETROMINOS = {
  0: { shape: [[0]], color: 'white' },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: 'blue',
  },
};

export const randomTetromino = () => {
  const tetrominos = 'O';
  // const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];

  // return TETROMINOS[randTetromino];
  return TETROMINOS[tetrominos];
}
