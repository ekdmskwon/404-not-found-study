// 문제: 폰켓몬
// 레벨: Level 1
// 문제 간략 설명: 주어진 배열 nums에서 고를 수 있는 폰켓몬의 최대 종류 수를 구하는 문제
/*
풀이:
 1. nums 배열에서 중복을 제거하여 폰켓몬의 종류를 구함
 2. 고를 수 있는 폰켓몬의 최대 개수는 nums.length / 2
 3. 폰켓몬의 종류 수와 고를 수 있는 최대 개수 중 작은 값을 반환
*/

function solution(nums) {
  const typeCount = Object.keys(
    nums.reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {}),
  ).length;

  return Math.min(typeCount, nums.length / 2);
}
