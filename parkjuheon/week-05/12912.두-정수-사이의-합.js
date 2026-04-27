// 문제: 두 정수 사이의 합
// 레벨: Level 1
// 문제 간략 설명: 두 정수 사이에 있는 모든 정수의 합을 구하는 문제
/*
풀이:
 1. Math.min과 Math.max를 사용하여 a와 b 중 작은 값과 큰 값을 구함
 2. 작은 값부터 큰 값까지 반복하면서 모든 정수를 더하여 결과 반환
*/

function solution(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}
