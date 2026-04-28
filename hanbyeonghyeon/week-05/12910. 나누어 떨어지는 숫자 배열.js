/**
 * 풀이 과정
 * 1. 나누어 떨어지는 수들을 filter로 뽑고, sort로 정렬
 * 2. 배열의 길이가 0 이라면 [-1]을 return
 */

function solution(arr, divisor) {
  let answer = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);

  if (answer.length === 0) {
    return [-1];
  } else {
    return answer;
  }
}
