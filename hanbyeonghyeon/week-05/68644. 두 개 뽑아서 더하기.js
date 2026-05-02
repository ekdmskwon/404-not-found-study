/**
 * 풀이 과정
 * 1. 중복을 생략하는 Set 을 선언
 * 2. 배열을 순회하며 가능한 모든 경우의 수를 계산
 * 3. Set 을 정렬하여 출력
 */

function solution(numbers) {
  const sumSet = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumSet.add(numbers[i] + numbers[j]);
    }
  }

  const answer = [...sumSet].sort((a, b) => a - b);

  return answer;
}
