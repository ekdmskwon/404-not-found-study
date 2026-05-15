// 문제: 과일 장수
// 레벨: Level 1
// 문제 간략 설명: 과일의 상태를 점검하여 최대 이익을 얻을 수 있는 조합을 구하는 문제
/*
풀이:
 1. 사과 점수를 내림차순으로 정렬
 2. 내림차순으로 정렬을하면 한 박스에 들어갈 사과 중 가장 낮은 점수의 사과가 가장 뒤에 있음
 3. 박스에 들어갈 사과의 개수 m만큼 이동하여 결과를 구함
*/

function solution(k, m, score) {
  let result = 0;

  score.sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    result += score[i] * m;
  }

  return result;
}
