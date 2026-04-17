function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }
  let min = Math.min(...arr);
  const minIndex = arr.indexOf(min);

  return arr.filter((_, index) => index != minIndex);
}

// --풀이
// 배열의 개수가 1보다 작으면 [-1]을 반환
// 배열의 최솟값인 요소의 인덱스를 구해 filter를 통해 제거한 후 반환한다.