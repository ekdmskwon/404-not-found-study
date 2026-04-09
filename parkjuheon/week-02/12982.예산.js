// 문제: 예산
// 레벨: Level 1
// 문제 간략 설명: 부서별로 신청한 예산 d와 총 예산 budget이 주어질 때, 최대 몇 개의 부서에 예산을 지원할 수 있는지 구하는 문제
/*
풀이:
 1. 최대한 많은 부서에 지원해주기 위해 부서별 예산 배열 d를 오름차순으로 정렬
 2. 배열 d의 길이만큼 반복
 3. 각 부서의 예산을 sum 변수에 더하여
    3-1. 만약 sum이 budget을 넘어가면 반복을 종료
    3-2. sum이 budget을 넘지 않으면 지원 가능한 부서의 개수를 count 변수에 1씩 더함
*/

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let count = 0;
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum > budget) break;

    count++;
  }
  return count;
}
