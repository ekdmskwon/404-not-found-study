/**
 * 풀이 과정
 * 1. 기사가 사용할 무기의 공격력을 계산할 calAD 함수 구현
 *    - 1이면 1을 return
 *    - 해당 수를 1부터 끝까지 순회하면 비용이 너무 크기 때문에, 제곱근까지만 순회하여
 *      약수인지 확인
 *    - 나누어 떨어지는 제곱근이 없다면 기준으로 약수의 수를 x2
 *    - 제곱근이 있다면 마지막에 개수 -1
 *    - limit을 넘는다면 power를 return, 아니라면 cnt를 return
 * 2. 기사단원의 번호를 순회하며 calAD 함수를 실행
 * 3. 실행한 값들을 누적하여 더함
 */

const solution = (number, limit, power) => {
  const calAD = (number) => {
    if (number === 1) return 1;

    let cnt = 0;
    let endPoint = ~~Math.sqrt(number);

    for (let i = 1; i <= endPoint; i++) {
      if (number % i === 0) cnt++;
    }

    cnt *= 2;

    if (endPoint !== 1 && number / endPoint === endPoint) {
      cnt--;
    }

    if (cnt > limit) {
      return power;
    }

    return cnt;
  };

  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += calAD(i);
  }

  return answer;
};
