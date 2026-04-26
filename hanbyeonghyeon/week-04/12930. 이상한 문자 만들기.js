/**
 * 풀이 과정
 * 1. 기존 문자열을 공백을 기준으로 split
 * 2. 문자 하나마다 각 인덱스를 순회하며, 짝수 자리 문자는 대문자,
 *    홀수 자리 문자는 소문자로 변경
 * 3. 변경한 문자를 answerStr 배열에 담음
 * 4. answerStr 배열을 join을 사용하여 공백을 포함하여 이어 붙임
 */

function solution(s) {
  let answerStr = [];
  let strArr = s.split(' ');

  for (let str of strArr) {
    let transStr = '';

    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        transStr += str[i].toUpperCase();
      } else {
        transStr += str[i].toLowerCase();
      }
    }

    answerStr.push(transStr);
  }

  return answerStr.join(' ');
}
