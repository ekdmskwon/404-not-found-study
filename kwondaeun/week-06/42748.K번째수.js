function solution(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    const sliced = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sliced[k - 1]);
  }

  return answer;
}

/**
 * 문제 이해
 * commands의 [i, j, k]마다 array의 i~j 구간을 잘라 정렬한 뒤,
 * k번째 수를 뽑아 결과 배열에 담아 반환
 */

/**
 * 문제 풀이
 * 구간 자르기(slice) -> 정렬(sort) -> k번째 값 선택 반복
 */
