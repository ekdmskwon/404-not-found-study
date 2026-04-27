function solution(number) {
  let answer = 0;
  const n = number.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// --풀이
// 3중 반복문으로 모든 3인 조합을 탐색하며, 세 숫자의 합이 0이 되는 경우를 찾아 카운트해서 반환한다.
