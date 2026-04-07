function solution(arr) {
  let stack = [];

  for (value of arr) {
    let lastValue = (stack[stack.length - 1]);

    if (value !== lastValue) {
      stack.push(value);
    };
  };

  return stack;
}

/*
문제 이해
배열 arr은 원소 0 ~ 9로 구성
연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하기
단, 제거된 후 남은 수들을 반환할 때, 기존 배열 순서 유지
 */

/*
문제 풀이
stack으로 if문 사용해서 마지막 push 값이 value 값과 다른 경우에 push하도록 구조 잡기
*/