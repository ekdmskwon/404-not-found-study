// 문제: 가장 가까운 같은 글자
// 레벨: Level 1
// 문제 간략 설명: 문자열 s에서 각 알파벳이 자신과 가장 가까운 곳에 있는 글자가 어디있는지 알아내는 문제
/*
풀이:
 1. 결과를 담을 배열 result와 각 문자의 마지막 등장 위치를 저장할 객체 lastIndex 선언
 2. 문자열을 순회하며 이전에 나온 적 없는 문자는 -1 저장
 3. 이전에 나온 문자는 lastIndex[s[i]]에 있는 값을 현재 위치에서 빼며 거리 계산
 4. 이후 현재 위치를 마지막 위치로 갱신하며 다시 순회
 5. 이후 결과 배열 result 반환
*/

function solution(s) {
  const result = [];
  const lastIndex = {};
  for (let i = 0; i < s.length; i++) {
    result.push(lastIndex[s[i]] === undefined ? -1 : i - lastIndex[s[i]]);
    lastIndex[s[i]] = i;
  }
  return result;
}
