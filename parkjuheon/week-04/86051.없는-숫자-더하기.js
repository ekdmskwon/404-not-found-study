// 문제: 없는 숫자 더하기
// 레벨: Level 1
// 문제 간략 설명: 0부터 9까지 숫자 중 numbers에 없는 숫자들을 모두 더하는 문제
/*
풀이:
 1. 0부터 9까지 반복하면서 numbers에 없는 숫자를 찾음
 2. 없는 숫자를 result에 더함
 3. 최종적으로 result를 반환
*/

function solution(numbers) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }

  return result;
}
