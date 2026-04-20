/**
 * 풀이 과정
 * 1. for문으로 seoul을 순회
 * 2. "Kim"을 찾으면 해당 인덱스 i를 담아 문자열을 출력
 */

const solution = (seoul) => {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
};
