function sublists(lists: number[][], element: number): [number, number] | null {
  for (let i = 0; i < lists.length; i++) {
    const sublist = lists[i];
    const index = sublist.indexOf(element);
    if (index !== -1) {
      return [i, index];
    }
  }

  return null;
}
