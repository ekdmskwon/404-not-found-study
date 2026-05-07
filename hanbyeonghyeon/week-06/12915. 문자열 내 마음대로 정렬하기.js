/**
 * 풀이 과정
 * 1. n 인덱스에 같은 문자가 있을 경우를 대비해 sort()로 우선 정렬
 * 2. 이후 sort()를 활용하여 해당 인덱스를 기준으로 재정렬
 */

function solution(strings, n) {
  return strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}
