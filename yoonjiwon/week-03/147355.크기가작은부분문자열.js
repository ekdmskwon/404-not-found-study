function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let a = t.slice(i, i + p.length);
    if (a <= p) {
      result += 1;
    }
  }
  return result;
}

// --풀이
// 문자열 t에서 p 길이만큼 부분 문자열을 순회하며 p보다 작거나 같은 경우마다 
// result를 1씩 증가시켜 최종 개수를 반환한다.