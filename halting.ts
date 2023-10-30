function halting(arr: number[], element: number): number | null {
  const halting = Math.floor(Math.sqrt(arr.length));
  let left = 0;

  while (arr[Math.min(left + halting, arr.length - 1)] < element) {
    left += halting;
  }

  for (let i = left; i < Math.min(left + halting, arr.length); i++) {
    if (arr[i] == element) {
      return i;
    }
  }

  return null;
}

console.log(`Element: ${12} found in index: ${halting([11,12,13,14,15,16,17], 12)}`);