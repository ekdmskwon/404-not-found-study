function solution(numbers) {
  const sums = new Set();
  
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.add(numbers[i] + numbers[j]);
    }
  }
  return [...sums].sort((a, b) => a - b);
}

/**
 * 문제 이해
 * 정수 배열 numbers에서 서로 다른 인덱스에 있는 수 2개를 골라 더해서 만들 수 있는 모든 수를
 * 배열에 오름차순으로 담아 반환
 */

/**
 * 문제 풀이
 * i < j 인 모든 쌍의 합을 Set에 넣어 중복 제거
 * 배열로 바꿔 오름차순 정렬
 */
