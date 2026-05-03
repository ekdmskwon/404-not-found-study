function solution(food) {
  let left = "";

  for (let i = 1; i < food.length; i++) {
    left += String(i).repeat(food[i] / 2);
  }
  const right = left.split("").reverse().join("");
  return left + "0" + right;
}

/**
 * 문제 이해
 * 푸드 파이트 대회 도시락 줄을 만드는 문제
 * 물(0)은 가운데 하나 두고,
 * 나머지 음식은 좌우 대칭으로 배치하며 왼쪽은 음식 번호 오름차순으로 채우기
 */

/**
 * 문제 풀이
 * String을 사용해서 숫자 i를 문자열로 바꿔 repeat에 넘김
 * repeat을 사용해서 같은 문자를 n번 이어 붙인 문자열을 반환해 왼쪽 줄을 만듬
 * +은 왼쪽 + "0" + 오른쪽으로 최종 문자열을 만듬
 */
