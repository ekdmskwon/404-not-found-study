// 문제: 추억점수
// 레벨: Level 1
// 문제 간략 설명: photo 배열에 있는 사진 중 각 인물의 그리움 점수를 계산하여 반환하는 문제
/*
풀이:
 1. name에 있는 인물과 yearning에 있는 그리움 점수 배열을 match 객체에 입력
 2. 이후 photo 배열을 map으로 순회하며 reduce를 이용하여 누적 결과를 내도록 함
 3. match 객체를 이용해 photo에 있는 사람과 일치하는 사람의 그리움 점수를 적용
 4. match에 없는 사람은 그리움 점수 0으로 계산 진행하여 결과 반환
*/

function solution(name, yearning, photo) {
  const match = {};
  for (let i = 0; i < name.length; i++) {
    match[name[i]] = yearning[i];
  }

  return photo.map((p) => p.reduce((acc, cur) => acc + (match[cur] || 0), 0));
}
