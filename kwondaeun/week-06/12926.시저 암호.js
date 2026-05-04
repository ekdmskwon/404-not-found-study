function solution(s, n) {
  let answer = "";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const step = n % 26;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === " ") {
      answer += " ";
      continue;
    }

    let idx = lower.indexOf(ch);
    if (idx !== -1) {
      answer += lower[(idx + step) % 26];
      continue;
    }

    idx = upper.indexOf(ch);
    if (idx !== -1) {
      answer += upper[(idx + step) % 26];
      continue;
    }

    answer += ch;
  }

  return answer;
}

/**
 * 문제 이해
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문 만들기
 * 공백은 그대로, 알파벳만 순환(z 다음은 a)
 */

/**
 * 문제 풀이
 * 알파벳을 긴 문자열로 두고, 현재 글자가 몇 번째인지 찾은 뒤 거리만큼 더한 위치의 글자를 붙임.
 * 26으로 나눈 나머지로 z 다음은 a로 돌아감.
 */
