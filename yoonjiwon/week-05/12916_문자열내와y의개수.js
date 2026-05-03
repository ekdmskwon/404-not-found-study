function solution(s) {
  let sum_p = 0;
  let sum_y = 0;
  for (i of s) {
    if (i.toUpperCase() == "P") {
      sum_p += 1;
    }
    if (i.toUpperCase() == "Y") {
      sum_y += 1;
    }
  }
  if (sum_p == sum_y) {
    return true;
  }
  return false;
}

// --풀이
// s문자열을 for문을 통해 한 문자씩 비교하면서 대소문자 구분이 없기 때문에 toUpperCase를 통해서
// 대문자로 통일해서 p와y의 개수를 구한다. p와y의 수가 같으면 true, 다르면 false를 반환한다.
