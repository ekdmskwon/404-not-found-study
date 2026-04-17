function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count += 2;
        if (j * j === i) count--;
      }
    }
    answer += count > limit ? power : count;
  }
  return answer;
}

/**
 * 문제 이해
 * 1번 ~ number번 기사까지 각자 무기를 받아야함
 * 기사 i번의 무기 공격력 = i의 약수의 개수
 * 단, 약수의 개수가 limit을 넘어가면 power로 대체
 * 모든 기사의 무기 공격력의 합을 반환
 */

/**
 * 문제 풀이
 * 중첩 for문 사용해서 i의 약수의 개수를 구함
 * i의 약수의 개수를 구할 때, j * j === i 인 경우를 고려해서 count를 1 감소시킴
 */
