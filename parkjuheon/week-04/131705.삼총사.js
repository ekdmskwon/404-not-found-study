// 문제: 삼총사
// 레벨: Level 1
// 문제 간략 설명: 정수 배열이 주어질 때, 세 수를 골라 더했을 때 0이 되는 경우의 수를 구하는 문제
/*
풀이:
 1. 배열의 길이만큼 반복
 2. 세 수를 골라 더했을 때 0이 되는 경우를 카운트
*/

function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) count++;
      }
    }
  }
  return count;
}
