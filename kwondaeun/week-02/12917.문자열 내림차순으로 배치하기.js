function solution(s) {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    .join("");
}

/**
 * 문제 해석
 * 파라미터 s를 아스키코드로 변경한 후 내림차순
 * 문자열 형태로 반환
 * 대문자 < 소문자로 간주
 */

/**
 * 문제 풀이
 * 문자열을 split() 사용해서 문자 단위로 분리 후 배열로 변환
 * charCodeAt(0) 메서드 활용해서 파라미터를 숫자로 변경
 * 내림차순 정렬 sort((a, b) => b - a)
 */
