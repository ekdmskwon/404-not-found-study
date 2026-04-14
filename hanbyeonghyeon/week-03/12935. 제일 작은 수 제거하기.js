/**
 * 풀이 과정
 * 1. 배열의 길이와 배열 내 최솟값을 저장
 * 2. 배열의 길이가 1이라면 [-1]을 return
 * 3. 배열의 길이가 1 이상이면, filter를 통해 min이 아닌 값들을 배열로 출력
 */

function solution(arr) {
  let len = arr.length;
  let min = Math.min(...arr);

  if (len === 1) {
    return [-1];
  }

  return arr.filter((num) => num !== min);
}
