const linearSearch = (arr, target) => {
  for (const val of arr) {
    if (val === target) return true;
  }
  return false;
};

linearSearch([1, 2, 3, 4, 5], 3); // true
linearSearch([1, 2, 3, 4, 5], 6); // false
linearSearch(['c', 's', 'b', 'h', 'd'], 'b'); // true
linearSearch(['c', 's', 'b', 'h', 'd'], 'a'); // false
linearSearch(['abc', 'mpo', 'pqr', 'uvw', 'xyz'], 'xyz'); // false
linearSearch(['abc', 'mpo', 'pqr', 'uvw', 'xyz'], 'qrs'); // false
