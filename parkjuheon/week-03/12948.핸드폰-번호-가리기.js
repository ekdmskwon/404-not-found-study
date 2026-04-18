// 문제: 핸드폰 번호 가리기
// 레벨: Level 1
// 문제 간략 설명: 핸드폰 번호 뒤의 4자리를 제외한 나머지를 '*'로 가리는 문제
/*
풀이:
 1. phone_number의 길이에서 4를 뺀 만큼 '*'를 반복하여 생성
 2. phone_number의 뒤에서 4자리를 추출하여 '*'와 결합하여 반환
*/

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
