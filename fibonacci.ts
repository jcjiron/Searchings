function fibonacci(arr: number[], element: number): number | null {
  let fibM2 = 0;
  let fibM1 = 1;
  let fib = fibM1 + fibM2;

  while (fib < arr.length) {
    fibM2 = fibM1;
    fibM1 = fib;
    fib = fibM2 + fibM1;
  }

  let left = -1;
  while (fib > 1) {
    const i = Math.min(left + fibM2, arr.length - 1);
    if (arr[i] < element) {
      fib = fibM1;
      fibM1 = fibM2;
      fibM2 = fib - fibM1;
      left = i;
    } else if (arr[i] > element) {
      fib = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fib - fibM1;
    } else {
      return i;
    }
  }

  if (fibM1 && arr[left + 1] == element) {
    return left + 1;
  }

  return null;
}


console.log(`Element: ${4} found in index: ${fibonacci([1,2,3,4,5,6,7,8,9], 4)}`);