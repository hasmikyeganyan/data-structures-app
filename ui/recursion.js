// Complexity: O(n)
function isSortedByLength(arr) {
  if (!Array.isArray(arr)) return 'Invalid input';
  if (arr.length === 1) return true;
  if (arr[0].length > arr[1].length) return false;
  return isSortedByLength(arr.slice(1));
}
