// Complexity: O(log n)
function inRange(arr, a, b) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] >= a) right = mid - 1;
    else left = mid + 1;
  }

  let start = left;
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] <= b) left = mid + 1;
    else right = mid - 1;
  }

  let end = right;
  return end - start + 1;
}
