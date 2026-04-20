// 문제: 서울에서 김서방 찾기
// 레벨: Level 1
// 문제 간략 설명: 배열에서 "Kim"이 있는 위치를 찾아 "김서방은 x에 있다"라는 문자열을 반환하는 문제
/*
풀이:
 1. 배열 seoul의 길이만큼 반복
 2. 각 요소가 "Kim"인지 확인
 3. "Kim"이 발견되면 해당 인덱스(i)를 사용하여 문자열을 반환
*/

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}
