
  function lineal(arr: number[], element: number): number | null {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return null;
}


console.log(`Element: ${4} found in index: ${search([1,2,3,4,5,6,7,8,9], 4)}`);

