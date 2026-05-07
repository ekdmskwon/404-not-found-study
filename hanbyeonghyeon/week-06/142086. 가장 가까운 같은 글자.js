/**
 * 풀이 과정
 * 1. 각각의 위치 차이를 담을 객체를 선언
 * 2. 배열을 순회하며 객체에 해당 글자가 없으면 -1을, 있으면 위치 차이를 배열에 삽입
 */

function solution(s) {
  const Alpha = {};
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in Alpha) {
      answer.push(i - Alpha[s[i]]);
    } else {
      answer.push(-1);
    }

    Alpha[s[i]] = i;
  }

  return answer;
}
