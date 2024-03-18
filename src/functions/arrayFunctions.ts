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
  //* Check is Array is Empty
  isEmpty: (array: number[]): boolean => {
    return array.length === 0;
  },
  //* Remove Duplicates
  removeDuplicates: <T>(array: T[]): T[] => {
    return Array.from(new Set(array));
  },
  //* Return array of difference
  arrayDifference: <T>(array1: T[], array2: T[]): T[] => {
    const set2 = new Set(array2);
    return array1.filter((item) => !set2.has(item));
  },
  //* Shuffle Array
  shuffleArray: <T>(array: T[]): T[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  },
  //* Find Min Element
  minElement: (array: number[]): number => {
    return Math.min(...array);
  },
  //* Find Max Element
  maxElement: (array: number[]): number => {
    return Math.max(...array);
  },
  //* Check is element preset in array
  containsElement: <T>(array: T[], element: T): boolean => {
    return array.includes(element);
  },
  //* Remove all Falsy Values in array
  removeFalsyValues: <T>(array: T[]): T[] => {
    return array.filter(Boolean);
  },
  //* Return random element from array
  getRandomElement: <T>(array: T[]): T | undefined => {
    if (array.length === 0) {
      return undefined;
    }
    const randomIndex: number = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  },
};
