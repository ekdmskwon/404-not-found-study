// 문제: 최소직사각형
// 레벨: Level 1
// 문제 간략 설명: 각 명함을 가로·세로 자유롭게 회전할 수 있을 때, 모든 명함이 들어가는 지갑의 최소 넓이를 구하는 문제
/*
풀이:
 1. 각 명함에서 더 긴 길이를 가로, 짧은 길이를 세로로 맞춤
 2. 모든 명함 중 가장 큰 가로값과 가장 큰 세로값을 구하면, 모든 명함이 들어갈 수 있는 최소 지갑 크기가 됨
 3. 가로 최대값 * 세로 최대값을 반환하여 지갑의 최소 넓이를 구함
*/

function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    let a = sizes[i][0];
    let b = sizes[i][1];

    let big = a > b ? a : b;
    let small = a > b ? b : a;

    if (big > width) width = big;
    if (small > height) height = small;
  }

  return width * height;
}
