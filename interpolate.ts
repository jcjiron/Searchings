function interpolate(arr: number[], element: number): number | null {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right && element >= arr[left] && element <= arr[right]) {
    
    const pos = left + Math.floor((right - left) / (arr[right] - arr[left])) * (element - arr[left]);
    console.log(pos);

    if (arr[pos] === element) {
      return pos;
    } else if (arr[pos] < element) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }
  return null;
}


console.log(`Element: ${12} found in index: ${interpolate([11,12,13,14,15,16,17], 12)}`);