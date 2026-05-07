/**
 * 풀이 과정
 * 1. commands 내부의 i, j, k를 구조분해
 * 2. 문제에서 주어진 조건대로 slice()로 영역만큼을 자름
 * 3. 자른 영역 내에서 정렬
 * 4. k번째 수를 추출하여 answer 배열에 삽입
 */

function solution(array, commands) {
  let answer = [];

  for (let [i, j, k] of commands) {
    const newArr = array.slice(i - 1, j).sort((a, b) => a - b);

    answer.push(newArr[k - 1]);
  }

  return answer;
}
