/**
 * 풀이 과정
 * 1. 유클리드 호제법을 사용하여 해결
 * 2. 두 수 a, b (a > b)의 최대공약수(GCD)는 b와 a % b의 최대공약수와 같다.
 *    (b가 0이 될 때까지 만복하여 마지막에 남은 수가 최대공약수)
 * 3. 두 수 a, b (a > b)의 최소공배수(LCM)은 (a * b) / GCD(a, b) 와 같다.
 */

function solution(n, m) {
  let num1 = Math.max(n, m);
  let num2 = Math.min(n, m);

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  let resultGCD = gcd(num1, num2);
  let resultLCM = (num1 * num2) / gcd(num1, num2);

  return [resultGCD, resultLCM];
}
