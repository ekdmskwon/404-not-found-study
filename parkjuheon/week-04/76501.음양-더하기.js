// 문제: 음양 더하기
// 레벨: Level 1
// 문제 간략 설명: 절댓값과 부호가 담긴 배열이 주어질 때, 실제 수들의 합을 구하는 문제
/*
풀이:
 1.  absolutes배열 또는 signs 배열의 길이만큼 반복
 2. signs 배열의 값이 true면 absolutes 배열의 값을 더하고, false면 absolutes 배열의 값을 뺌
*/

function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (result += absolutes[i]) : (result -= absolutes[i]);
  }
  return result;
}
