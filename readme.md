# ArrayCraft 🛠️

ArrayCraft is a powerful utility package designed to supercharge your array and string manipulation tasks in JavaScript. With a wide range of functions for arrays and strings, ArrayCraft simplifies common operations, making your coding experience more efficient and enjoyable.

## Array Functions

- `sumArray`: Find the sum of all array elements.
- `calculateAverage`: Calculate the average of array elements.
- `findMaxValue`: Find the maximum element value in an array.
- `isEmpty`: Check if an array is empty.
- `removeDuplicates`: Remove duplicate elements from an array.
- `arrayDifference`: Find the difference between two arrays.
- `shuffleArray`: Randomly shuffle the elements of an array.
- `minElement`: Find the minimum element in an array.
- `maxElement`: Find the maximum element in an array.
- `containsElement`: Check if an element is present in an array.
- `removeFalsyValues`: Remove all the falsy values from an array.
- `getRandomElement`: Return random element from an array.
- `lastElement`: Return Last element in the string.
- `remove`: Removes all occurrences of a specified value from an array.
- `mean`: Return the Mean.
- `median`: Return Median.
- `mode`: Return Mode.

## String Functions

- `capitalizeFirstLetter`: Capitalize the first letter of a string.
- `toTitleCase`: Convert a string into title case.
- `reverseString`: Reverse a string.
- `isPalindrome`: Check if a string is a palindrome.
- `generateRandomString`: Generate a random string of a specified length.
- `toCamelCase`: Convert String into Camel case.
- `removeWhitespace`: Remove All the white spaces in string.
- `removeHtmlTags`: Remove HTML tag in String.
- `splitWords`: Make a array of words.
- `shuffleString`: Shuffle the string.
- `isValidEmailL`: Check is string is valid email.
- `repeatString`: Repeat the string in multiple times.
- `extractUrls`: Return a array of urls extract from string.
- `extractEmails`: Extract the Emails from the string.
- `extractPhoneNumbers`: Extract the Phone Numbers from the string.
- `extractDates`: Extract the Dates from the string.

## Installation

You can install ArrayCraft via npm:

```bash
npm install arraycraft
```

## Usage

```javascript
const { arrayFunctions, stringFunctions } = require("arraycraft");

// Example usage of array functions
const numbers = [1, 2, 3, 4, 5];
console.log(arrayFunctions.sumArray(numbers)); // Output: 15

// Example usage of string functions
console.log(stringFunctions.capitalizeFirstLetter("hello")); // Output: Hello
```

## Why ArrayCraft?

- **Efficiency**: Perform common array and string operations with ease.
- **Flexibility**: Supports various data types and scenarios.
- **Reliability**: Well-tested functions for reliable results.
- **Simplicity**: Clean and straightforward API for seamless integration.

## Contribution

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request on [GitHub](https://github.com/AkshandraSingh/arrayCraft).

## License

ArrayCraft is licensed under the [MIT License](https://opensource.org/licenses/MIT).
