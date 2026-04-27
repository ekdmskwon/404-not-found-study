/**
 * 풀이 과정
 * 1. 두 끝의 합을 더한 뒤, 총 수의 개수만큼 곱하고 2로 나눈다.
 * 2. 연속된 수의 합 공식을 활용
 */

const solution = (a, b) => {
  let sum = a + b;
  let size = a >= b ? a - b + 1 : b - a + 1;
  return (sum * size) / 2;
};
