function solution(number) {
  let result = "";

  for (let i = 0; i < number.length; i++) {
    if (i < number.length - 4) {
      result += "*";
    } else {
      result += number[i];
    }
  }
  return result;
}
/**
 * 문제 이해
 * 전화번호 뒷 4자리 제외한 모든 숫자를 *로 가린 문자열 반환
 */

/**
 * 문제 풀이
 * for문 사용해서 파라미터 길이만큼 순회
 * 파라미터 마지막 4자리를 *로 변경
 */
