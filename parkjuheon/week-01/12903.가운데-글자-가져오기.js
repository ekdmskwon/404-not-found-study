// 문제: 가운데 글자 가져오기
// 레벨: Level 1
// 문제 간략 설명: 문자열 길이를 기준으로 가운데 인덱스를 잡는 문제
/*
풀이:
 1. 문자열 길이를 2로 나누어 middle 변수에 가운데 인덱스 저장
 2. 삼항 연산자를 이용하여 문자열 길이가 짝수인 경우와 홀수인 경우를 나눔
 3. 짝수인 경우 slice 메서드를 이용하여 가운데 두 글자 출력
 4. 홀수인 경우 middle 값에 해당하는 인덱스 글자 출력
*/

function solution(s) {
  const middle = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
}

// 테스트
solution("abcde"); // "c"
solution("qwer"); // "we"
