/**
 * 풀이 과정
 * 1. 비어있는 카운팅 배열을 선언
 * 2. numbers 를 순회하며 등장한 숫자를 1로 변경
 * 3. 배열을 순회하며 1이 아닌 수들을 더함
 */

const solution = (numbers) => {
  let answer = 0;
  let numCheck = new Array(10).fill(0);
  for (let num of numbers) {
    numCheck[num] = 1;
  }

  for (let i = 0; i < 10; i++) {
    if (numCheck[i] === 0) answer += i;
  }

  return answer;
};
