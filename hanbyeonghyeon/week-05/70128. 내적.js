/**
 * 풀이 과정
 * 1. 문제에서 주어진 내용대로 인덱스를 순회하며 내적을 계산
 */

const solution = (a, b) => {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
};
