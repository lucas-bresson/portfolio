const shuffleArray = (array: number[]): number[] => {
  // fisher-yates
  let oldElement;
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    oldElement = array[i];
    array[i] = array[rand];
    array[rand] = oldElement;
  }
  return array;
};

export default function generateArray({
  theme,
  grid,
}: {
  theme: string;
  grid: string;
}) {
  
  const array: number[] = [];
  const isSmallGrid = grid === '4x4'
  
  if (theme === 'numbers') {
    const uniqueNumbers = isSmallGrid ? 8 : 18;

      for (let i = 0; i < uniqueNumbers; i++) {
        const n = Math.floor(Math.random() * 36);

        if (array.includes(n)) {
          const increment = Math.floor(Math.random() * 36) + 36;
          array.push(n + increment, n + increment);
        } else {
          array.push(n, n);
        }
      }

  }
  
  if (theme === 'birds') {
    if (isSmallGrid) {
      [1,2,3,4,5,6,7,8].forEach(n => array.push(n, n))
    } else {
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].forEach(n => array.push(n, n))
    }
  }
  
  return shuffleArray(array);
}
