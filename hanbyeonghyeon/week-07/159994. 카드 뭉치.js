/**
 * 풀이 과정
 * 1. 카드 뭉치와 목표 배열의 앞쪽부터 탐색하며 이동시킬 Pointer 변수를 각각 선언
 * 2. 목표 배열의 각 인덱스마다 해당 단어가 존재하는지 카드 뭉치를 확인
 * 3. 불가능하다면 바로 "NO"를 출력
 * 4. 모든 카드 뭉치를 순회하여 목표 배열을 만들었으면 "YES"를 출력
 */

function solution(cards1, cards2, goal) {
  let goalPointer = 0;
  let cards1Pointer = 0;
  let cards2Pointer = 0;

  while (goalPointer < goal.length) {
    if (cards1[cards1Pointer] === goal[goalPointer]) {
      goalPointer++;
      cards1Pointer++;
    } else if (cards2[cards2Pointer] === goal[goalPointer]) {
      goalPointer++;
      cards2Pointer++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
