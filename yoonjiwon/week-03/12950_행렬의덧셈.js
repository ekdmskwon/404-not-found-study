function solution(arr1, arr2) {
  let len = arr1.length;
  let arr3 = [];
  for (let i = 0; i < len; i++) {
    let arr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    arr3.push(arr);
  }
  return arr3;
}

// --풀이
// 두 행렬의 같은 위치에 있는 원소들을 서로 더하여 새로운 행렬을 만드는 행렬의 합 로직을 수행한다.
// 이중 반복문을 통해 행(i)과 열(j)을 순회하며 각 인덱스에 대응하는 값을 합산한 뒤 결과 배열(arr3)에 담아 반환한다.
