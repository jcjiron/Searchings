function binary(arr: number[], element: number):number | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const half = Math.floor((left + right) / 2);

    if (arr[half] === element) {
      return half;
    } else if (arr[half] < element) {
      left = half + 1;
    } else {
      right = half - 1;
    }
  }

  return null;
}


console.log(`Element: ${4} found in index: ${binary([1,2,3,4,5,6,7,8,9], 4)}`);