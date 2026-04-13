function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      result++;
      budget -= d[i];
    } else {
      return result;
    }
  }
  return result;
}

/**
 * 문제 해석
 * b = 부서별로 신청한 금액이 들어있는 배열
 * budget = 예산
 * 부서에 물품을 지원하는 최대 부서 개수 return
 */

/**
 * 문제 풀이
 * 배열 d를 오름차순(sort((a, b) => a - b))으로 정렬
 * for문으로 d의 길이까지 반복 후,
 * if문 사용해서 요소가 예산 이하의 금액일 때 변수를 1씩 증가시키고, 예산은 예산-요소로 변수 저장
 */
