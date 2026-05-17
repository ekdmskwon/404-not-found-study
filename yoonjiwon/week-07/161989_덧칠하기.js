function solution(n, m, section) {
  let answer = 0;
  let paintedUntil = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > paintedUntil) {
      answer++;

      paintedUntil = section[i] + m - 1;
    }
  }

  return answer;
}
// --풀이
// 페인트칠 횟수와 현재까지 페인트가 칠해진 벽의 위치 (끝 지점)를 추적하는 변수를 초기화한다.
// section 배열을 순회하면서, 현재 구간이 paintedUntil보다 크면 새로운 페인트 작업이 필요하므로 answer를 증가시키고,
// paintedUntil을 현재 구간 + m - 1로 업데이트하고 최종적으로 answer를 반환한다.
