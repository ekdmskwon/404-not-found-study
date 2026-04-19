// 문제: 행렬의 덧셈
// 레벨: Level 1
// 문제 간략 설명: 두 행렬 arr1과 arr2의 같은 위치에 있는 원소끼리 더하여 새로운 행렬을 반환하는 문제
/*
풀이:
 1. arr1의 각 행(row)과 해당 행의 인덱스(i)를 사용하여 map을 반복
 2. 각 행의 원소(value)와 해당 원소의 인덱스(j)를 사용하여 map을 반복
 3. value와 arr2[i][j]를 더하여 새로운 행렬의 원소로 반환
*/

function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((value, j) => value + arr2[i][j]));
}
