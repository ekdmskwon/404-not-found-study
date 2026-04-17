function solution(number, limit, power) {
  let totalIron = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;

    const sqrt = Math.sqrt(i);
    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        if (j === i / j) {
          count += 1;
        } else {
          count += 2;
        }
      }
    }

    if (count > limit) {
      totalIron += power;
    } else {
      totalIron += count;
    }
  }

  return totalIron;
}

// --풀이
// 1부터 number까지 각 숫자의 약수 개수를 구하되, 연산 속도를 높이기 위해 제곱근까지만 나누어 떨어지는 수를 찾아 쌍으로 카운트한다.
// 구해진 약수 개수가 limit를 초과하는 기사에게는 지정된 power를 더하고, 모든 기사의 공격력을 합산하여 필요한 철의 총 무게를 산출한다.
