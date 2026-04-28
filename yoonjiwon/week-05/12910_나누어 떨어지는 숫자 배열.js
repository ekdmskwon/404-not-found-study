function solution(arr, divisor) {
  let result = arr.filter((num) => num % divisor == 0);
  if (result.length == 0) {
    return [-1];
  }

  return result.sort((a, b) => a - b);
}

// --풀이
// filter 함수를 사용해 divisor로 나누어떨어지는 값만 골라낸다.
// 그 후, 걸러진 배열의 길이가 0이면 [-1]을 반환하고, 값이 존재하면 배열을 오름차순으로 정렬해 반환한다.
