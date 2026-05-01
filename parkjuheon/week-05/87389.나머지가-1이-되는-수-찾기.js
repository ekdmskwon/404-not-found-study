// 문제: 나머지가 1이 되는 수 찾기
// 레벨: Level 1
// 문제 간략 설명: n을 x로 나누었을 때 나머지가 1이 되는 가장 작은 양의 정수 x를 반환하는 문제
/*
풀이:
 1. 1부터 n까지의 수 중에서 n을 나누었을 때 나머지가 1이 되는 수를 배열에 저장
 2. 배열의 첫 번째 요소가 가장 작은 양의 정수이므로 이를 반환
*/

function solution(n) {
  let answer = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) arr.push(i);
  }

  answer = arr[0];
  return answer;
}
