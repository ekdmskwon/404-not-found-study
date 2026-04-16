function solution(nums) {
  let count = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
      count++;
    }
  }

  return Math.min(count, nums.length / 2);
}

/**
 * 문제 이해
 * 폰켓몬 N마리 중 최대 N/2마리의 폰켓몬 가져오기
 * 단, 최대한 중복되지 않도록 가져오기
 */

/**
 * 문제 풀이
 * if문 사용해서 중복되는지 확인
 * 중복되지 않는다면 -> arr에 추가 및 count ++
 * 반환값 -> Math.min() 사용해서 두 값 중 더 작은 값 반환
 */
