// 문제: 문자열 내 마음대로 정렬하기
// 레벨: Level 1
// 문제 간략 설명: 각 문자열의 n번째 글자를 기준으로 정렬하는 문제
/*
풀이:
 1. strings 배열에서 두 문자열 a, b를 비교하여 정렬 순서 결정
    - 음수일 경우 a가 앞 / 양수일 경우 b가 앞 / 0일 경우 순서 유지
 2. 만약 n번째 문자가 같은 경우 전체 문자열을 기준으로 사전순 비교
    - localeCompare()은 문자열을 사전순으로 비교하는 함수
 3. n번째 문자가 다를 경우 비교하여 정렬
*/

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]),
  );
}
