/**
 * 풀이 과정
 * 1. 각 문자 개수를 셀 cntP와 cntY 변수를 선언
 * 2. 문자열을 순회하며 각 문자 개수를 카운팅
 * 3. 두 문자 개수를 비교하여 같으면 true, 다르면 false를 출력
 */

function solution(s) {
  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "p" || s[i] == "P") cntP++;
    else if (s[i] == "y" || s[i] == "Y") cntY++;
  }

  return cntP === cntY ? true : false;
}
