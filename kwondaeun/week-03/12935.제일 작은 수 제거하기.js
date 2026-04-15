function solution(arr) {
  
    if (arr.length <= 1) {
    return [-1];
  } 
    let min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1)
    
    return arr;
}

/**
 * 문제 해석
 * 정수 배열 arr의 가장 작은 수 제거하고 반환
 * 단, arr에서 최솟값을 제거했을 때 결과가 빈 배열이 되는 경우에는 -1 반환
 */

/**
 * 문제 풀이
 * if문 사용해서 arr 길이가 1보다 작으면 -1 반환
 * min 함수 사용해서 최솟값 계산
 * splice, indexOf로 가장 작은 인덱스 값 1개 제거 후 배열 반환
 */
