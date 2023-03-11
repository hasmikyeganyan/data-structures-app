const showComplexityResult = () => {
  const taskNumber = document.getElementById('number').value;
  let value = 'No such task';

  switch (taskNumber) {
    case '1':
      value = f1C;
      break;
    case '2':
      value = f2C;
      break;
    case '3':
      value = f3C;
      break;
    case '4':
      value = f4C;
      break;
    case '5':
      value = f5C;
      break;
    case '6':
      value = f6C;
      break;
    case '7':
      value = f7C;
      break;
  }

  document.getElementById('comp-result').innerHTML = value;
};

const showRecursionResult = () => {
  const strings = document.getElementById('strings').value;
  let value = isSortedByLength(JSON.parse(strings));

  document.getElementById('rec-result').innerHTML = value;
};

const showBinaryResult = () => {
  const numbers = document.getElementById('numbers').value;
  const range = document.getElementById('range').value;
  let value = inRange(JSON.parse(numbers), ...JSON.parse(range));

  document.getElementById('bin-result').innerHTML = value;
};

const deque = new Deque();
const showStructuresResult = (func) => {
  const value = document.getElementById('value').value;
  if (!value) return;

  let result;

  switch (func) {
    case 'push_left':
      result = deque.push_left(value);
      break;
    case 'push_right':
      result = deque.push_right(value);
      break;
    case 'pop_left':
      result = deque.pop_left();
      break;
    case 'pop_right':
      result = deque.pop_right();
      break;
  }

  console.log(result);
  result = 'Length: ' + result.length + ' Head: ' + result.head.val + ' Tail: ' + result.tail.val;

  document.getElementById('struct-result').innerHTML = result;
};
