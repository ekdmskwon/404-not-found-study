// 문제: 부족한 금액 계산하기
// 레벨: Level 1
// 문제 간략 설명: 놀이기구의 이용료와 가지고 있는 금액, 놀이기구의 이용 횟수가 주어질 때, 부족한 금액을 계산하는 문제
/*
풀이:
 1. 배열에 총 놀이기구 이용료를 저장
 2. reduce를 이용하여 배열의 누적합 계산
 3. 가지고 있는 금액이 사용 금액보다 크면 0을 반환,
 4. 그렇지 않으면 사용금액에서 money를 뺀 값을 반환
*/

function solution(price, money, count) {
  const result = Array.from(
    { length: count },
    (_, i) => price * (i + 1),
  ).reduce((acc, cur) => acc + cur, 0);
  return money > result ? 0 : result - money;
}
