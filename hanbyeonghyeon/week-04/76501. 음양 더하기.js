/**
 * 풀이 과정
 * 1. signs 배열을 순회하며 boolean 값에 따라 동일한 index의
 *    absolutes의 누적합을 계산
 */

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) answer += absolutes[i];
    else answer -= absolutes[i];
  }

  return answer;
}
