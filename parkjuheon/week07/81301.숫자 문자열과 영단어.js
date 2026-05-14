// 문제: 숫자 문자열과 영단어
// 레벨: Level 1
// 문제 간략 설명: 문자형 영단어로 되어있는 숫자를 정수형 숫자로 변환하는 문제
/*
풀이:
 1. engNum 객체에 영단어와 숫자를 매치시킴
 2. 주어진 문자 s의 길이만큼 반복하여 정수형 숫자일 경우 그대로 대입
 3. 문자형 영단어 숫자일 경우 engNum 객체의 숫자 값으로 변환하여 대입
 4. 마지막에 Number()를 이용하여 문자형인 결과를 숫자로 변환하여 반환
*/

function solution(s) {
  const engNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let word = "";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      result += s[i];
    } else {
      word += s[i];
      if (engNum[word] !== undefined) {
        result += engNum[word];
        word = "";
      }
    }
  }
  return Number(result);
}
