function solution(a, b) {
  let len = a.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    result += a[i] * b[i];
  }
  return result;
}

// --풀이
// for문을 통해 배열의 길이 만큼 a,b 배열의 같은 인덱스 요소를 곱한 값을 합산해 최종 반환한다.
