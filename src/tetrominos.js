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

export const makeTetromino = () => {
  const tetrominos = 'O';

  return TETROMINOS[tetrominos];
}
