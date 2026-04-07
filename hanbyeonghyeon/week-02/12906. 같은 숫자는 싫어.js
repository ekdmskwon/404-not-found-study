/**
 * 풀이 과정
 * 1. 최근 숫자를 담을 lastNum 변수를 생성
 * 2. arr의 첫 번째 숫자는 중복되지 않으므로 lastNum 초기화 및 answer에 담기
 * 3. 이후의 arr 숫자들은 lastNum과 같은지 판별하여, lastNum 초기화 및 answer에 담기
 */

function solution(arr) {
  let answer = [];
  let lastNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      lastNum = arr[i];
      answer.push(arr[i]);
      continue;
    }

    if (arr[i] !== lastNum) {
      lastNum = arr[i];
      answer.push(arr[i]);
    }
  }

  return answer;
}
