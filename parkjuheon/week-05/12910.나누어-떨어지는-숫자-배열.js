// 문제: 나누어 떨어지는 숫자 배열
// 레벨: Level 1
// 문제 간략 설명: 배열 arr의 각 원소 중 divisor로 나누어 떨어지는 원소를 오름차순으로 정렬하여 반환하는 문제
/*
풀이:
 1. 배열 arr의 각 원소를 순회하면서 divisor로 나누어 떨어지는지 확인
 2. 나누어 떨어지는 원소를 resultArr에 추가
 3. resultArr가 비어있으면 -1을 추가
 4. resultArr를 오름차순으로 정렬하여 반환
*/

function solution(arr, divisor) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      resultArr.push(arr[i]);
    }
  }
  if (resultArr.length === 0) resultArr.push(-1);
  return resultArr.sort((a, b) => a - b);
}
