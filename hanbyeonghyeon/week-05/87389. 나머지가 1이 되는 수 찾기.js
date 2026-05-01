/**
 * 풀이 과정
 * 1. 제한 사항의 수 까지 순회하며 나머지가 1이 되는 수 찾기
 */

const solution = (n) => {
  for (let i = 1; i <= 1000000; i++) {
    if (n % i === 1) {
      return i;
    }
  }
};
