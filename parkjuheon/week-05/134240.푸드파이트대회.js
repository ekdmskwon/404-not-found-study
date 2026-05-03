// 문제: 푸드 파이트 대회
// 레벨: Level 1
// 문제 간략 설명: 주어진 음식 개수로 좌우 대칭이 되도록 배치하고, 중앙에 물(0)을 넣는 문자열을 만드는 문제
/*
풀이:
 1. 음식 개수를 절반씩 나눔
 2. 왼쪽에 칼로리 낮은 순으로 배치
 3. 오른쪽은 왼쪽을 뒤집어서 생성
 4. 가운데 물 "0" 추가
*/

function solution(food) {
  let left = "";
  for (let i = 1; i < food.length; i++) {
    let foodDiv = Math.floor(food[i] / 2);
    for (let j = 0; j < foodDiv; j++) {
      left += i;
    }
  }
  let right = left.split("").reverse().join("");

  return left + "0" + right;
}
