// 문제: 기사단원의 무기
// 레벨: Level 1
// 문제 간략 설명: 기사 단원의 무기 개수를 구하는 문제
/*
풀이:
 1. 1부터 number까지 반복
 2. 각 수 i에 대한 약수의 개수를 구하기 위해 1부터 i의 제곱근까지 반복
 3. i를 j로 나누었을 때 나머지가 0이면 count를 증가
 4. j가 i의 제곱근이 아니면 count를 한 번 더 증가
 5. count가 limit보다 크면 result에 power를 더하고, 그렇지 않으면 count를 더함
*/

function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++;
        if (j !== i / j) count++;
      }
    }
    result += count > limit ? power : count;
  }

  return result;
}
