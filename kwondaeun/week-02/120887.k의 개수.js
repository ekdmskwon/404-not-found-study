function solution(i, j, k) {
  let kCount = 0;

  for (let n = i; n <= j; n++) {
    let str = String(n);

    for (let count of str) {
      if (count === String(k)) {
        kCount++;
      }
    }
  }
  return kCount;
}

/*
문제 해석
i ~ j 사이에 요소 k가 몇 개있는지 반환 
*/

/*
문제 풀이
1. 중첩 for문 사용해서 반복
2. String() 함수 사용해서 파라미터 string으로 변환
3. string화한 요소 중 k와 같을 때 count + 1
*/
