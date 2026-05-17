/**
 * 풀이 과정
 * 1. 달별 일수를 담은 배열을 선언
 * 2. 요일을 담은 배열을 선언
 * 3. 총 일수를 계산
 * 4. 총 일수를 요일 배열의 인덱스로 나눈 나머지를 반환
 */

function solution(a, b) {
  const calendar = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ];
  let totalday = 0;
  
  for(let i = 0; i < a - 1; i++){
      totalday += calendar[i];
  }
  
  totalday += b + 4;

  return day[totalday % 7];
}