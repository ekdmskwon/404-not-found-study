function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

/**
 * 문제 이해
 * 길이가 같은 두 1차원 정수 배열 매개변수 a, b의 내적 반환
 */

/**
 * 문제 풀이
 * for문 사용해서 a의 길이까지 a와 b를 순회하면서 곱한 수를 변수에 저장
 */