// 문제: 문자열 다루기 기본
// 레벨: Level 1
// 문제 간략 설명: 길이가 4또는 6이고, 숫자로만 구성된 문자열인지 확인
/*
풀이:
 1. 문자열 길이가 4 또는 6이 아니면 false 반환
 2. 문자열을 문자 배열로 반환
 3. every 메소드를 이용하여 배열의 모든 요소가 0~9 사이의 숫자인지 확인하여 true 또는 false 반환
*/

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return s.split("").every((ch) => ch >= "0" && ch <= "9");
}
