# Big O Notation for JavaScript Built-in Searching Techniques

## Introduction
Searching is a fundamental operation in computer science that involves finding a specific element within a collection of elements. Efficient searching techniques are crucial for optimizing performance in various applications.

## Types of Searching Algorithms
1. **Linear Search**: A simple search algorithm that checks each element in the list until the desired element is found or the list ends.
  * Worst-case time complexity: O(n)
  * Average-case time complexity: O(n)
  * Best-case time complexity: O(1)
2. **Binary Search**: An efficient algorithm for sorted arrays that repeatedly divides the search interval in half.
  * Worst-case time complexity: O(log n)
  * Average-case time complexity: O(log n)
  * Best-case time complexity: O(1)

## JavaScript Built-in Techniques for Searching

### `Array.prototype.indexOf()`
- **Description**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- **Syntax**: `array.indexOf(searchElement, fromIndex)`
- **Time Complexity**: O(n)

```javascript
const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3); // Returns 2
```

### `Array.prototype.lastIndexOf()`
- **Description**: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
- **Syntax**: `array.lastIndexOf(searchElement, fromIndex)`
- **Time Complexity**: O(n)

```javascript
const array = [1, 2, 3, 4, 3];
const index = array.lastIndexOf(3); // Returns 4
```

### `Array.prototype.find()`
- **Description**: Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
- **Syntax**: `array.find(callback(element[, index[, array]])[, thisArg])`
- **Time Complexity**: O(n)

```javascript
const array = [1, 2, 3, 4, 5];
const found = array.find(element => element > 3); // Returns 4
```

### `Array.prototype.findIndex()`
- **Description**: Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
- **Syntax**: `array.findIndex(callback(element[, index[, array]])[, thisArg])`
- **Time Complexity**: O(n)

```javascript
const array = [1, 2, 3, 4, 5];
const index = array.findIndex(element => element > 3); // Returns 3
```

### `Array.prototype.includes()`
- **Description**: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- **Syntax**: `array.includes(searchElement, fromIndex)`
- **Time Complexity**: O(n)

```javascript
const array = [1, 2, 3, 4, 5];
const hasElement = array.includes(3); // Returns true
```

## Conclusion
Understanding and utilizing built-in JavaScript methods for searching can greatly simplify and optimize the process of finding elements within arrays. Each method has its own use case and can be chosen based on the specific requirements of the task at hand.
 Searching Notes
