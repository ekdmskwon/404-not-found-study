/**
 * 풀이 과정
 * 1. 문제의 요구 사항대로 while 문을 순회
 *    1.1. 짝수라면 2로 나누기
 *    1.2. 홀수라면 3을 곱하고 1을 더하기
 *    1.3. 1이 될때까지 반복
 * 2. 반복문을 돌 때마다 1씩 증가하여 500이 넘으면 -1을, 넘지않으면 answer를 return
 */

function solution(num) {
  let answer = 0;

  if (num === 1) return 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    answer++;
  }

  if (answer > 500) {
    return -1;
  } else {
    return answer;
  }
}
