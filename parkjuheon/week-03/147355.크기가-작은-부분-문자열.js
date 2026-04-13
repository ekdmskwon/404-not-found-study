// 문제: 크기가 작은 부분 문자열
// 레벨: Level 1
// 문제 간략 설명: 문자열 t에서 문자열 p보다 크지 않은 부분 문자열의 개수를 구하는 문제
/*
풀이:
 1. 문자열 t에서 문자열 p와 같은 길이의 부분 문자열을 구하기 위해 for문을 이용하여 문자열 t를 순회하면서, 문자열 p와 같은 길이의 부분 문자열을 구해야 함
 2. 구한 부분 문자열이 문자열 p보다 크지 않은지 비교하여, 조건을 만족하는 부분 문자열의 개수를 셈
*/

function solution(t, p) {
  let result = [];
  let len = p.length;

  for (let i = 0; i <= t.length - len; i++) {
    result.push(t.slice(i, i + len));
  }

  result = result.filter((num) => Number(num) <= Number(p));

  return result.length;
}
