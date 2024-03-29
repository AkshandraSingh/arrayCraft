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
  //* Convert Into Camel Case
  toCamelCase: (str: string): string => {
    const words: string[] = str.split("_");
    const camelCaseString: string =
      words[0] +
      words
        .slice(1)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    return camelCaseString;
  },
  //* Remove all White Space
  removeWhitespace: (str: string): string => {
    return str.replace(/\s/g, "");
  },
  //* Remove HTML tag in String
  removeHtmlTags: (str: string): string => {
    return str.replace(/<[^>]*>/g, "");
  },
  //* Make a array of words
  splitWords: (str: string): string[] => {
    return str.split(" ");
  },
  //* Shuffle the string
  shuffleString: (str: string): string => {
    const array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  },
  //* Check is string is valid email
  isValidEmailL: (str: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  },
  //* Repeat the string in multiple times
  repeatString: (str: string, count: number): string => {
    return str.repeat(count);
  },
  //* Return a array of urls extract from string
  extractUrls: (str: string): string[] => {
    return str.match(/https?:\/\/\S+/g) || [];
  },
  //* Extract the Emails from the string
  extractEmails: (str: string): string[] => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return str.match(emailRegex) || [];
  },
  //* Extract the Phone Numbers from the string
  extractPhoneNumbers: (str: string): string[] => {
    const phoneRegex =
      /(?:\+\d{1,2}\s*)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/g;
    return str.match(phoneRegex) || [];
  },
  //* Extract the Dates from the string
  extractDates: (str: string): string[] => {
    const dateRegex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
    return str.match(dateRegex) || [];
  },
};
