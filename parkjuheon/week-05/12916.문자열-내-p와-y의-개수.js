// 문제: 문자열 내 p와 y의 개수
// 레벨: Level 1
// 문제 간략 설명: 문자열 내에 'p'와 'y'의 개수를 비교하는 문제
/*
풀이:
 1. 문자열을 대문자로 변환한 후 'P'와 'Y'의 개수를 비교하여 반환
*/

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
