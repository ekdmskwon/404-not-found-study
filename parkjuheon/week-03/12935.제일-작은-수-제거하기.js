// 문제: 제일 작은 수 제거하기
// 레벨: Level 1
// 문제 간략 설명: 주어진 배열에서 제일 작은 수를 제거한 배열을 반환하는 문제
/*
풀이:
 1. arr의 길이가 1이상이 아니면 -1을 반환
 2. arr에서 제일 작은 수를 Math.min() 함수를 이용하여 구함
 3. arr에서 제일 작은 수를 제외한 배열을 filter() 함수를 이용하여 구함
*/

function solution(arr) {
  if (arr.length < 2) return [-1];

  let min = Math.min(...arr);
  return arr.filter((num) => num !== min);
}
