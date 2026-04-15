// 문제: 약수의 개수와 덧셈
// 레벨: Level 1
// 문제 간략 설명: 주어진 수의 범위에서 약수의 개수가 짝수인 수는 더하고, 홀수인 수는 빼는 문제
/*
풀이:
 1. left부터 right까지 반복
 2. 각 수 i에 대한 약수의 개수를 구하기 위해 1부터 i까지 반복
 3. i를 j로 나누었을 때 나머지가 0이면 count를 증가
 4. count가 짝수이면 result에 해당 수를 더하고, 홀수이면 해당 수를 뺌
*/

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    result += count % 2 === 0 ? i : -i;
  }
  return result;
}
