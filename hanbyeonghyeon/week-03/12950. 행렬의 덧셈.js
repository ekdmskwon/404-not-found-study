/**
 * 풀이 과정
 * 1. 가로, 세로 길이를 row, column에 할당
 * 2. 이중 for문으로 한 줄씩 더해서 part에 저장
 * 3. 한 줄이 완성되면 answer에 더함
 */

function solution(arr1, arr2) {
  let answer = [];
  let row = arr1[0].length;
  let column = arr1.length;

  for (let i = 0; i < column; i++) {
    let part = [];

    for (let j = 0; j < row; j++) {
      part.push(arr1[i][j] + arr2[i][j]);
    }

    answer.push(part);
  }

  return answer;
}
