// 문제: k의 개수
// 레벨: Level 1
// 문제 간략 설명: i부터 j까지의 숫자 중 k가 몇 번 나오는지 세는 문제
/*
풀이:
 1. 결과를 저장할 result 변수 선언
 2. i부터 j까지 반복하여 숫자 탐색
 3. 각 숫자를 문자로 만들어 배열로 만들고
 4. 각 숫자의 배열에서 k와 같은 숫자만 filter해서 개수를 세어 result에 더함
 5. 반복이 끝난 후 result 결과 반환
*/

function solution(i, j, k) {
  let result = 0;
  for (let n = i; n <= j; n++) {
    result += n
      .toString()
      .split("")
      .filter((num) => num === k.toString()).length;
  }
  return result;
}
