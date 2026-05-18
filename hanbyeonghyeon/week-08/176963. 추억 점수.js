/**
 * 풀이 과정
 * 1. 각 인물의 그리움 점수를 저장할 MissingPoint 객체를 선언
 * 2. name과 yearing을 순회하며 그리움 점수를 저장
 * 3. photo를 순회하며 객체에 존재하는 점수를 합산
 */

function solution(name, yearning, photo) {
  const MissingPoint = {};
  const answer = [];

  for (let i = 0; i < name.length; i++) {
    MissingPoint[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;

    for (let name of photo[i]) {
      if (MissingPoint[name] !== undefined) {
        sum += MissingPoint[name];
      }
    }

    answer.push(sum);
  }

  return answer;
}
