// 문제: 같은 숫자는 싫어
// 레벨: Level 1
// 문제 간략 설명: 배열에서 연속적으로 나타나는 숫자는 하나만 남기고 제거하는 문제
/*
풀이:
 1. 결과를 저장할 빈 배열 answer 선언
 2. arr의 길이만큼 반복하여 배열 탐색
 3. 현재 요소와 다음 요소가 다르면 answer 배열에 현재 요소 push하여 추가
 4. 반복이 끝난 후 answer 결과 반환
*/

function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
