/**
 * 풀이 과정
 * 1. left부터 right까지 순회하면서 약수의 개수를 카운팅
 * 2. 약수의 개수가 짝수면 더하고, 홀수면 뺌
 */

function solution(left, right) {
  let answer = 0;

  for (let num = left; num <= right; num++) {
    let cnt = 0;

    for (let n = 1; n <= num; n++) {
      if (num % n === 0) cnt++;
    }

    if (cnt % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
  }

  return answer;
}
