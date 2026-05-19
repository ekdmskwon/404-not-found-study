// 문제: 햄버거 만들기
// 레벨: Level 1
// 문제 간략 설명: ['빵','야채','고기','빵'] 순서일 때의 햄버거를 만들어 포장한 개수를 구하는 문제
/*
풀이:
 1. 포장한 개수를 파악하기 위한 count와 재료 순서를 파악하기 위한 stack 배열 생성
 2. 재료가 담겨있는 ingredient 배열의 길이만큼 반복
 3. 순서대로 stack에 push
 4. 만약 stack 길이가 4 이상이고, stack에서 마지막 요소 4개를 가져와 문자로 조합 후 비교
 5. 만약 순서가 일치하면 stack에서 제거 후 포장한 개수 count 증가
 6. ingredient 배열을 다 돈 후 count 결과 반환
*/

function solution(ingredient) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
      stack.splice(-4, 4);
      count++;
    }
  }
  return count;
}
