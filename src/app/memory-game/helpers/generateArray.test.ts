import generateArray from './generateArray';
import '@testing-library/jest-dom';

function isPairValid(array: number[]) {
  const counts = array.reduce((acc: { [key: number]: number }, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.values(counts).every((count) => count === 2);
}

describe('generateArray', () => {
  it("returns an array with 8 unique pairs for grid: '4x4'", () => {
    const array = generateArray({ theme: 'numbers', grid: '4x4' });
    // array should contain 16 items
    expect(array).toHaveLength(16);
    // all items must be numbers
    expect(array.every((item) => typeof item === 'number')).toBe(true);
    // Each number should appear exactly twice
    expect(isPairValid(array)).toBe(true);
  });
  it("returns an array with 18 unique pairs for grid: '6x6'", () => {
    const array = generateArray({ theme: 'numbers', grid: '6x6' });
    // array should contain 36 items
    expect(array).toHaveLength(36);
    // all items must be numbers
    expect(array.every((item) => typeof item === 'number')).toBe(true);
    // Each number should appear exactly twice
    expect(isPairValid(array)).toBe(true);
  });
});
