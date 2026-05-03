function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

/**
 * 문제 이해
 * 배열 파라미터 number 중 숫자 3개를 합친 수가 0일 때,
 * 만들 수 있는 방법의 개수를 반환
 */

/**
 * 문제 풀이
 * 삼중 for문을 사용해서 순회
 * if문 사용해서 각 배열값 비교 후 반환
 */