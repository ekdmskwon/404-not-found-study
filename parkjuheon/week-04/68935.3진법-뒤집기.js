// 문제: 3진법 뒤집기
// 레벨: Level 1
// 문제 간략 설명: 자연수 n을 3진법으로 바뀐 뒤 뒤집은 후, 다시 10진법으로 바꾸는 문제
/*
풀이:
 1. toString(3)을 통해 자연수 n을 3진법으로 변화
 2. split('')로 각 자리수를 배열로 분리 후 뒤집기(reverse())
 3. join('')으로 문자열을 합친 뒤 parsInt( , 3)으로 10진법으로 변환
*/

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
