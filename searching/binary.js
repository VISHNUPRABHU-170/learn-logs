const binarySearch = (arr, target, left, right) => {
  if (left > right) return false;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return true;
  else if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  else return binarySearch(arr, target, mid + 1, right);
};

binarySearch([1, 2, 3, 4, 5], 3, 0, 4); // true;
binarySearch([1, 2, 3, 4, 5, 6], 5, 0, 5); // false;
