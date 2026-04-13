/**
 * 풀이 과정
 * 1. 문자열을 쪼개기 위해 split()
 * 2. sort() 메서드는 문자열을 기반으로 일어나므로 그대로 사용
 * 3. reverse() 메서드로 역순으로 변환
 * 4. join() 메서드로 쪼갠 배열을 문자열로 다시 합치기
 */

function solution(s) {
  return s.split("").sort().reverse().join("");
}
