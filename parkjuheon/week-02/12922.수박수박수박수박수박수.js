// 문제: 수박수박수박수박수박수?
// 레벨: Level 1
// 문제 간략 설명: 길이가 n이고, '수박수박수...' 패넡을 유지하는 문자열 리턴
/*
풀이:
 1. 결과를 저장할 빈 문자열 result 선언
 2. n만큼 반복하여 문자열 생성
 3. 짝수일 땐 '수', 홀수일 땐 '박'을 출력하여 result에 더함
 4. 반복이 끝난 후 result 결과 반환
*/

function solution(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += i % 2 === 0 ? "수" : "박";
  }
  return result;
}
