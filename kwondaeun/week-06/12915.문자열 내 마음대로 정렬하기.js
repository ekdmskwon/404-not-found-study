function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    return a[n].localeCompare(b[n]);
  });
}

/**
 * 문제 이해
 * 문자열 배열을 정렬할 때, 각 문자열의 n번째 글자를 기준으로 오름차순 정렬
 * 만약 n번째 글자가 같으면 문자열 전체를 사전순으로 정렬
 */

/**
 * 문제 풀이
 * n번째 문자를 먼저 비교하고, 같으면 문자열 전체를 사전순으로 비교
 */