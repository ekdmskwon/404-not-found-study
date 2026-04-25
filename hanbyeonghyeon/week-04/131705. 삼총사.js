/**
 * 풀이 과정
 * 1. 합이 0이 되는 조합을 찾기 위해 비트마스크를 사용
 * 2. 2비트를 number 배열의 길이만큼 늘려가면서 자릿 수가 1인 개수를 확인
 * 3. 자릿 수가 1이라면 해당 인덱스 요소를 사용했다는 의미
 *    -> 요소를 3개 고르면서 합이 0인 개수를 카운팅
 */

function solution(number) {
  let answer = 0;

  for (let i = 0; i < 1 << number.length; i++) {
    let combine = [];

    for (let j = 0; j < number.length; j++) {
      if (i & (1 << j)) {
        combine.push(number[j]);
      }
    }

    if (combine.length === 3) {
      let sum = combine.reduce((acc, curr) => acc + curr, 0);

      if (sum === 0) answer++;
    }
  }
  return answer;
}
