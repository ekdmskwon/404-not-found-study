function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let total = b;

  for (let i = 0; i < a - 1; i++) {
    total += month[i];
  }

  return days[(total + 4) % 7];
}
// --풀이
// 각 달의 일수를 담은 month 배열을 생성한다.
// total 변수에 입력된 일 수 b를 초기값으로 설정하고 입력된 월 a보다 작은 달들의 일 수를 total에 더한다.
// 2016년 1월 1일이 금요일이므로, total에 4를 더한 후 7로 나눈 나머지를 이용하여 요일을 계산한다.
// 계산된 인덱스를 이용하여 days 배열에서 해당 요일을 반환한다.
