function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => {
    return acc + val * (signs[i] ? 1 : -1);
  }, 0);
}
l;

// --풀이
// reduce 메서드를 이용해 absolutes 배열을 돌면서 합을 반환할 acc에 0을 초기값으로 주고 
// 삼항연산자를 이용해 signs 배열의 요소값에 따라 절댓값을 원래 정수로 환산하여 값을 구한다.