export default function sortBy(array, key, descending = false) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }

  const mid = Math.floor(length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  const arrayOne = sortBy(firstHalf, key, descending);
  const arrayTwo = sortBy(secondHalf, key, descending);

  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    const valueOne = arrayOne[i][key];
    const valueTwo = arrayTwo[j][key];

    if ((descending && valueOne >= valueTwo) || (!descending && valueOne <= valueTwo)) {
      merged.push(arrayOne[i]);
      i++;
    } else {
      merged.push(arrayTwo[j]);
      j++;
    }
  }

  while (i < arrayOne.length) {
    merged.push(arrayOne[i]);
    i++;
  }

  while (j < arrayTwo.length) {
    merged.push(arrayTwo[j]);
    j++;
  }
  // console.log('Show me the merged list',merged)
  return merged;
}
