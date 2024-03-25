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
  //* Return the last element in array
  lastElement: <T>(array: T[]): T => {
    return array[array.length - 1];
  },
  //* Remove Removes all occurrences of a specified value from an array
  remove: <T>(array: T[], value: T): T[] => {
    return array.filter((item) => item !== value);
  },
  //* Return the Mean
  mean: (array: number[]): number => {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
  },
  //* Return Median
  median: (array: number[]): number => {
    const sortedArr = array.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
      return sortedArr[mid];
    }
  },
  //* Return Mode
  mode: (array: number[]): number[] => {
    const counts = new Map<number, number>();
    array.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));

    let maxCount = 0;
    let modes: number[] = [];

    counts.forEach((count, num) => {
      if (count > maxCount) {
        maxCount = count;
        modes = [num];
      } else if (count === maxCount) {
        modes.push(num);
      }
    });

    return modes;
  },
};
