module.exports = {
  sumArray: (array: number[]): number => {
    //* Find the sum of all array elements
    return array.reduce((a, b) => a + b, 0);
  },
  calculateAverage: (array: number[]): number => {
    //* Calculate Average of array elements
    if (array.length === 0) return 0;
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  },
  findMaxValue: (array: number[]): number => {
    //* Find the Max element value in array
    return Math.max(...array);
  },

  isEmpty: (array: number[]): boolean => {
    return array.length === 0;
  },

  removeDuplicates: <T>(array: T[]): T[] => {
    return Array.from(new Set(array));
  },

  arrayDifference: <T>(array1: T[], array2: T[]): T[] => {
    const set2 = new Set(array2);
    return array1.filter((item) => !set2.has(item));
  },
};
