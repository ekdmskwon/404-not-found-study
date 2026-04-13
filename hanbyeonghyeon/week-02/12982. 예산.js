/**
 * 풀이 과정
 * 1. d 배열을 오름차순으로 정렬
 * 2. 최대로 지원해줄 수 있는 부서의 수는 가장 예산이 적게 드는 부서 순으로,
 *    예산을 초과하지 않는 선까지 더하는 것과 같다.
 */

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let count = 0;
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum > budget) {
      break;
    }

    count++;
  }

  return count;
}
