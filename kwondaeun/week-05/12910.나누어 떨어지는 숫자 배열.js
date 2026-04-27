function solution(array, divisor) {
  const result = array
    .filter((num) => num % divisor === 0)
    .sort((a, b) => a - b);

  return result.length > 0 ? result : [-1];
}

/**
 * 문제 이해
 * 파라미터 array의 각 요소 중 나누어 떨어지는 값을 오름차순으로 정렬 후 반환
 */

/**
 * 문제 풀이
 * divisor로 나누어 떨어지는 값만 filter 사용해서 추리기
 * sort 사용해서 오름차순 정렬
 * 결과가 비어 있으면 -1, 아니면 결과 배열을 반환
 */
