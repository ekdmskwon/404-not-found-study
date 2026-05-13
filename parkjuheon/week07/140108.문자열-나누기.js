// 문제: 문자열 나누기
// 레벨: Level 1
// 문제 간략 설명: 문장에서 기준 문자 x의 같은 개수와 다른 개수 카운트하는 문제
/*
풀이:
 1. 첫 문자 x 설정
 2. same / diff 카운트
 3. 같아지면 result++
 4. 다음 문자부터 새 시작
*/

function solution(s) {
  let result = 0;
  let same = 0;
  let diff = 0;
  let x = "";

  for (let char of s) {
    if (same === 0) {
      x = char;
    }

    if (char === x) {
      same++;
    } else {
      diff++;
    }

    if (same === diff) {
      result++;
      same = 0;
      diff = 0;
    }
  }

  if (same !== 0) result++;

  return result;
}
