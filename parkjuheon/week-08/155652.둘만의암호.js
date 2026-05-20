// 문제: 둘만의 암호
// 레벨: Level 1
// 문제 간략 설명: 두 문자열 s와 skip, 그리고 자연수 index를 가지고 암호 문자를 맞추는 문제
/*
풀이:
 1. 문자열 s의 첫 번째 문자를 가지고 반복 시작
 2. index만큼 반복하여 아스키코드를 이용해 1씩 더하고 다시 문자로 바꾸며 current 문자를 대입
 3. 만약 current가 z 이상이면 a로 다시 돌아감
 4. current 문자가 skip 문자열에 포함된 문자면 count를 늘려 다음 문자를 확인
 5. 이후 count가 index와 값이 같으면 해당 값이 원하는 결과이므로 result에 더하여 암호 문자 완성
*/

function solution(s, skip, index) {
  let result = "";

  for (const char of s) {
    let current = char;
    let count = 0;

    while (count < index) {
      current = String.fromCharCode(current.charCodeAt() + 1);

      if (current > "z") current = "a";

      if (!skip.includes(current)) count++;
    }
    result += current;
  }
  return result;
}
