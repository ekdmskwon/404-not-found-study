/**
 * 풀이 과정
 * 1. 해당 숫자에서 k가 몇 번 등장하는지 계산하는 count 함수를 만듦
 *  1.1 count 함수는 num을 파라미터로 사용
 *  1.2 num 을 10으로 나눈 나머지를 활용하여, 1의 자리 숫자씩 뜯어서 확인
 * 2. i부터 j까지를 순회하면서 count 함수를 사용하여 k를 카운팅
 */

function solution(i, j, k) {
  let answer = 0;

  function count(num) {
    while (num > 0) {
      let tg = num % 10;

      if (tg === k) {
        answer++;
      }

      num = ~~(num / 10);
    }
  }

  for (let a = i; a <= j; a++) {
    count(a);
  }

  return answer;
}
