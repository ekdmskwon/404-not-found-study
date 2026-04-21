/**
 * 풀이 과정
 * 1. n을 3진법으로 변환
 * 2. 3진법으로 변환한 수를 쪼개서 각자리수를 10진법으로 변환하며 reduce로 누적합을 계산
 */

function solution(n) {
  let transTh = n.toString(3);
  let reverse = transTh.split("").reduce((acc, curr, idx) => {
    return acc + Number(curr) * Math.pow(3, idx);
  }, 0);
  return reverse;
}
