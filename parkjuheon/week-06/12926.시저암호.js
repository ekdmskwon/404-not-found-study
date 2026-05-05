// 문제: 시저 암호
// 레벨: Level 1
// 문제 간략 설명: 문자열의 각 알파벳을 n만큼 뒤로 밀어서 변환하는 문제
/*
풀이:
 1. 문자 s를 한 글자씩 배열로 나누어 담음
 2. 순환을 하며 공백이면 그대로 반환하고
 3. 공백이 아니면 현재 문자가 대문자인지 확인하여
 4. 문자를 아스키코드(charCodeAt)로 변환하여
 5. A를 기준으로 맞추어 n만큼 이동
 6. 알파벳 개수로 나누어 순환 처리 후 다시 65를 더하여 아스키 코드로 복원
 7. 이후 배열을 다시 문자로 변환
*/

function solution(s, n) {
  return s
    .split("")
    .map((c, i) =>
      c === " "
        ? " "
        : c === c.toUpperCase()
          ? String.fromCharCode(((s.charCodeAt(i) - 65 + n) % 26) + 65)
          : String.fromCharCode(((s.charCodeAt(i) - 97 + n) % 26) + 97),
    )
    .join("");
}
