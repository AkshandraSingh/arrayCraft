module.exports = {
  //* Capital First Letter
  capitalizeFirstLetter: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  //* Convert into title Case
  toTitleCase: (str: string): string => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  },
  //* Reverse String
  reverseString: (str: string): string => {
    return str.split("").reverse().join("");
  },
  //* Check is string is Palindrome
  isPalindrome: (str: string): boolean => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  },
  //* Generate Random String
  generateRandomString: (length: number): string => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  },
};
