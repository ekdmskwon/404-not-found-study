function solution(arr1, arr2) {
  let total = [];

  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[0].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    total.push(row);
  }
  return total;
}

/**
 * 문제 이해
 * 행, 열 크기가 같은 두 행렬의 값을 덧셈한 값 반환
 */

/**
 * 문제 풀이
 * 바깥 for문으로 행 순회하면서 행마다 빈 배열(row) 생성
 * 안쪽 for문으로 열 순회하면서 arr1[i][j] + arr2[i][j]을 row에 추가한 후 반환
 */
