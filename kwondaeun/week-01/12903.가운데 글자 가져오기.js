function solution(s) {
      
    let mid = Math.floor(s.length / 2) ;    // 파라미터 s를 2로 나누고 Math.floor를 사용해 정수화한 중앙 인덱스 계산
    
    return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];   // 삼항 연산자를 사용해서 짝수일 때 mid 두 글자, 홀수일 때 mid 한 글자 출력
}
