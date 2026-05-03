function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join(""),
    )
    .join(" ");
}

/**
 * 문제 이해
 * 매개변수 s는 한 개 이상의 단어로 구성되어 있고,
 * 각 단어는 하나 이상의 공백문자로 구분됨
 * 각 단어의 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 바꾼 문자열 반환
 */

/**
 * 문제 풀이
 * split 사용해서 공백 기준으로 단어를 나눈 뒤
 * 인덱스가 짝수면 toUpperCase, 홀수면 toLowerCase를 사용해서 변경
 * 짝수/홀수는 맨 앞 글자가 0번째인 경우 짝수 인덱스 → 대문자
 */
