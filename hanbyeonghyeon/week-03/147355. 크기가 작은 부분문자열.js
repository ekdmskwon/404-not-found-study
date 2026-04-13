/**
 * 풀이 과정
 * 1. 문자열 p를 숫자로 변환하여 target으로 저장
 * 2. p의 길이만큼 t 문자열을 앞부터 쪼개서 반복문 순회
 * 3. 각 part를 숫자로 변환하고 target과 비교
 * 4. 작거나 같다면 answer를 1씩 증가
 */

function solution(t, p) {
  let target = Number(p);
  let len = p.length;
  let answer = 0;

  for (let i = len - 1; i < t.length; i++) {
    let part = Number(t.slice(i - len + 1, i + 1));

    if (target >= part) answer++;
  }

  return answer;
}
