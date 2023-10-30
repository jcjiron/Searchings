function exponential(arr: number[], element: number): number {
  let size = 1;
  while (size < arr.length && arr[size] < element) {
    size *= 2;
  }

  return binary(arr, size, Math.floor(size/2), Math.min(size, arr.length-1))
}
