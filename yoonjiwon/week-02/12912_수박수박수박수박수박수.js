function solution(n) {
  let a = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      a += "수";
    } else {
      a += "박";
    }
  }
  return a;
}

// --풀이
// for문을 통해 인덱스가 짝수면 "수", 홀수면 "박"을 추가해 문자열을 만들어 반환