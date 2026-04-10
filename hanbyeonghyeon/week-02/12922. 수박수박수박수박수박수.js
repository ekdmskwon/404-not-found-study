/**
 * 풀이 과정
 * 1. 반복할 패턴 변수를 선언
 * 2. n의 절반 만큼 반복하여 더하고, n이 홀수라면 '수' 글자를 한번 더 더한다.
 */

function solution(n) {
  let pattern = "수박";
  let answer = "";

  answer = pattern.repeat(n / 2);

  if (n % 2 === 1) {
    answer += "수";
  }

  return answer;
}
