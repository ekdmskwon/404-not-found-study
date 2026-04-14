function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }
  let min = Math.min(...arr);
  const minIndex = arr.indexOf(min);

  return arr.filter((_, index) => index != minIndex);
}
