/**
 * 풀이 과정
 * 1. Set 을 활용하여 폰켓몬 종류 수를 구하고, pieceSize 변수에 할당
 * 2. 연구실 총 폰켓몬 수인 N에 대하여, N/2 가 pieceSize 보다 작다면
 *    어차피 그 수만큼만 고를 수 있으므로 N/2를 반환
 * 3. 골라야 하는 수가 pieceSize보다 크다고 해도 종류 수를 초과할 수 없으므로
 *    pieceSize를 반환
 */

function solution(nums) {
  let pieceSize = 0;
  let size = nums.length / 2;

  const set = new Set(nums);
  pieceSize = set.size;

  if (size < pieceSize) {
    return size;
  } else {
    return pieceSize;
  }
}
