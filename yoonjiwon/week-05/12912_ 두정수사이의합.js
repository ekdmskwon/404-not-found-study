function solution(a, b) {
  let sum = 0;
  max = Math.max(a, b);
  min = Math.min(a, b);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// --풀이
// a,b값 중 큰수와 작은 수를 Math메소드를 함수를 통해 구분하고 for문을 통해 작은수부터 큰수까지의 합을 더해 반환한다.
