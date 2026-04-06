/**
 * 풀이 과정
 * 1. 등차수열의 합 공식에 의하여 총 비용인 totalPrice를 구한다.
 * 2. 삼항 연산자를 통해 모자라는 금액을 answer에 담아 출력한다.
 *    (0보다 작다면 0, 아니라면 모자라는 금액을 반환)
 */

function solution(price, money, count) {
  let totalPrice = ((price + price * count) * count) / 2;
  let answer = totalPrice - money < 0 ? 0 : totalPrice - money;
  return answer;
}
