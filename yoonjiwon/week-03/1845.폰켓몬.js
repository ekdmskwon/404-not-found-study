function solution(nums) {
  let n = new Set(nums);
  if ([...n].length > [...nums].length / 2) {
    return [...nums].length / 2;
  }
  return [...n].length;
}

// --풀이
// set을 이용하여 중복을 제거한 원소의 개수와 배열 전체 길의의 절반 중 더 작은 값을 반환한다.