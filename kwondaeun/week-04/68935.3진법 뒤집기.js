function solution(n) {
  let str = n.toString(3); // 3진법으로 변환한 n 문자열
  let reverseN = str.split("").reverse().join("");

  return parseInt(reverseN, 3);
}

/**
 * 문제 이해
 * 문자열 10진법 숫자 n을 3진법(0, 1, 2로 표현한 수)으로 변환
 * 앞뒤를 반전시키고, 다시 10진법으로 표현한 수를 반환
 */

/**
 * 문제 풀이
 * 10진법을 3진법으로 변환(toString()): 주어진 수를 3으로 나누면서 나머지를 나열
 * 숫자로 변환(parseInt()): 3진법 문자열로 변환한 수를 뒤집어서 10진법으로 변환 후 반환환
 */
