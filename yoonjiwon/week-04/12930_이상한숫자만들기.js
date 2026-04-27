function solution(s) {
  let answer = "";
  let index = 0;

  for (let char of s) {
    if (char === " ") {
      answer += " ";
      index = 0;
    } else {
      answer += index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      index++;
    }
  }

  return answer;
}

// --풀이
// for...of문을 사용해 문자열을 한 글자씩 순회한다.
// 공백이 나오면 단어가 바뀌는 것이므로 index를 0으로 초기화한다.
// 공백이 아니라면 index의 짝수/홀수 여부를 확인한 뒤,
// 삼항 연산자를 사용해 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환한다.
// 문자를 처리할 때마다 index를 1씩 증가시킨다.
