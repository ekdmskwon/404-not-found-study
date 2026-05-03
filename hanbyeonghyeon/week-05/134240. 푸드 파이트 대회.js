/**
 * 풀이 과정
 * 1. 중앙에 물을 우선으로 배치한 answerArr을 선언
 * 2. 각 음식의 절반 만큼 양 옆으로 이어붙임
 * 3. answerArr을 join으로 붙이기
 */

function solution(food) {
  const answerArr = [0];

  for (let i = food.length - 1; i > 0; i--) {
    let size = ~~(food[i] / 2);

    for (let j = 0; j < size; j++) {
      answerArr.unshift(i);
      answerArr.push(i);
    }
  }

  return answerArr.join("");
}
