// complexity: O(n^3)
function f1(m) {
  let n = 0;
  for (let i = 0; i < m; i++) for (let j = 0; j < i; j++) for (let k = 1; k <= j; k++) n++;

  return n;
}

// complexity: O(log(n))
function f2(n) {
  let i = 1;
  while (i <= n) {
    i *= 3;
  }
}

// complexity: O(log2(n))
function f3(n) {
  let i = 2; //
  while (i <= n) {
    i *= i;
  }
}

// complexity: O(2)
function f4(n) {
  if (n === 0) return;
  if (n % 2 == 0) return;
  f4(n - 1);
  return;
}

// complexity: O(n)
function f5(n, m) {
  if (n <= 0 && m <= 0) return;
  if (m > 0) return f(n, m - 2);
  if (n > 0) return f(n - 1, m);
  return;
}

let f1C = 'O(n^3)';
let f2C = 'O(log(n))';
let f3C = 'O(log2(n))';
let f4C = 'O(2)';
let f5C = 'O(n)';
let f6C = 'O(n)';
let f7C = 'O(log n)';
