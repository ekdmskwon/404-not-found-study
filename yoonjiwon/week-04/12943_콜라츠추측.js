function solution(num) {
  let count = 0;
  while (num != 1) {
    if (count == 500) {
      return -1;
    }
    if (num % 2 == 0) {
      num /= 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }
  return count;
}

// --풀이
// 카운트를 셀 count 변수를 선언하고 n이 1일때까지 while문안에서 조건에 따라 n을 업데이트한다. 
// count가 500이 되면 while문에서 -1값을 바로 return 하고 아니면 count를 반환한다.