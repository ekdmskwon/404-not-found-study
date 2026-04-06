/**
 * 풀이 과정
 * 1. 문자열 s의 길이를 구해 len 변수에 할당
 * 2. 중간 지점을 파악하기 위해 2로 나눈 후, 소수점을 버리기 위해
 *    Math.floor 를 사용
 * 3. if 문을 통해 문자열이 홀수라면, 가운데 한 문자만,
 *    문자열이 짝수라면 가운데 두 문자를 slice 로 출력한다.
 */

function solution(s) {
  let len = s.length;
  let half = Math.floor(len / 2);

  if (len % 2 === 1) {
    return s.slice(half, half + 1);
  } else {
    return s.slice(half - 1, half + 1);
  }
}
