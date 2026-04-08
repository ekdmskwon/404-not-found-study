function solution(i, j, k) {
  let sum = 0;
  for (let l = i; l <= j; l++) {
    const num = l.toString();
    for (let char of num) {
      if (char == k.toString()) {
        sum += 1;
      }
    }
  }
  return sum;
}

// --풀이
// i부터 j까지 반복하면서 각 숫자를 문자열로 변환한 뒤,
// for...of 문으로 각 자릿수를 순회하며 k와 일치하면 카운트를 증가시키는 방식이다.