function solution(d, budget) {
  let result = d.length;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (i of d) {
    sum += i;
  }
  while (d.length !== 0) {
    if (budget >= sum) {
      return result;
    }
    sum -= d[d.length - 1];
    result -= 1;
    d.pop();
  }
  return result;
}


// --풀이
// 배열 d를 오름차순 정렬한 뒤 전체 합을 구하고,
// 예산을 초과하면 가장 큰 값부터 제거하면서 합과 부서 수를 줄인다.
// 이후 합이 budget 이하가 되면 남은 부서 수를 반환한다.