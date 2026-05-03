function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1 + i; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  let sort_arr = [...new Set(arr)];
  return sort_arr.sort((a, b) => a - b);
}

// --풀이
// 이중반복문을 통해 배열 요소 두 수의 합을 더한 배열을 구하고 set()으로 중복을 없애고 sort를 통해
// 오름차순으로 반환한다.
