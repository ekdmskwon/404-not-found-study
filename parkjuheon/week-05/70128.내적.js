// 문제: 내적
// 레벨: Level 1
// 문제 간략 설명: 두 배열의 내적을 구하는 문제
/*
풀이:
 1. reduce 함수를 사용하여 배열 a의 각 원소와 배열 b의 각 원소를 곱한 값을 누적하여 반환
*/

function solution(a, b) {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}
