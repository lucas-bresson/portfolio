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
  const uniqueNumbers = grid === '4x4' ? 8 : 18;

  for (let i = 0; i < uniqueNumbers; i++) {
    const item = Math.floor(Math.random() * 36);
    if (!array.includes(item)) {
      array.push(item);
      array.push(item);
    } else {
      const increment = Math.floor(Math.random() * 36) + 36;
      array.push(item + increment);
      array.push(item + increment);
    }
  }

  return shuffleArray(array);
}
